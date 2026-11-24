export const id = 251;
export const ids = [251];
export const modules = {
  40319: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => qm,
      f: () => Im
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(40220),
      xm = fm(37203),
      wm = fm(37185),
      Dm = fm(40326),
      im = fm(38766),
      Rm = fm(37224),
      pm = fm(39993),
      Em = fm(38151),
      om = fm(37813),
      Om = fm(40078),
      Ym = fm(40129);
    let qm = (() => {
      var mm;
      let Tm, fm, Rm, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm, zm, Zm, km, bm, Sm, em, Nm = Dm.c,
        Gm = [],
        Xm = [],
        Pm = [],
        Hm = [],
        ym = [],
        Cm = [],
        rm = [],
        sm = [],
        lm = [],
        Mm = [],
        um = [],
        Bm = [],
        Lm = [],
        tm = [],
        Um = [],
        dm = [],
        gm = [],
        Wm = [],
        Fm = [],
        mT = [],
        TT = [],
        fT = [],
        hT = [],
        AT = [],
        aT = [];
      return mm = class extends Nm {
        get position() {
          return this._position
        }
        set position(mm) {
          this._position = mm
        }
        set upVector(mm) {
          this._upVector = mm
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let Tm, fm;
          if (this.mode === mm.PERSPECTIVE_CAMERA) this.fovMode === mm.FOVMODE_VERTICAL_FIXED ? (fm = 2 * this.minZ * Math.tan(this.fov / 2), Tm = this.dO().getAspectRatio(this) * fm) : (Tm = 2 * this.minZ * Math.tan(this.fov / 2), fm = Tm / this.dO().getAspectRatio(this));
          else {
            const mm = this.dO().getRenderWidth() / 2,
              hm = this.dO().getRenderHeight() / 2;
            Tm = (this.orthoRight ?? mm) - (this.orthoLeft ?? -mm), fm = (this.orthoTop ?? hm) - (this.orthoBottom ?? -hm)
          }
          return Tm * fm
        }
        set orthoLeft(mm) {
          this._orthoLeft = mm;
          for (const Tm of this._rigCameras) Tm.orthoLeft = mm
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(mm) {
          this._orthoRight = mm;
          for (const Tm of this._rigCameras) Tm.orthoRight = mm
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(mm) {
          this._orthoBottom = mm;
          for (const Tm of this._rigCameras) Tm.orthoBottom = mm
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(mm) {
          this._orthoTop = mm;
          for (const Tm of this._rigCameras) Tm.orthoTop = mm
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(Tm / (2 * mm))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(mm) {
          this._baseInertia = mm
        }
        set mode(mm) {
          this._mode = mm;
          for (const Tm of this._rigCameras) Tm.mode = mm
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(Tm, fm, Am) {
          let Dm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, Om.c)(), super(Tm, Am, !1), this.inputs = (0, hm.i)(this, Gm), this._position = (0, hm.i)(this, Xm, wm.p.Zero()), this._upVector = ((0, hm.i)(this, Pm), (0, hm.i)(this, Hm, wm.p.Up())), this.oblique = ((0, hm.i)(this, ym), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, hm.i)(this, Cm, .8), this.projectionPlaneTilt = ((0, hm.i)(this, rm), (0, hm.i)(this, sm, 0)), this.minZ = ((0, hm.i)(this, lm), (0, hm.i)(this, Mm, 1)), this.maxZ = ((0, hm.i)(this, um), (0, hm.i)(this, Bm, 1e4)), this._baseInertia = ((0, hm.i)(this, Lm), .9), this._mode = mm.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Em.b(0, 0, 1, 1), this.layerMask = (0, hm.i)(this, tm, 268435455), this.fovMode = ((0, hm.i)(this, Um), (0, hm.i)(this, dm, mm.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, hm.i)(this, gm), (0, hm.i)(this, Wm, mm.RIG_MODE_NONE)), this.interaxialDistance = ((0, hm.i)(this, Fm), (0, hm.i)(this, mT, void 0)), this.isStereoscopicSideBySide = ((0, hm.i)(this, TT), (0, hm.i)(this, fT, void 0)), this.ignoreCameraMaxZ = ((0, hm.i)(this, hT), (0, hm.i)(this, AT, !1)), this.customRenderTargets = ((0, hm.i)(this, aT), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new xm.c, this.onProjectionMatrixChangedObservable = new xm.c, this.onAfterCheckInputsObservable = new xm.c, this.onRestoreStateObservable = new xm.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new wm.e, this._postProcesses = new Array, this._activeMeshes = new am.f(256), this._globalPosition = wm.p.Zero(), this._computedViewMatrix = wm.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = wm.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = wm.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.wG().defaultCameraLayerMask, this.wG().addCamera(this), Dm && !this.wG().activeCamera && (this.wG().activeCamera = this), this.position = fm, this.renderPassId = this.wG().dO().createRenderPassId(`Camera ${Tm}`)
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
          return "Bq"
        }
        toString(mm) {
          let Tm = "Name: " + this.name;
          if (Tm += ", type: " + this.getClassName(), this.animations)
            for (let fm = 0; fm < this.animations.length; fm++) Tm += ", animation[0]: " + this.animations[fm].toString(mm);
          return Tm
        }
        applyVerticalCorrection() {
          const mm = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -mm.x : mm.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(mm) {
          return -1 !== this._activeMeshes.indexOf(mm)
        }
        isReady() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (mm)
            for (const Tm of this._postProcesses)
              if (Tm && !Tm.isReady()) return !1;
          return super.isReady(mm)
        }
        _initCache() {
          super._initCache(), this._cache.position = new wm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new wm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(mm) {
          mm || super._updateCache(), this._cache.position.ZZ(this.position), this._cache.upVector.ZZ(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Tm = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let fm = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Tm;
          if (!fm) return !1;
          const hm = this.dO();
          return this.mode === mm.PERSPECTIVE_CAMERA ? fm = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === hm.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (fm = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === hm.getRenderWidth() && this._cache.renderHeight === hm.getRenderHeight(), this.oblique && (fm = fm && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), fm
        }
        attachControl(mm, Tm) {}
        detachControl(mm) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== mm.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let mm = 0; mm < this._postProcesses.length; mm++)
            if (null !== this._postProcesses[mm]) return this._postProcesses[mm];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const mm = this._getFirstPostProcess();
          mm && mm.markTextureDirty();
          for (let Tm = 0, fm = this._rigCameras.length; Tm < fm; Tm++) {
            const mm = this._rigCameras[Tm],
              fm = mm._rigPostProcess;
            if (fm) {
              "pass" === fm.getEffectName() && (mm.isIntermediate = 0 === this._postProcesses.length), mm._postProcesses = this._postProcesses.slice(0).concat(fm), fm.markTextureDirty()
            } else mm._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !mm.isReusable() && this._postProcesses.indexOf(mm) > -1 ? (im.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Tm || Tm < 0 ? this._postProcesses.push(mm) : null === this._postProcesses[Tm] ? this._postProcesses[Tm] = mm : this._postProcesses.splice(Tm, 0, mm), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.HTm(), this._postProcesses.indexOf(mm))
        }
        detachPostProcess(mm) {
          const Tm = this._postProcesses.indexOf(mm); - 1 !== Tm && (this._postProcesses[Tm] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.HTm(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return wm.e.Identity()
        }
        getViewMatrix(mm) {
          return !mm && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.wG().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(mm) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== mm && (this._projectionMatrix = mm)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Tm) {
          if (this._doNotComputeProjectionMatrix || !Tm && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const fm = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = fm, this._refreshFrustumPlanes = !0;
          const hm = this.dO(),
            Am = this.wG(),
            am = hm.fhm;
          if (this.mode === mm.PERSPECTIVE_CAMERA) {
            let Tm;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = hm.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Tm = Am.useRightHandedSystem ? wm.e.PerspectiveFovRHToRef : wm.e.PerspectiveFovLHToRef, Tm(this.fov, hm.getAspectRatio(this), am ? fm : this.minZ, am ? this.minZ : fm, this._projectionMatrix, this.fovMode === mm.FOVMODE_VERTICAL_FIXED, hm.isNDCHalfZRange, this.projectionPlaneTilt, am)
          } else {
            const mm = hm.getRenderWidth() / 2,
              Tm = hm.getRenderHeight() / 2;
            Am.useRightHandedSystem ? this.oblique ? wm.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -mm, this.orthoRight ?? mm, this.orthoBottom ?? -Tm, this.orthoTop ?? Tm, am ? fm : this.minZ, am ? this.minZ : fm, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, hm.isNDCHalfZRange) : wm.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -mm, this.orthoRight ?? mm, this.orthoBottom ?? -Tm, this.orthoTop ?? Tm, am ? fm : this.minZ, am ? this.minZ : fm, this._projectionMatrix, hm.isNDCHalfZRange) : this.oblique ? wm.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -mm, this.orthoRight ?? mm, this.orthoBottom ?? -Tm, this.orthoTop ?? Tm, am ? fm : this.minZ, am ? this.minZ : fm, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, hm.isNDCHalfZRange) : wm.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -mm, this.orthoRight ?? mm, this.orthoBottom ?? -Tm, this.orthoTop ?? Tm, am ? fm : this.minZ, am ? this.minZ : fm, this._projectionMatrix, hm.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = hm.getRenderWidth(), this._cache.renderHeight = hm.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(mm) {
          return (this.radius || (this.target ? wm.p.Distance(this.position, this.target) : this.position.length())) + mm
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? om.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = om.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Tm && this.rigCameras.length > 0) {
            let Tm = !1;
            for (const fm of this.rigCameras) fm._updateFrustumPlanes(), Tm = Tm || mm.isInFrustum(fm._frustumPlanes);
            return Tm
          }
          return mm.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(mm) {
          return this._updateFrustumPlanes(), mm.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, pm.i)("Ray")
        }
        getForwardRayToRef(mm) {
          throw (0, pm.i)("Ray")
        }
        dispose(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.wG().stopAnimation(this), this.wG().removeCamera(this); this._rigCameras.length > 0;) {
            const mm = this._rigCameras.pop();
            mm && mm.dispose()
          }
          if (this._parentContainer) {
            const mm = this._parentContainer.cameras.indexOf(this);
            mm > -1 && this._parentContainer.cameras.splice(mm, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== mm.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let mm = this._postProcesses.length;
            for (; --mm >= 0;) {
              const Tm = this._postProcesses[mm];
              Tm && Tm.dispose(this)
            }
          }
          let hm = this.customRenderTargets.length;
          for (; --hm >= 0;) this.customRenderTargets[hm].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.wG().dO().releaseRenderPassId(this.renderPassId), super.dispose(Tm, fm)
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
        setCameraRigMode(Tm, fm) {
          if (this.cameraRigMode !== Tm) {
            for (; this._rigCameras.length > 0;) {
              const mm = this._rigCameras.pop();
              mm && mm.dispose()
            }
            if (this.cameraRigMode = Tm, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = fm.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== mm.RIG_MODE_NONE) {
              const mm = this.createRigCamera(this.name + "_L", 0);
              mm && (mm._isLeftCamera = !0);
              const Tm = this.createRigCamera(this.name + "_R", 1);
              Tm && (Tm._isRightCamera = !0), mm && Tm && (this._rigCameras.push(mm), this._rigCameras.push(Tm))
            }
            this._setRigMode(fm), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(mm) {}
        _getVRProjectionMatrix() {
          return wm.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.dO().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(mm, Tm) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[mm] = Tm, "interaxialDistance" === mm && (this._cameraRigParams.stereoHalfAngle = Tm / .0637 * (Math.PI / 180))
        }
        createRigCamera(mm, Tm) {
          return null
        }
        _updateRigCameras() {
          for (let mm = 0; mm < this._rigCameras.length; mm++) this._rigCameras[mm].minZ = this.minZ, this._rigCameras[mm].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[mm].fov = this.fov, this._rigCameras[mm].upVector.ZZ(this.upVector);
          this.cameraRigMode === mm.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const mm = Ym.d.Serialize(this);
          return mm.uniqueId = this.uniqueId, mm.type = this.getClassName(), this.parent && this.parent._serializeAsParent(mm), this.inputs && this.inputs.serialize(mm), Ym.d.AppendSerializedAnimations(this, mm), mm.mo = this.serializeAnimationRanges(), mm.isEnabled = this.isEnabled(), mm
        }
        clone(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const hm = Ym.d.Clone(mm.GetConstructorFromName(this.getClassName(), Tm, this.wG(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return hm.name = Tm, hm.parent = fm, this.onClonedObservable.notifyObservers(hm), hm
        }
        dU(mm) {
          const Tm = wm.p.Zero();
          return this.getDirectionToRef(mm, Tm), Tm
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(mm, Tm) {
          wm.p.TransformNormalToRef(mm, this.getWorldMatrix(), Tm)
        }
        static GetConstructorFromName(Tm, fm, hm) {
          let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const xm = Dm.c.Construct(Tm, fm, hm, {
            interaxial_distance: Am,
            isStereoscopicSideBySide: am
          });
          return xm || (() => mm._CreateDefaultParsedCamera(fm, hm))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let mm = this.wG().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (mm *= -1), mm
        }
      }, (() => {
        const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nm[Symbol.metadata] ?? null) : void 0;
        Tm = [(0, Am.F)("position")], fm = [(0, Am.F)("upVector")], Rm = [(0, Am.J)()], qm = [(0, Am.J)()], jm = [(0, Am.J)()], Vm = [(0, Am.J)()], Im = [(0, Am.J)()], Km = [(0, Am.J)()], Qm = [(0, Am.J)()], nm = [(0, Am.J)()], Jm = [(0, Am.J)()], cm = [(0, Am.J)()], zm = [(0, Am.J)()], Zm = [(0, Am.J)()], km = [(0, Am.J)()], bm = [(0, Am.J)()], Sm = [(0, Am.J)()], em = [(0, Am.J)()], (0, hm.g)(mm, null, Rm, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: mm => "orthoLeft" in mm,
            get: mm => mm.orthoLeft
          },
          metadata: am
        }, null, Gm), (0, hm.g)(mm, null, qm, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: mm => "orthoRight" in mm,
            get: mm => mm.orthoRight
          },
          metadata: am
        }, null, Gm), (0, hm.g)(mm, null, jm, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: mm => "orthoBottom" in mm,
            get: mm => mm.orthoBottom
          },
          metadata: am
        }, null, Gm), (0, hm.g)(mm, null, Vm, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: mm => "orthoTop" in mm,
            get: mm => mm.orthoTop
          },
          metadata: am
        }, null, Gm), (0, hm.g)(mm, null, Jm, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: mm => "inertia" in mm,
            get: mm => mm.inertia
          },
          metadata: am
        }, null, Gm), (0, hm.g)(mm, null, cm, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: mm => "mode" in mm,
            get: mm => mm.mode
          },
          metadata: am
        }, null, Gm), (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: mm => "_position" in mm,
            get: mm => mm._position,
            set: (mm, Tm) => {
              mm._position = Tm
            }
          },
          metadata: am
        }, Xm, Pm), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: mm => "_upVector" in mm,
            get: mm => mm._upVector,
            set: (mm, Tm) => {
              mm._upVector = Tm
            }
          },
          metadata: am
        }, Hm, ym), (0, hm.g)(null, null, Im, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: mm => "fov" in mm,
            get: mm => mm.fov,
            set: (mm, Tm) => {
              mm.fov = Tm
            }
          },
          metadata: am
        }, Cm, rm), (0, hm.g)(null, null, Km, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: mm => "projectionPlaneTilt" in mm,
            get: mm => mm.projectionPlaneTilt,
            set: (mm, Tm) => {
              mm.projectionPlaneTilt = Tm
            }
          },
          metadata: am
        }, sm, lm), (0, hm.g)(null, null, Qm, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: mm => "minZ" in mm,
            get: mm => mm.minZ,
            set: (mm, Tm) => {
              mm.minZ = Tm
            }
          },
          metadata: am
        }, Mm, um), (0, hm.g)(null, null, nm, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: mm => "maxZ" in mm,
            get: mm => mm.maxZ,
            set: (mm, Tm) => {
              mm.maxZ = Tm
            }
          },
          metadata: am
        }, Bm, Lm), (0, hm.g)(null, null, zm, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: mm => "layerMask" in mm,
            get: mm => mm.layerMask,
            set: (mm, Tm) => {
              mm.layerMask = Tm
            }
          },
          metadata: am
        }, tm, Um), (0, hm.g)(null, null, Zm, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "fovMode" in mm,
            get: mm => mm.fovMode,
            set: (mm, Tm) => {
              mm.fovMode = Tm
            }
          },
          metadata: am
        }, dm, gm), (0, hm.g)(null, null, km, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "cameraRigMode" in mm,
            get: mm => mm.cameraRigMode,
            set: (mm, Tm) => {
              mm.cameraRigMode = Tm
            }
          },
          metadata: am
        }, Wm, Fm), (0, hm.g)(null, null, bm, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: mm => "interaxialDistance" in mm,
            get: mm => mm.interaxialDistance,
            set: (mm, Tm) => {
              mm.interaxialDistance = Tm
            }
          },
          metadata: am
        }, mT, TT), (0, hm.g)(null, null, Sm, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: mm => "isStereoscopicSideBySide" in mm,
            get: mm => mm.isStereoscopicSideBySide,
            set: (mm, Tm) => {
              mm.isStereoscopicSideBySide = Tm
            }
          },
          metadata: am
        }, fT, hT), (0, hm.g)(null, null, em, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: mm => "ignoreCameraMaxZ" in mm,
            get: mm => mm.ignoreCameraMaxZ,
            set: (mm, Tm) => {
              mm.ignoreCameraMaxZ = Tm
            }
          },
          metadata: am
        }, AT, aT), am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: am
        })
      })(), mm._CreateDefaultParsedCamera = (mm, Tm) => {
        throw (0, pm.i)("UniversalCamera")
      }, mm.PERSPECTIVE_CAMERA = 0, mm.ORTHOGRAPHIC_CAMERA = 1, mm.FOVMODE_VERTICAL_FIXED = 0, mm.FOVMODE_HORIZONTAL_FIXED = 1, mm.RIG_MODE_NONE = 0, mm.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, mm.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, mm.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, mm.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, mm.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, mm.RIG_MODE_VR = 20, mm.RIG_MODE_CUSTOM = 22, mm.ForceAttachControlToAlwaysPreventDefault = !1, mm
    })();

    function jm(mm, Tm) {
      const fm = mm.type,
        hm = qm.GetConstructorFromName(fm, mm.name, Tm, mm.interaxial_distance, mm.isStereoscopicSideBySide),
        Am = Ym.d.Parse(hm, mm, Tm);
      if (void 0 !== mm.parentId && (Am._waitingParentId = mm.parentId), void 0 !== mm.parentInstanceIndex && (Am._waitingParentInstanceIndex = mm.parentInstanceIndex), Am.inputs && (Am.inputs.parse(mm), Am._setupInputs()), mm.upVector && (Am.upVector = wm.p.FromArray(mm.upVector)), Am.setPosition && (Am.position.Z8(0, 0, 0), Am.setPosition(wm.p.FromArray(mm.position))), mm.target && Am.setTarget && Am.setTarget(wm.p.FromArray(mm.target)), mm.cameraRigMode) {
        const Tm = mm.interaxial_distance ? {
          interaxialDistance: mm.interaxial_distance
        } : {};
        Am.setCameraRigMode(mm.cameraRigMode, Tm)
      }
      if (mm.animations) {
        for (let Tm = 0; Tm < mm.animations.length; Tm++) {
          const fm = mm.animations[Tm],
            hm = (0, Rm.c)("BABYLON.Animation");
          hm && Am.animations.push(hm.Parse(fm))
        }
        Dm.c.ParseAnimationRanges(Am, mm, Tm)
      }
      return mm.autoAnimate && Tm.beginAnimation(Am, mm.autoAnimateFrom, mm.autoAnimateTo, mm.autoAnimateLoop, mm.autoAnimateSpeed || 1), void 0 !== mm.isEnabled && Am.Dk(mm.isEnabled), Am
    }
    let Vm = !1;

    function Im() {
      Vm || (Vm = !0, qm.Parse = jm)
    }
  },
  40334: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am
    });
    var hm = fm(37185);
    class Am {
      constructor(mm, Tm, fm) {
        this._cameraPosition = Tm, this._behavior = fm, this.activeInput = !1, this.speed = 1, this.XB = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new hm.p, this.rotationAccumulatedPixels = new hm.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = hm.p.Zero(), this.rotationDeltaCurrentFrame = hm.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new hm.p, this.referenceFrameRate = 60, this._rotationVelocity = new hm.p, this._prevFrameTimeMs = 0, this._scene = mm
      }
      computeCurrentFrameDeltas() {
        const mm = this._scene.dO().getDeltaTime(),
          Tm = this._getEffectiveDeltaMs(mm);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Y5(0), this.rotationDeltaCurrentFrame.Y5(0), this.zoomDeltaCurrentFrame = 0, void(mm > 0 && (this._prevFrameTimeMs = mm));
        this.panDeltaCurrentFrame.Y5(0), this.rotationDeltaCurrentFrame.Y5(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Z8(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Tm, this.panDeltaCurrentFrame), this._rotationVelocity.Z8(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.Z8(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Tm, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Tm, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.XB * this._zoomSpeedMultiplier) * Tm, mm > 0 && (this._prevFrameTimeMs = mm), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Y5(0), this.rotationAccumulatedPixels.Y5(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Y5(0), this.rotationAccumulatedPixels.Y5(0)
      }
      resetPanVelocity() {
        this._panVelocity.Y5(0), this.panAccumulatedPixels.Y5(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(mm) {
        const Tm = this._scene.dO().getDeltaTime(),
          fm = this._getEffectiveDeltaMs(Tm),
          hm = 1e3 / this.referenceFrameRate;
        return Math.pow(mm, fm / hm)
      }
      getFrameIndependentInputScale(mm) {
        const Tm = 1 - mm;
        if (Tm <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(mm)) / Tm
      }
      _getEffectiveDeltaMs(mm) {
        return mm > 0 ? mm : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(mm, Tm, fm) {
        let hm = mm;
        const Am = this._scene.dO().getDeltaTime(),
          am = this._getEffectiveDeltaMs(Am);
        if (0 === am) return hm;
        const xm = this.getFrameIndependentDecay(fm);
        if (hm *= xm, 0 !== Tm || this.activeInput) {
          const mm = 1 - fm;
          hm += Tm / am * (mm > 0 ? (1 - xm) / mm : 1)
        } else Math.abs(hm) < 1e-6 && (hm = 0);
        return hm
      }
    }
  },
  40337: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      constructor(mm, Tm) {
        this.inputMap = [], this.handlers = mm, this._createDefaultEntries = Tm, this.resetInputMap()
      }
      resolveInteraction(mm, Tm) {
        for (const fm of this.inputMap)
          if (fm.source === mm && this._entryMatches(fm, Tm)) return fm;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(mm, Tm, fm) {
        const hm = this.inputMap;
        for (let Am = 0; Am < hm.length; Am++) {
          const am = hm[Am];
          if (am.source === mm && am.interaction === Tm && this._entryConditionsMatch(am, fm)) return am
        }
      }
      getEntries(mm, Tm, fm) {
        const hm = [],
          Am = this.inputMap;
        for (let am = 0; am < Am.length; am++) {
          const xm = Am[am];
          xm.source === mm && xm.interaction === Tm && this._entryConditionsMatch(xm, fm) && hm.push(xm)
        }
        return hm
      }
      addEntry(mm) {
        const Tm = this._entrySpecificity(mm);
        let fm = this.inputMap.length;
        for (let hm = 0; hm < this.inputMap.length; hm++)
          if (this._entrySpecificity(this.inputMap[hm]) < Tm) {
            fm = hm;
            break
          } this.inputMap.splice(fm, 0, mm)
      }
      setInteraction(mm, Tm, fm) {
        const hm = this.resolveInteraction(mm, Tm);
        return hm && this._entryCoversAllConditionsOf(hm, Tm) ? (hm.interaction = fm, !0) : (this.addEntry({
          source: mm,
          ...Tm ?? {},
          interaction: fm
        }), !0)
      }
      _entryCoversAllConditionsOf(mm, Tm) {
        if (!Tm) return !0;
        const fm = mm;
        for (const hm of Object.keys(Tm)) {
          const mm = Tm[hm];
          if (void 0 !== mm)
            if ("modifiers" === hm) {
              const Tm = fm.modifiers ?? {};
              for (const fm of Object.keys(mm))
                if (void 0 !== mm[fm] && void 0 === Tm[fm]) return !1
            } else if (void 0 === fm[hm]) return !1
        }
        return !0
      }
      setInteractions(mm, Tm, fm) {
        let hm = 0;
        const Am = this.inputMap;
        for (let am = 0; am < Am.length; am++) {
          const xm = Am[am];
          xm.source === mm && this._entryMatches(xm, Tm) && (xm.interaction = fm, hm++)
        }
        return hm
      }
      _entryMatches(mm, Tm) {
        switch (mm.source) {
          case "pointer":
            return (void 0 === mm.button || mm.button === Tm?.button) && this._matchModifiers(mm.modifiers, Tm?.modifiers);
          case "wheel":
            return this._matchModifiers(mm.modifiers, Tm?.modifiers);
          case "touch":
            return void 0 === mm.touchCount || mm.touchCount === Tm?.touchCount;
          case "keyboard":
            return (void 0 === mm.key || (Array.isArray(mm.key) ? -1 !== mm.key.indexOf(Tm?.key ?? -1) : mm.key === Tm?.key)) && this._matchModifiers(mm.modifiers, Tm?.modifiers)
        }
      }
      _entryConditionsMatch(mm, Tm) {
        if (!Tm) return !0;
        switch (mm.source) {
          case "pointer":
            return (!("button" in Tm) || mm.button === Tm.button) && (!("modifiers" in Tm) || this._entryModifiersMatch(mm.modifiers, Tm.modifiers));
          case "wheel":
            return !("modifiers" in Tm) || this._entryModifiersMatch(mm.modifiers, Tm.modifiers);
          case "touch":
            return !("touchCount" in Tm) || mm.touchCount === Tm.touchCount;
          case "keyboard":
            if ("key" in Tm) {
              if (void 0 === mm.key) return void 0 === Tm.key;
              if (void 0 === Tm.key || (Array.isArray(mm.key) ? -1 === mm.key.indexOf(Tm.key) : mm.key !== Tm.key)) return !1
            }
            return !("modifiers" in Tm) || this._entryModifiersMatch(mm.modifiers, Tm.modifiers)
        }
      }
      _entrySpecificity(mm) {
        let Tm = 0;
        return "button" in mm && void 0 !== mm.button && Tm++, "key" in mm && void 0 !== mm.key && Tm++, "touchCount" in mm && void 0 !== mm.touchCount && Tm++, "modifiers" in mm && mm.modifiers && Tm++, Tm
      }
      _matchModifiers(mm, Tm) {
        return !mm || (void 0 === mm.ctrl || mm.ctrl === (Tm?.ctrl ?? !1)) && ((void 0 === mm.shift || mm.shift === (Tm?.shift ?? !1)) && (void 0 === mm.alt || mm.alt === (Tm?.alt ?? !1)))
      }
      _entryModifiersMatch(mm, Tm) {
        if (!Tm) return !mm;
        return void 0 !== Tm.ctrl || void 0 !== Tm.shift || void 0 !== Tm.alt ? (void 0 === Tm.ctrl || mm?.ctrl === Tm.ctrl) && ((void 0 === Tm.shift || mm?.shift === Tm.shift) && (void 0 === Tm.alt || mm?.alt === Tm.alt)) : !mm || void 0 === mm.ctrl && void 0 === mm.shift && void 0 === mm.alt
      }
    }
  },
  40316: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => jm,
      g: () => Ym
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(40319),
      xm = fm(37185),
      wm = fm(37191),
      Dm = fm(40330),
      im = fm(40326),
      Rm = fm(40334),
      pm = fm(40337);
    class Em extends Rm.e {
      constructor(mm, Tm, fm) {
        super(mm, Tm, fm), this.input = new pm.b({
          translate: (mm, Tm, fm) => {
            this.panAccumulatedPixels.x += mm, this.panAccumulatedPixels.y += Tm, this.panAccumulatedPixels.z += fm
          },
          rotate: (mm, Tm) => {
            this.rotationAccumulatedPixels.x += mm, this.rotationAccumulatedPixels.y += Tm
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
    const om = xm.e.Zero(),
      Om = xm.h.Identity();
    let Ym = (() => {
        var mm;
        let Tm, fm, im, Rm, pm = am.b,
          Ym = [],
          qm = [],
          jm = [],
          Vm = [],
          Im = [],
          Km = [],
          Qm = [],
          nm = [];
        return mm = class extends pm {
          get inertia() {
            return this._targetInertia
          }
          set inertia(mm) {
            this._targetInertia = mm, this.movement && (this.movement.panInertia = mm, this.movement.rotationInertia = mm)
          }
          constructor(mm, Tm, fm) {
            super(mm, Tm, fm, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new xm.p(0, 0, 0), this.cameraRotation = new xm.l(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, hm.i)(this, Ym, !1), this.rotation = ((0, hm.i)(this, qm), (0, hm.i)(this, jm, void 0)), this.rotationQuaternion = (0, hm.i)(this, Vm), this.speed = (0, hm.i)(this, Im, 2), this.noRotationConstraint = ((0, hm.i)(this, Km), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = wm.c, this._rotationEpsilon = wm.c, this.lockedTarget = (0, hm.i)(this, Qm, null), this._currentTarget = ((0, hm.i)(this, nm), xm.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = xm.e.Zero(), this._cameraTransformMatrix = xm.e.Zero(), this._cameraRotationMatrix = xm.e.Zero(), this._transformedReferencePoint = xm.p.Zero(), this._deferredPositionUpdate = new xm.p, this._deferredRotationQuaternionUpdate = new xm.h, this._deferredRotationUpdate = new xm.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = xm.p.Forward(this.wG().useRightHandedSystem), this.rotation = new xm.p(0, this.wG().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Em(this.wG(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(mm) {
            this.getWorldMatrix();
            const Tm = xm.j.WO[0],
              fm = xm.j.WO[1];
            return fm.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(fm, Tm), Tm.scaleInPlace(mm), this.globalPosition.add(Tm)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const mm = this.lockedTarget;
              mm.computeWorldMatrix().getTranslationToRef(mm.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.Z8(0, 0, 0), this.cameraRotation.Z8(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new xm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new xm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new xm.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(mm) {
            mm || super._updateCache();
            const Tm = this._getLockedTargetPosition();
            Tm ? this._cache.lockedTarget ? this._cache.lockedTarget.ZZ(Tm) : this._cache.lockedTarget = Tm.clone() : this._cache.lockedTarget = null, this._cache.rotation.ZZ(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.ZZ(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const mm = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(mm) : !mm) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const mm = this.dO();
            return this.speed * Math.sqrt(mm.getDeltaTime() / (100 * mm.getFps()))
          }
          setTarget(mm) {
            this.upVector.normalize(), this._initialFocalDistance = mm.subtract(this.position).length(), this.position.z === mm.z && (this.position.z += wm.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.wG().useRightHandedSystem ? xm.e.LookAtRHToRef(this.position, mm, xm.p.UpReadOnly, om) : xm.e.LookAtLHToRef(this.position, mm, xm.p.UpReadOnly, om), om.invert();
            const Tm = this.rotationQuaternion || Om;
            xm.h.FromRotationMatrixToRef(om, Tm), Tm.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(mm) {
            this.setTarget(mm)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(xm.j.Matrix[0]), xm.p.TransformNormalToRef(this.cameraDirection, xm.j.Matrix[0], xm.j.WO[0]), this._deferredPositionUpdate.addInPlace(xm.j.WO[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.ZZ(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.ZZ(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const mm = this.movement,
              Tm = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            mm.panAccumulatedPixels.addInPlace(this.cameraDirection), mm.rotationAccumulatedPixels.x += this.cameraRotation.x, mm.rotationAccumulatedPixels.y += this.cameraRotation.y, mm.computeCurrentFrameDeltas(), this.cameraDirection.ZZ(mm.panDeltaCurrentFrame), this.cameraRotation.set(mm.rotationDeltaCurrentFrame.x, mm.rotationDeltaCurrentFrame.y);
            const fm = this.speed * this._panningEpsilon;
            !Tm && Math.abs(this.cameraDirection.x) < fm && Math.abs(this.cameraDirection.y) < fm && Math.abs(this.cameraDirection.z) < fm && (this.cameraDirection.Y5(0), mm.resetPanVelocity());
            const hm = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Am = this._decideIfNeedsToMove(),
              am = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.ZZ(this.rotation), this._deferredPositionUpdate.ZZ(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.ZZ(this.rotationQuaternion), Am && this._updatePosition(), am) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * hm, this._deferredRotationUpdate.y += this.cameraRotation.y * hm, !this.noRotationConstraint) {
                const mm = 1.570796;
                this._deferredRotationUpdate.x > mm && (this._deferredRotationUpdate.x = mm), this._deferredRotationUpdate.x < -mm && (this._deferredRotationUpdate.x = -mm)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.ZZ(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (xm.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.ZZ(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Y5(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : xm.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return xm.p.TransformNormalToRef(xm.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), xm.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Dm.e.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (xm.h.FromEulerVectorToRef(this.rotation, Om), Dm.e.Y.rotateByQuaternionToRef(Om, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(mm, Tm, fm) {
            if (this.wG().useRightHandedSystem ? xm.e.LookAtRHToRef(mm, Tm, fm, this._viewMatrix) : xm.e.LookAtLHToRef(mm, Tm, fm, this._viewMatrix), this.parent) {
              const mm = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(mm, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Tm, fm) {
            if (this.cameraRigMode !== am.b.RIG_MODE_NONE) {
              const fm = new mm(Tm, this.position.clone(), this.wG());
              return fm.isRigCamera = !0, fm.rigParent = this, this.cameraRigMode === am.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new xm.h), fm._cameraRigParams = {}, fm.rotationQuaternion = new xm.h), fm.mode = this.mode, fm.orthoLeft = this.orthoLeft, fm.orthoRight = this.orthoRight, fm.orthoTop = this.orthoTop, fm.orthoBottom = this.orthoBottom, fm
            }
            return null
          }
          _updateRigCameras() {
            const mm = this._rigCameras[0],
              Tm = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case am.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case am.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case am.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case am.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case am.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const fm = this.cameraRigMode === am.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  hm = this.cameraRigMode === am.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * fm, mm), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * hm, Tm);
                break
              }
              case am.b.RIG_MODE_VR:
                mm.rotationQuaternion && Tm.rotationQuaternion && this.rotationQuaternion ? (mm.rotationQuaternion.ZZ(this.rotationQuaternion), Tm.rotationQuaternion.ZZ(this.rotationQuaternion)) : (mm.rotation.ZZ(this.rotation), Tm.rotation.ZZ(this.rotation)), mm.position.ZZ(this.position), Tm.position.ZZ(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Tm, fm) {
            this.getTarget().subtractToRef(this.position, mm._TargetFocalPoint), mm._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const hm = mm._TargetFocalPoint.addInPlace(this.position);
            xm.e.TranslationToRef(-hm.x, -hm.y, -hm.z, mm._TargetTransformMatrix), mm._TargetTransformMatrix.multiplyToRef(xm.e.RotationAxis(fm.upVector, Tm), mm._RigCamTransformMatrix), xm.e.TranslationToRef(hm.x, hm.y, hm.z, mm._TargetTransformMatrix), mm._RigCamTransformMatrix.multiplyToRef(mm._TargetTransformMatrix, mm._RigCamTransformMatrix), xm.p.TransformCoordinatesToRef(this.position, mm._RigCamTransformMatrix, fm.position), fm.setTarget(hm)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(pm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.J)()], fm = [(0, Am.F)()], im = [(0, Am.J)()], Rm = [(0, Am.v)("lockedTargetId")], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: mm => "updateUpVectorFromRotation" in mm,
              get: mm => mm.updateUpVectorFromRotation,
              set: (mm, Tm) => {
                mm.updateUpVectorFromRotation = Tm
              }
            },
            metadata: am
          }, Ym, qm), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: mm => "rotation" in mm,
              get: mm => mm.rotation,
              set: (mm, Tm) => {
                mm.rotation = Tm
              }
            },
            metadata: am
          }, jm, Vm), (0, hm.g)(null, null, im, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: mm => "speed" in mm,
              get: mm => mm.speed,
              set: (mm, Tm) => {
                mm.speed = Tm
              }
            },
            metadata: am
          }, Im, Km), (0, hm.g)(null, null, Rm, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: mm => "lockedTarget" in mm,
              get: mm => mm.lockedTarget,
              set: (mm, Tm) => {
                mm.lockedTarget = Tm
              }
            },
            metadata: am
          }, Qm, nm), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm._RigCamTransformMatrix = new xm.e, mm._TargetTransformMatrix = new xm.e, mm._TargetFocalPoint = new xm.p, mm
      })(),
      qm = !1;

    function jm() {
      qm || (qm = !0, im.c.AddNodeConstructor("TargetCamera", ((mm, Tm) => () => new Ym(mm, xm.p.Zero(), Tm))))
    }
  },
  40075: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am
    });
    var hm = fm(40014);
    let Am = !1;

    function am() {
      Am || (Am = !0, hm.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, hm.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, hm.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, hm.b.prototype.getAspectRatio = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = mm.viewport;
        return this.getRenderWidth(Tm) * fm.width / (this.getRenderHeight(Tm) * fm.height)
      }, hm.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, hm.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40147: (mm, Tm, fm) => {
    var hm = fm(40014),
      Am = fm(40154);
    let am = !1;
    am || (am = !0, (0, Am.A)(), hm.b.prototype._loadFileAsync = async function(mm, Tm, fm) {
      return await new Promise(((hm, Am) => {
        this._loadFile(mm, (mm => {
          hm(mm)
        }), void 0, Tm, fm, ((mm, Tm) => {
          Am(Tm)
        }))
      }))
    })
  },
  40145: (mm, Tm, fm) => {
    (0, fm(40078).c)()
  },
  40078: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(40014);
    let Am = !1;

    function am() {
      Am || (Am = !0, hm.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, hm.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, hm.b.prototype.createRenderPassId = function(mm) {
        const Tm = ++hm.b._RenderPassIdCounter;
        return this._renderPassNames[Tm] = mm ?? "NONAME", Tm
      }, hm.b.prototype.releaseRenderPassId = function(mm) {
        this._renderPassNames[mm] = void 0;
        for (let Tm = 0; Tm < this.scenes.length; ++Tm) {
          const fm = this.scenes[Tm];
          for (let Tm = 0; Tm < fm.meshes.length; ++Tm) {
            const hm = fm.meshes[Tm];
            if (hm._releaseRenderPassId(mm), hm.jK)
              for (let Tm = 0; Tm < hm.jK.length; ++Tm) {
                hm.jK[Tm]._removeDrawWrapper(mm)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(mm)
      })
    }
  },
  40188: (mm, Tm, fm) => {
    var hm = fm(40193),
      Am = fm(40014);
    let am = !1;
    am || (am = !0, Am.b.GetCompatibleTextureLoader = hm.e)
  },
  40082: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am
    });
    var hm = fm(39956);
    let Am = !1;

    function am() {
      Am || (Am = !0, hm.ThinEngine.prototype.setAlphaMode = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[fm] === mm) {
          if (!Tm) {
            const Tm = 0 === mm;
            this.depthCullingState.depthMask !== Tm && (this.depthCullingState.depthMask = Tm)
          }
          return
        }
        const hm = 0 === mm;
        this._alphaState.setAlphaBlend(!hm, fm), this._alphaState.setAlphaMode(mm, fm), Tm || (this.depthCullingState.depthMask = hm), this._alphaMode[fm] = mm
      })
    }
  },
  40096: (mm, Tm, fm) => {
    var hm = fm(39942),
      Am = fm(38766),
      am = fm(39956),
      xm = fm(40100),
      wm = fm(40064);
    class Dm extends xm.b {
      setDepthStencilTexture(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(mm, Tm), !mm) return;
        const fm = this._engine,
          hm = this._context,
          Am = mm._hardwareTexture;
        if (Am && mm._autoMSAAManagement && this._MSAAFramebuffer) {
          const Tm = fm._currentFramebuffer;
          fm._bindUnboundFramebuffer(this._MSAAFramebuffer), hm.framebufferRenderbuffer(hm.FRAMEBUFFER, (0, wm.c)(mm.format) ? hm.DEPTH_STENCIL_ATTACHMENT : hm.DEPTH_ATTACHMENT, hm.RENDERBUFFER, Am.getMSAARenderBuffer()), fm._bindUnboundFramebuffer(Tm)
        }
      }
      constructor(mm, Tm, fm, hm, Am) {
        super(mm, Tm, fm, hm), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Am
      }
      _cloneRenderTargetWrapper() {
        let mm;
        return this._colorTextureArray && this._depthStencilTextureArray ? (mm = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), mm.texture.isReady = !0) : mm = super._cloneRenderTargetWrapper(), mm
      }
      _swapRenderTargetWrapper(mm) {
        super._swapRenderTargetWrapper(mm), mm._framebuffer = this._framebuffer, mm._depthStencilBuffer = this._depthStencilBuffer, mm._MSAAFramebuffer = this._MSAAFramebuffer, mm._colorTextureArray = this._colorTextureArray, mm._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          am = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const mm = this._engine,
            Tm = mm._currentFramebuffer,
            fm = this._context;
          mm._bindUnboundFramebuffer(this._framebuffer), fm.framebufferRenderbuffer(fm.FRAMEBUFFER, fm.DEPTH_STENCIL_ATTACHMENT, fm.RENDERBUFFER, null), fm.framebufferRenderbuffer(fm.FRAMEBUFFER, fm.DEPTH_ATTACHMENT, fm.RENDERBUFFER, null), fm.framebufferRenderbuffer(fm.FRAMEBUFFER, fm.STENCIL_ATTACHMENT, fm.RENDERBUFFER, null), mm._bindUnboundFramebuffer(Tm), fm.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(mm, Tm, fm, hm, Am, am)
      }
      shareDepth(mm) {
        super.shareDepth(mm);
        const Tm = this._context,
          fm = this._depthStencilBuffer,
          hm = mm._MSAAFramebuffer || mm._framebuffer,
          Am = this._engine;
        mm._depthStencilBuffer && mm._depthStencilBuffer !== fm && Tm.deleteRenderbuffer(mm._depthStencilBuffer), mm._depthStencilBuffer = fm;
        const am = mm._generateStencilBuffer ? Tm.DEPTH_STENCIL_ATTACHMENT : Tm.DEPTH_ATTACHMENT;
        Am._bindUnboundFramebuffer(hm), Tm.framebufferRenderbuffer(Tm.FRAMEBUFFER, am, Tm.RENDERBUFFER, fm), Am._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Am = mm._hardwareTexture;
        if (!Am) return;
        const am = this._framebuffer,
          xm = this._engine,
          wm = xm._currentFramebuffer;
        let Dm;
        if (xm._bindUnboundFramebuffer(am), xm.zY > 1) {
          const am = this._context;
          Dm = am["COLOR_ATTACHMENT" + Tm], mm.is2DArray || mm.is3D ? (fm = fm ?? this.layerIndices?.[Tm] ?? 0, am.framebufferTextureLayer(am.FRAMEBUFFER, Dm, Am.underlyingResource, hm, fm)) : mm.isCube ? (fm = fm ?? this.faceIndices?.[Tm] ?? 0, am.framebufferTexture2D(am.FRAMEBUFFER, Dm, am.TEXTURE_CUBE_MAP_POSITIVE_X + fm, Am.underlyingResource, hm)) : am.framebufferTexture2D(am.FRAMEBUFFER, Dm, am.TEXTURE_2D, Am.underlyingResource, hm)
        } else {
          const mm = this._context;
          Dm = mm["COLOR_ATTACHMENT" + Tm + "_WEBGL"];
          const am = void 0 !== fm ? mm.TEXTURE_CUBE_MAP_POSITIVE_X + fm : mm.TEXTURE_2D;
          mm.framebufferTexture2D(mm.FRAMEBUFFER, Dm, am, Am.underlyingResource, hm)
        }
        if (mm._autoMSAAManagement && this._MSAAFramebuffer) {
          const mm = this._context;
          xm._bindUnboundFramebuffer(this._MSAAFramebuffer), mm.framebufferRenderbuffer(mm.FRAMEBUFFER, Dm, mm.RENDERBUFFER, Am.getMSAARenderBuffer())
        }
        xm._bindUnboundFramebuffer(wm)
      }
      setTexture(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(mm, Tm, fm), this._bindTextureRenderTarget(mm, Tm)
      }
      setLayerAndFaceIndices(mm, Tm) {
        if (super.setLayerAndFaceIndices(mm, Tm), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const fm = this._attachments?.length ?? this.textures.length;
        for (let hm = 0; hm < fm; hm++) {
          const mm = this.textures[hm];
          mm && (mm.is2DArray || mm.is3D ? this._bindTextureRenderTarget(mm, hm, this.layerIndices[hm]) : mm.isCube ? this._bindTextureRenderTarget(mm, hm, this.faceIndices[hm]) : this._bindTextureRenderTarget(mm, hm))
        }
      }
      setLayerAndFaceIndex() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(mm, Tm, fm), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const hm = this.textures[mm];
        hm.is2DArray || hm.is3D ? this._bindTextureRenderTarget(this.textures[mm], mm, this.layerIndices[mm]) : hm.isCube && this._bindTextureRenderTarget(this.textures[mm], mm, this.faceIndices[mm])
      }
      resolveMSAATextures() {
        const mm = this._engine,
          Tm = mm._currentFramebuffer;
        mm._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), mm._bindUnboundFramebuffer(Tm)
      }
      dispose() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const Tm = this._context;
        mm || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (Tm.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (Tm.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (Tm.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(mm)
      }
    }
    let im = !1;
    im || (im = !0, am.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(mm, Tm, fm) {
      const hm = new Dm(mm, Tm, fm, this, this._gl);
      return this._renderTargetWrapperCache.push(hm), hm
    }, am.ThinEngine.prototype.createRenderTargetTexture = function(mm, Tm) {
      const fm = this._createHardwareRenderTargetWrapper(!1, !1, mm);
      let hm, Am, am = !0,
        xm = !1,
        wm = !1,
        Dm = 1;
      void 0 !== Tm && "object" === typeof Tm && (am = Tm.generateDepthBuffer ?? !0, xm = !!Tm.generateStencilBuffer, wm = !!Tm.noColorAttachment, hm = Tm.colorAttachment, Dm = Tm.samples ?? 1, Am = Tm.label);
      const im = hm || (wm ? null : this._createInternalTexture(mm, Tm, !0, 5)),
        Rm = mm.width || mm,
        pm = mm.height || mm,
        Em = this._currentFramebuffer,
        om = this._gl,
        Om = om.createFramebuffer();
      if (this._bindUnboundFramebuffer(Om), fm._depthStencilBuffer = this._setupFramebufferDepthAttachments(xm, am, Rm, pm), !im || im.is2DArray || im.is3D || om.framebufferTexture2D(om.FRAMEBUFFER, om.COLOR_ATTACHMENT0, om.TEXTURE_2D, im._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Em), fm.label = Am ?? "RenderTargetWrapper", fm._framebuffer = Om, fm._generateDepthBuffer = am, fm._generateStencilBuffer = xm, fm.setTextures(im), hm) {
        if (fm._samples = hm.samples, hm.samples > 1) {
          const mm = hm._hardwareTexture.getMSAARenderBuffer(0);
          fm._MSAAFramebuffer = om.createFramebuffer(), this._bindUnboundFramebuffer(fm._MSAAFramebuffer), om.framebufferRenderbuffer(om.FRAMEBUFFER, om.COLOR_ATTACHMENT0, om.RENDERBUFFER, mm), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(fm, Dm);
      return fm
    }, am.ThinEngine.prototype._createDepthStencilTexture = function(mm, Tm, fm) {
      const am = this._gl,
        xm = mm.layers || 0,
        Dm = mm.depth || 0;
      let im = am.TEXTURE_2D;
      0 !== xm ? im = am.TEXTURE_2D_ARRAY : 0 !== Dm && (im = am.TEXTURE_3D);
      const Rm = new hm.d(this, 12);
      if (Rm.label = Tm.label, !this._caps.depthTextureExtension) return Am.b.Error("Depth texture is not supported by your browser or hardware."), Rm;
      const pm = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Tm
      };
      if (this._bindTextureDirectly(im, Rm, !0), this._setupDepthStencilTexture(Rm, mm, 0 !== pm.comparisonFunction && pm.bilinearFiltering, pm.comparisonFunction, pm.samples), void 0 !== pm.depthTextureFormat) {
        if (15 !== pm.depthTextureFormat && 16 !== pm.depthTextureFormat && 17 !== pm.depthTextureFormat && 13 !== pm.depthTextureFormat && 14 !== pm.depthTextureFormat && 18 !== pm.depthTextureFormat) return Am.b.Error(`Depth texture ${pm.depthTextureFormat} format is not supported.`), Rm;
        Rm.format = pm.depthTextureFormat
      } else Rm.format = pm.generateStencil ? 13 : 16;
      const Em = (0, wm.c)(Rm.format),
        om = this._getWebGLTextureTypeFromDepthTextureFormat(Rm.format),
        Om = Em ? am.DEPTH_STENCIL : am.DEPTH_COMPONENT,
        Ym = this._getInternalFormatFromDepthTextureFormat(Rm.format, !0, Em);
      return Rm.is2DArray ? am.texImage3D(im, 0, Ym, Rm.width, Rm.height, xm, 0, Om, om, null) : Rm.is3D ? am.texImage3D(im, 0, Ym, Rm.width, Rm.height, Dm, 0, Om, om, null) : am.texImage2D(im, 0, Ym, Rm.width, Rm.height, 0, Om, om, null), this._bindTextureDirectly(im, null), this._internalTexturesCache.push(Rm), fm._depthStencilBuffer && (am.deleteRenderbuffer(fm._depthStencilBuffer), fm._depthStencilBuffer = null), this._bindUnboundFramebuffer(fm._MSAAFramebuffer ?? fm._framebuffer), fm._generateStencilBuffer = Em, fm._depthStencilTextureWithStencil = Em, fm._depthStencilBuffer = this._setupFramebufferDepthAttachments(fm._generateStencilBuffer, fm._generateDepthBuffer, fm.width, fm.height, fm.samples, Rm.format), this._bindUnboundFramebuffer(null), Rm
    }, am.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(mm, Tm) {
      if (this.zY < 2 || !mm) return 1;
      if (mm.samples === Tm) return Tm;
      const fm = this._gl;
      Tm = Math.min(Tm, this.getCaps().maxMSAASamples), mm._depthStencilBuffer && (fm.deleteRenderbuffer(mm._depthStencilBuffer), mm._depthStencilBuffer = null), mm._MSAAFramebuffer && (fm.deleteFramebuffer(mm._MSAAFramebuffer), mm._MSAAFramebuffer = null);
      const hm = mm.texture?._hardwareTexture;
      if (hm?.releaseMSAARenderBuffers(), mm.texture && Tm > 1 && "function" === typeof fm.renderbufferStorageMultisample) {
        const Am = fm.createFramebuffer();
        if (!Am) throw new Error("Unable to create multi sampled framebuffer");
        mm._MSAAFramebuffer = Am, this._bindUnboundFramebuffer(mm._MSAAFramebuffer);
        const am = this._createRenderBuffer(mm.texture.width, mm.texture.height, Tm, -1, this._getRGBABufferInternalSizedFormat(mm.texture.type, mm.texture.format, mm.texture._useSRGBBuffer), fm.COLOR_ATTACHMENT0, !1);
        if (!am) throw new Error("Unable to create multi sampled framebuffer");
        hm?.addMSAARenderBuffer(am)
      }
      this._bindUnboundFramebuffer(mm._MSAAFramebuffer ?? mm._framebuffer), mm.texture && (mm.texture.samples = Tm), mm._samples = Tm;
      const Am = mm._depthStencilTexture ? mm._depthStencilTexture.format : void 0;
      return mm._depthStencilBuffer = this._setupFramebufferDepthAttachments(mm._generateStencilBuffer, mm._generateDepthBuffer, mm.width, mm.height, Tm, Am), this._bindUnboundFramebuffer(null), Tm
    }, am.ThinEngine.prototype._setupDepthStencilTexture = function(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const am = Tm.width ?? Tm,
        xm = Tm.height ?? Tm,
        wm = Tm.layers || 0,
        Dm = Tm.depth || 0;
      mm.baseWidth = am, mm.baseHeight = xm, mm.width = am, mm.height = xm, mm.is2DArray = wm > 0, mm.depth = wm || Dm, mm.isReady = !0, mm.samples = Am, mm.generateMipMaps = !1, mm.samplingMode = fm ? 2 : 1, mm.type = 0, mm._comparisonFunction = hm;
      const im = this._gl,
        Rm = this._getTextureTarget(mm),
        pm = this._getSamplingParameters(mm.samplingMode, !1);
      im.texParameteri(Rm, im.TEXTURE_MAG_FILTER, pm.mag), im.texParameteri(Rm, im.TEXTURE_MIN_FILTER, pm.min), im.texParameteri(Rm, im.TEXTURE_WRAP_S, im.CLAMP_TO_EDGE), im.texParameteri(Rm, im.TEXTURE_WRAP_T, im.CLAMP_TO_EDGE), this.zY > 1 && (0 === hm ? (im.texParameteri(Rm, im.TEXTURE_COMPARE_FUNC, 515), im.texParameteri(Rm, im.TEXTURE_COMPARE_MODE, im.NONE)) : (im.texParameteri(Rm, im.TEXTURE_COMPARE_FUNC, hm), im.texParameteri(Rm, im.TEXTURE_COMPARE_MODE, im.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39930: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm.b
    });
    var hm = fm(39939);
    (0, fm(40082).e)();
    var Am = fm(39956);
    let am = !1;
    ! function() {
      if (am) return;
      am = !0;
      const mm = new WeakMap,
        Tm = new WeakMap,
        fm = new WeakMap,
        hm = new WeakMap;
      Am.ThinEngine.prototype.getAlphaToCoverage = function() {
        return mm.get(this) ?? !1
      }, Am.ThinEngine.prototype.setAlphaToCoverage = function(fm) {
        (mm.get(this) !== fm || this._gl && Tm.get(this) !== this._gl) && (mm.set(this, fm), this._gl && (fm ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Tm.set(this, this._gl)))
      }, Object.defineProperty(Am.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (hm.get(this) !== this._gl && (fm.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), hm.set(this, this._gl)), fm.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var xm = fm(39942),
      wm = fm(38766),
      Dm = fm(40052);
    let im = !1;
    ! function() {
      function mm(mm, Tm, fm, hm) {
        let Am, am = 1;
        1 === hm ? Am = new Float32Array(Tm * fm * 4) : 2 === hm ? (Am = new Uint16Array(Tm * fm * 4), am = 15360) : Am = 7 === hm ? new Uint32Array(Tm * fm * 4) : new Uint8Array(Tm * fm * 4);
        for (let xm = 0; xm < Tm; xm++)
          for (let hm = 0; hm < fm; hm++) {
            const fm = 3 * (hm * Tm + xm),
              wm = 4 * (hm * Tm + xm);
            Am[wm + 0] = mm[fm + 0], Am[wm + 1] = mm[fm + 1], Am[wm + 2] = mm[fm + 2], Am[wm + 3] = am
          }
        return Am
      }

      function Tm(mm) {
        return function(Tm, fm, hm, Am, am, wm, Dm, im) {
          let Rm = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            pm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Em = mm ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            om = mm ? 10 : 11,
            Om = new xm.d(this, om);
          Om.baseWidth = fm, Om.baseHeight = hm, Om.baseDepth = Am, Om.width = fm, Om.height = hm, Om.depth = Am, Om.format = am, Om.type = pm, Om.generateMipMaps = wm, Om.samplingMode = im, mm ? Om.is3D = !0 : Om.is2DArray = !0, this._doNotHandleContextLost || (Om._bufferView = Tm), mm ? this.updateRawTexture3D(Om, Tm, am, Dm, Rm, pm) : this.updateRawTexture2DArray(Om, Tm, am, Dm, Rm, pm), this._bindTextureDirectly(Em, Om, !0);
          const Ym = this._getSamplingParameters(im, wm);
          return this._gl.texParameteri(Em, this._gl.TEXTURE_MAG_FILTER, Ym.mag), this._gl.texParameteri(Em, this._gl.TEXTURE_MIN_FILTER, Ym.min), wm && this._gl.generateMipmap(Em), this._bindTextureDirectly(Em, null), this._internalTexturesCache.push(Om), Om
        }
      }

      function fm(mm) {
        return function(Tm, fm, hm, Am) {
          let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const wm = mm ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Dm = this._getWebGLTextureType(xm),
            im = this._getInternalFormat(hm),
            Rm = this._getRGBABufferInternalSizedFormat(xm, hm);
          this._bindTextureDirectly(wm, Tm, !0), this._unpackFlipY(void 0 === Am || !!Am), this._doNotHandleContextLost || (Tm._bufferView = fm, Tm.format = hm, Tm.invertY = Am, Tm._compression = am), Tm.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), am && fm ? this._gl.compressedTexImage3D(wm, 0, this.getCaps().s3tc[am], Tm.width, Tm.height, Tm.depth, 0, fm) : this._gl.texImage3D(wm, 0, Rm, Tm.width, Tm.height, Tm.depth, 0, im, Dm, fm), Tm.generateMipMaps && this._gl.generateMipmap(wm), this._bindTextureDirectly(wm, null), Tm.isReady = !0
        }
      }
      im || (im = !0, Am.ThinEngine.prototype.updateRawTexture = function(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!mm) return;
        const wm = this._getRGBABufferInternalSizedFormat(am, fm, xm),
          Dm = this._getInternalFormat(fm),
          im = this._getWebGLTextureType(am);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, mm, !0), this._unpackFlipY(void 0 === hm || !!hm), this._doNotHandleContextLost || (mm._bufferView = Tm, mm.format = fm, mm.type = am, mm.invertY = hm, mm._compression = Am), mm.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Am && Tm ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Am], mm.width, mm.height, 0, Tm) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, wm, mm.width, mm.height, 0, Dm, im, Tm), mm.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), mm.isReady = !0
      }, Am.ThinEngine.prototype.createRawTexture = function(mm, Tm, fm, hm, Am, am, wm) {
        let Dm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          im = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Rm = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const pm = new xm.d(this, 3);
        pm.baseWidth = Tm, pm.baseHeight = fm, pm.width = Tm, pm.height = fm, pm.format = hm, pm.generateMipMaps = Am, pm.samplingMode = wm, pm.invertY = am, pm._compression = Dm, pm.type = im, pm._useSRGBBuffer = this._getUseSRGBBuffer(Rm, !Am), this._doNotHandleContextLost || (pm._bufferView = mm), this.updateRawTexture(pm, mm, hm, am, Dm, im, pm._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, pm, !0);
        const Em = this._getSamplingParameters(wm, Am);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Em.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Em.min), Am && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(pm), pm
      }, Am.ThinEngine.prototype.createRawCubeTexture = function(mm, Tm, fm, hm, Am, am, im) {
        let Rm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const pm = this._gl,
          Em = new xm.d(this, 8);
        Em.isCube = !0, Em.format = fm, Em.type = hm, this._doNotHandleContextLost || (Em._bufferViewArray = mm);
        const om = this._getWebGLTextureType(hm);
        let Om = this._getInternalFormat(fm);
        Om === pm.RGB && (Om = pm.RGBA), om !== pm.FLOAT || this._caps.textureFloatLinearFiltering ? om !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? om !== pm.FLOAT || this._caps.textureFloatRender ? om !== pm.HALF_FLOAT || this._caps.colorBufferFloat || (Am = !1, wm.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Am = !1, wm.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Am = !1, im = 1, wm.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Am = !1, im = 1, wm.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Ym = Tm,
          qm = Ym;
        Em.width = Ym, Em.height = qm, Em.invertY = am, Em._compression = Rm;
        if (!this.needPOTTextures || (0, Dm.i)(Em.width) && (0, Dm.i)(Em.height) || (Am = !1), mm) this.updateRawCubeTexture(Em, mm, fm, hm, am, Rm);
        else {
          const mm = this._getRGBABufferInternalSizedFormat(hm),
            Tm = 0;
          this._bindTextureDirectly(pm.TEXTURE_CUBE_MAP, Em, !0);
          for (let fm = 0; fm < 6; fm++) Rm ? pm.compressedTexImage2D(pm.TEXTURE_CUBE_MAP_POSITIVE_X + fm, Tm, this.getCaps().s3tc[Rm], Em.width, Em.height, 0, void 0) : pm.texImage2D(pm.TEXTURE_CUBE_MAP_POSITIVE_X + fm, Tm, mm, Em.width, Em.height, 0, Om, om, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Em, !0), mm && Am && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const jm = this._getSamplingParameters(im, Am);
        return pm.texParameteri(pm.TEXTURE_CUBE_MAP, pm.TEXTURE_MAG_FILTER, jm.mag), pm.texParameteri(pm.TEXTURE_CUBE_MAP, pm.TEXTURE_MIN_FILTER, jm.min), pm.texParameteri(pm.TEXTURE_CUBE_MAP, pm.TEXTURE_WRAP_S, pm.CLAMP_TO_EDGE), pm.texParameteri(pm.TEXTURE_CUBE_MAP, pm.TEXTURE_WRAP_T, pm.CLAMP_TO_EDGE), this._bindTextureDirectly(pm.TEXTURE_CUBE_MAP, null), Em.generateMipMaps = Am, Em.samplingMode = im, Em.isReady = !0, Em
      }, Am.ThinEngine.prototype.updateRawCubeTexture = function(Tm, fm, hm, Am, am) {
        let xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Tm._bufferViewArray = fm, Tm.format = hm, Tm.type = Am, Tm.invertY = am, Tm._compression = xm;
        const im = this._gl,
          Rm = this._getWebGLTextureType(Am);
        let pm = this._getInternalFormat(hm);
        const Em = this._getRGBABufferInternalSizedFormat(Am);
        let om = !1;
        pm === im.RGB && (pm = im.RGBA, om = !0), this._bindTextureDirectly(im.TEXTURE_CUBE_MAP, Tm, !0), this._unpackFlipY(void 0 === am || !!am), Tm.width % 4 !== 0 && im.pixelStorei(im.UNPACK_ALIGNMENT, 1);
        for (let Dm = 0; Dm < 6; Dm++) {
          let hm = fm[Dm];
          xm ? im.compressedTexImage2D(im.TEXTURE_CUBE_MAP_POSITIVE_X + Dm, wm, this.getCaps().s3tc[xm], Tm.width, Tm.height, 0, hm) : (om && (hm = mm(hm, Tm.width, Tm.height, Am)), im.texImage2D(im.TEXTURE_CUBE_MAP_POSITIVE_X + Dm, wm, Em, Tm.width, Tm.height, 0, pm, Rm, hm))
        }(!this.needPOTTextures || (0, Dm.i)(Tm.width) && (0, Dm.i)(Tm.height)) && Tm.generateMipMaps && 0 === wm && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Tm.isReady = !0
      }, Am.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Tm, fm, hm, Am, am, xm, wm, Dm) {
        let im = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Rm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          pm = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Em = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const om = this._gl,
          Om = this.createRawCubeTexture(null, hm, Am, am, !xm, Em, pm, null);
        fm?.addPendingData(Om), Om.url = Tm, Om.isReady = !1, this._internalTexturesCache.push(Om);
        const Ym = (mm, Tm) => {
            fm?.removePendingData(Om), Rm && Rm(mm ? mm.status + " " + mm.statusText : "Failed to parse texture data", Tm)
          },
          qm = async Tm => {
            if (!Om._hardwareTexture) return;
            const hm = wm(Tm);
            if (!hm) return;
            const xm = hm instanceof Promise ? await hm : hm,
              Rm = Om.width;
            if (Dm) {
              const Tm = this._getWebGLTextureType(am);
              let fm = this._getInternalFormat(Am);
              const hm = this._getRGBABufferInternalSizedFormat(am);
              let wm = !1;
              fm === om.RGB && (fm = om.RGBA, wm = !0), this._bindTextureDirectly(om.TEXTURE_CUBE_MAP, Om, !0), this._unpackFlipY(!1);
              const im = Dm(xm);
              for (let Am = 0; Am < im.length; Am++) {
                const xm = Rm >> Am;
                for (let Dm = 0; Dm < 6; Dm++) {
                  let Rm = im[Am][Dm];
                  wm && (Rm = mm(Rm, xm, xm, am)), om.texImage2D(Dm, Am, hm, xm, xm, 0, fm, Tm, Rm)
                }
              }
              this._bindTextureDirectly(om.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(Om, xm, Am, am, Em);
            Om.isReady = !0, fm?.removePendingData(Om), Om.onLoadedObservable.notifyObservers(Om), Om.onLoadedObservable.clear(), im && im()
          };
        return this._loadFile(Tm, (mm => {
          qm(mm).catch((mm => {
            Ym(void 0, mm)
          }))
        }), void 0, fm?.offlineProvider, !0, Ym), Om
      }, Am.ThinEngine.prototype.createRawTexture2DArray = Tm(!1), Am.ThinEngine.prototype.createRawTexture3D = Tm(!0), Am.ThinEngine.prototype.updateRawTexture2DArray = fm(!1), Am.ThinEngine.prototype.updateRawTexture3D = fm(!0))
    }();
    var Rm = fm(39986);
    let pm = !1;
    pm || (pm = !0, Am.ThinEngine.prototype._readTexturePixelsSync = function(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        wm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Dm = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        im = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const pm = this._gl;
      if (!pm) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const mm = pm.createFramebuffer();
        if (!mm) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = mm
      }
      pm.bindFramebuffer(pm.FRAMEBUFFER, this._dummyFramebuffer), hm > -1 && (mm.is2DArray || mm.is3D) ? pm.framebufferTextureLayer(pm.FRAMEBUFFER, pm.COLOR_ATTACHMENT0, mm._hardwareTexture?.underlyingResource, Am, hm) : hm > -1 ? pm.framebufferTexture2D(pm.FRAMEBUFFER, pm.COLOR_ATTACHMENT0, pm.TEXTURE_CUBE_MAP_POSITIVE_X + hm, mm._hardwareTexture?.underlyingResource, Am) : pm.framebufferTexture2D(pm.FRAMEBUFFER, pm.COLOR_ATTACHMENT0, pm.TEXTURE_2D, mm._hardwareTexture?.underlyingResource, Am);
      let Em = void 0 !== mm.type ? this._getWebGLTextureType(mm.type) : pm.UNSIGNED_BYTE;
      return wm ? am || (am = (0, Rm.l)(mm.type, 4 * Tm * fm)) : Em === pm.UNSIGNED_BYTE ? (am || (am = new Uint8Array(4 * Tm * fm)), Em = pm.UNSIGNED_BYTE) : (am || (am = new Float32Array(4 * Tm * fm)), Em = pm.FLOAT), xm && this.flushFramebuffer(), pm.readPixels(Dm, im, Tm, fm, pm.RGBA, Em, am), pm.bindFramebuffer(pm.FRAMEBUFFER, this._currentFramebuffer), am
    }, Am.ThinEngine.prototype._readTexturePixels = function(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        wm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Dm = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        im = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im))
    }), (0, fm(40091).b)();
    let Em = !1;
    Em || (Em = !0, Am.ThinEngine.prototype._createDepthStencilCubeTexture = function(mm, Tm) {
      const fm = new xm.d(this, 12);
      if (fm.isCube = !0, 1 === this.zY) return wm.b.Error("Depth cube texture is not supported by WebGL 1."), fm;
      const hm = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Tm
        },
        Am = this._gl;
      this._bindTextureDirectly(Am.TEXTURE_CUBE_MAP, fm, !0), this._setupDepthStencilTexture(fm, mm, hm.bilinearFiltering, hm.comparisonFunction);
      for (let am = 0; am < 6; am++) hm.generateStencil ? Am.texImage2D(Am.TEXTURE_CUBE_MAP_POSITIVE_X + am, 0, Am.DEPTH24_STENCIL8, mm, mm, 0, Am.DEPTH_STENCIL, Am.UNSIGNED_INT_24_8, null) : Am.texImage2D(Am.TEXTURE_CUBE_MAP_POSITIVE_X + am, 0, Am.DEPTH_COMPONENT24, mm, mm, 0, Am.DEPTH_COMPONENT, Am.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Am.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(fm), fm
    }, Am.ThinEngine.prototype._setCubeMapTextureParams = function(mm, Tm, fm) {
      const hm = this._gl;
      hm.texParameteri(hm.TEXTURE_CUBE_MAP, hm.TEXTURE_MAG_FILTER, hm.LINEAR), hm.texParameteri(hm.TEXTURE_CUBE_MAP, hm.TEXTURE_MIN_FILTER, Tm ? hm.LINEAR_MIPMAP_LINEAR : hm.LINEAR), hm.texParameteri(hm.TEXTURE_CUBE_MAP, hm.TEXTURE_WRAP_S, hm.CLAMP_TO_EDGE), hm.texParameteri(hm.TEXTURE_CUBE_MAP, hm.TEXTURE_WRAP_T, hm.CLAMP_TO_EDGE), mm.samplingMode = Tm ? 3 : 2, Tm && this.getCaps().textureMaxLevel && void 0 !== fm && fm > 0 && (hm.texParameteri(hm.TEXTURE_CUBE_MAP, hm.TEXTURE_MAX_LEVEL, fm), mm._maxLodLevel = fm), this._bindTextureDirectly(hm.TEXTURE_CUBE_MAP, null)
    }, Am.ThinEngine.prototype.createCubeTexture = function(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xm = arguments.length > 6 ? arguments[6] : void 0,
        im = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Rm = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        pm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Em = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        om = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        Om = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Ym = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const qm = this._gl;
      return this.createCubeTextureBase(mm, Tm, fm, !!hm, Am, am, xm, im, Rm, pm, Em, om, (mm => this._bindTextureDirectly(qm.TEXTURE_CUBE_MAP, mm, !0)), ((mm, Tm) => {
        const fm = this.needPOTTextures ? (0, Dm.f)(Tm[0].width, this._caps.maxCubemapTextureSize) : Tm[0].width,
          am = fm,
          im = [qm.TEXTURE_CUBE_MAP_POSITIVE_X, qm.TEXTURE_CUBE_MAP_POSITIVE_Y, qm.TEXTURE_CUBE_MAP_POSITIVE_Z, qm.TEXTURE_CUBE_MAP_NEGATIVE_X, qm.TEXTURE_CUBE_MAP_NEGATIVE_Y, qm.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(qm.TEXTURE_CUBE_MAP, mm, !0), this._unpackFlipY(!1);
        const Rm = xm ? this._getInternalFormat(xm, mm._useSRGBBuffer) : mm._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : qm.RGBA;
        let pm = xm ? this._getInternalFormat(xm) : qm.RGBA;
        mm._useSRGBBuffer && 1 === this.zY && (pm = Rm);
        for (let hm = 0; hm < im.length; hm++)
          if (Tm[hm].width !== fm || Tm[hm].height !== am) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void wm.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = fm, this._workingCanvas.height = am, this._workingContext.drawImage(Tm[hm], 0, 0, Tm[hm].width, Tm[hm].height, 0, 0, fm, am), qm.texImage2D(im[hm], 0, Rm, pm, qm.UNSIGNED_BYTE, this._workingCanvas)
          } else qm.texImage2D(im[hm], 0, Rm, pm, qm.UNSIGNED_BYTE, Tm[hm]);
        hm || qm.generateMipmap(qm.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(mm, !hm), mm.width = fm, mm.height = am, mm.isReady = !0, xm && (mm.format = xm), mm.onLoadedObservable.notifyObservers(mm), mm.onLoadedObservable.clear(), Am && Am()
      }), !!Om, Ym)
    }, Am.ThinEngine.prototype.generateMipMapsForCubemap = function(mm) {
      let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (mm.generateMipMaps) {
        const fm = this._gl;
        this._bindTextureDirectly(fm.TEXTURE_CUBE_MAP, mm, !0), fm.generateMipmap(fm.TEXTURE_CUBE_MAP), Tm && this._bindTextureDirectly(fm.TEXTURE_CUBE_MAP, null)
      }
    });
    fm(40096);
    let om = !1;
    om || (om = !0, Am.ThinEngine.prototype.setDepthStencilTexture = function(mm, Tm, fm, hm) {
      void 0 !== mm && (Tm && (this._boundUniforms[mm] = Tm), fm && fm.depthStencilTexture ? this._setTexture(mm, fm, !1, !0, hm) : this._setTexture(mm, null, void 0, void 0, hm))
    });
    let Om = !1;
    Om || (Om = !0, Am.ThinEngine.prototype.createRenderTargetCubeTexture = function(mm, Tm) {
      const fm = this._createHardwareRenderTargetWrapper(!1, !0, mm),
        hm = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Tm
        };
      hm.generateStencilBuffer = hm.generateDepthBuffer && hm.generateStencilBuffer, (1 !== hm.type || this._caps.textureFloatLinearFiltering) && (2 !== hm.type || this._caps.textureHalfFloatLinearFiltering) || (hm.samplingMode = 1);
      const Am = this._gl,
        am = new xm.d(this, 5);
      this._bindTextureDirectly(Am.TEXTURE_CUBE_MAP, am, !0);
      const Dm = this._getSamplingParameters(hm.samplingMode, hm.generateMipMaps);
      1 !== hm.type || this._caps.textureFloat || (hm.type = 0, wm.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Am.texParameteri(Am.TEXTURE_CUBE_MAP, Am.TEXTURE_MAG_FILTER, Dm.mag), Am.texParameteri(Am.TEXTURE_CUBE_MAP, Am.TEXTURE_MIN_FILTER, Dm.min), Am.texParameteri(Am.TEXTURE_CUBE_MAP, Am.TEXTURE_WRAP_S, Am.CLAMP_TO_EDGE), Am.texParameteri(Am.TEXTURE_CUBE_MAP, Am.TEXTURE_WRAP_T, Am.CLAMP_TO_EDGE);
      for (let xm = 0; xm < 6; xm++) Am.texImage2D(Am.TEXTURE_CUBE_MAP_POSITIVE_X + xm, 0, this._getRGBABufferInternalSizedFormat(hm.type, hm.format), mm, mm, 0, this._getInternalFormat(hm.format), this._getWebGLTextureType(hm.type), null);
      const im = Am.createFramebuffer();
      return this._bindUnboundFramebuffer(im), fm._depthStencilBuffer = this._setupFramebufferDepthAttachments(hm.generateStencilBuffer, hm.generateDepthBuffer, mm, mm), hm.generateMipMaps && Am.generateMipmap(Am.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Am.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), fm._framebuffer = im, fm._generateDepthBuffer = hm.generateDepthBuffer, fm._generateStencilBuffer = hm.generateStencilBuffer, am.width = mm, am.height = mm, am.isReady = !0, am.isCube = !0, am.samples = 1, am.generateMipMaps = hm.generateMipMaps, am.samplingMode = hm.samplingMode, am.type = hm.type, am.format = hm.format, this._internalTexturesCache.push(am), fm.setTextures(am), fm
    });
    var Ym = fm(40108),
      qm = fm(40111);
    let jm = !1;
    jm || (jm = !0, Am.ThinEngine.prototype.createPrefilteredCubeTexture = function(mm, Tm, hm, Am) {
      let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Dm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        im = arguments.length > 6 ? arguments[6] : void 0,
        Rm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        pm = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Em = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(mm, Tm, null, !1, (async mm => {
        if (!mm) return void(am && am(null));
        const Dm = mm.texture;
        if (pm ? mm.info.sphericalPolynomial && (Dm._sphericalPolynomial = mm.info.sphericalPolynomial) : Dm._sphericalPolynomial = Dm._sphericalPolynomial ?? new Ym.e, Dm._source = 9, this.getCaps().textureLOD) return void(am && am(Dm));
        const im = this._gl,
          Rm = mm.width;
        if (!Rm) return;
        const {
          DDSTools: Em
        } = await fm.e(306).then((() => fm(41784))), om = [];
        for (let fm = 0; fm < 3; fm++) {
          const am = 1 - fm / 2,
            pm = Am,
            Om = Math.log2(Rm) * hm + Am,
            Ym = pm + (Om - pm) * am,
            jm = Math.round(Math.min(Math.max(Ym, 0), Om)),
            Vm = new xm.d(this, 2);
          if (Vm.type = Dm.type, Vm.format = Dm.format, Vm.width = Math.pow(2, Math.max(Math.log2(Rm) - jm, 0)), Vm.height = Vm.width, Vm.isCube = !0, Vm._cachedWrapU = 0, Vm._cachedWrapV = 0, this._bindTextureDirectly(im.TEXTURE_CUBE_MAP, Vm, !0), Vm.samplingMode = 2, im.texParameteri(im.TEXTURE_CUBE_MAP, im.TEXTURE_MAG_FILTER, im.LINEAR), im.texParameteri(im.TEXTURE_CUBE_MAP, im.TEXTURE_MIN_FILTER, im.LINEAR), im.texParameteri(im.TEXTURE_CUBE_MAP, im.TEXTURE_WRAP_S, im.CLAMP_TO_EDGE), im.texParameteri(im.TEXTURE_CUBE_MAP, im.TEXTURE_WRAP_T, im.CLAMP_TO_EDGE), mm.isDDS) {
            const Tm = mm.info,
              fm = mm.data;
            this._unpackFlipY(Tm.isCompressed), Em.UploadDDSLevels(this, Vm, fm, Tm, !0, 6, jm)
          } else wm.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(im.TEXTURE_CUBE_MAP, null);
          const Im = new qm.b(Tm);
          Im._isCube = !0, Im._texture = Vm, Vm.isReady = !0, om.push(Im)
        }
        Dm._lodTextureHigh = om[2], Dm._lodTextureMid = om[1], Dm._lodTextureLow = om[0], am && am(Dm)
      }), Dm, im, Rm, pm, hm, Am, null, void 0, !1, Em)
    });
    var Vm = fm(40036);
    let Im = !1;
    Im || (Im = !0, Am.ThinEngine.prototype.createUniformBuffer = function(mm, Tm) {
      const fm = this._gl.createBuffer();
      if (!fm) throw new Error("Unable to create uniform buffer");
      const hm = new Vm.e(fm);
      return this.bindUniformBuffer(hm), mm instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, mm, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(mm), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), hm.references = 1, hm
    }, Am.ThinEngine.prototype.createDynamicUniformBuffer = function(mm, Tm) {
      const fm = this._gl.createBuffer();
      if (!fm) throw new Error("Unable to create dynamic uniform buffer");
      const hm = new Vm.e(fm);
      return this.bindUniformBuffer(hm), mm instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, mm, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(mm), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), hm.references = 1, hm
    }, Am.ThinEngine.prototype.updateUniformBuffer = function(mm, Tm, fm, hm) {
      this.bindUniformBuffer(mm), void 0 === fm && (fm = 0), void 0 === hm ? Tm instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, fm, Tm) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, fm, new Float32Array(Tm)) : Tm instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Tm.subarray(fm, fm + hm)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Tm).subarray(fm, fm + hm)), this.bindUniformBuffer(null)
    }, Am.ThinEngine.prototype.bindUniformBuffer = function(mm) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, mm ? mm.underlyingResource : null)
    }, Am.ThinEngine.prototype.bindUniformBufferBase = function(mm, Tm, fm) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Tm, mm ? mm.underlyingResource : null)
    }, Am.ThinEngine.prototype.bindUniformBlock = function(mm, Tm, fm) {
      const hm = mm.program,
        Am = this._gl.getUniformBlockIndex(hm, Tm);
      4294967295 !== Am && this._gl.uniformBlockBinding(hm, Am, fm)
    });
    var Km = fm(39973),
      Qm = fm(40014);
    let nm = !1;
    nm || (nm = !0, Qm.b.prototype.displayLoadingUI = function() {
      if (!(0, Km.p)()) return;
      const mm = this.loadingScreen;
      mm && mm.displayLoadingUI()
    }, Qm.b.prototype.hideLoadingUI = function() {
      if (!(0, Km.p)()) return;
      const mm = this._loadingScreen;
      mm && mm.hideLoadingUI()
    }, Object.defineProperty(Qm.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Qm.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(mm) {
        this._loadingScreen = mm
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Qm.b.prototype, "loadingUIText", {
      set: function(mm) {
        this.loadingScreen.loadingUIText = mm
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Qm.b.prototype, "loadingUIBackgroundColor", {
      set: function(mm) {
        this.loadingScreen.loadingUIBackgroundColor = mm
      },
      enumerable: !0,
      configurable: !0
    })), (0, fm(40075).b)();
    let Jm = !1;
    Jm || (Jm = !0, Qm.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Qm.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Qm.b.prototype.setDepthFunction = function(mm) {
      this._depthCullingState.depthFunc = mm
    }, Qm.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Qm.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Qm.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Qm.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Qm.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Qm.b.prototype.setDepthWrite = function(mm) {
      this._depthCullingState.depthMask = mm
    }, Qm.b.prototype.setAlphaConstants = function(mm, Tm, fm, hm) {
      this._alphaState.setAlphaBlendConstants(mm, Tm, fm, hm)
    }, Qm.b.prototype.getAlphaMode = function() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[mm]
    }, Qm.b.prototype.getAlphaEquation = function() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[mm]
    });
    let cm = !1;
    cm || (cm = !0, Qm.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Qm.b.prototype.setStencilBuffer = function(mm) {
      this._stencilState.stencilTest = mm
    }, Qm.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Qm.b.prototype.setStencilMask = function(mm) {
      this._stencilState.stencilMask = mm
    }, Qm.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Qm.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Qm.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Qm.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Qm.b.prototype.setStencilFunction = function(mm) {
      this._stencilState.stencilFunc = mm
    }, Qm.b.prototype.setStencilBackFunction = function(mm) {
      this._stencilState.stencilBackFunc = mm
    }, Qm.b.prototype.setStencilFunctionReference = function(mm) {
      this._stencilState.stencilFuncRef = mm
    }, Qm.b.prototype.setStencilFunctionMask = function(mm) {
      this._stencilState.stencilFuncMask = mm
    }, Qm.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Qm.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Qm.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Qm.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Qm.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Qm.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Qm.b.prototype.setStencilOperationFail = function(mm) {
      this._stencilState.stencilOpStencilFail = mm
    }, Qm.b.prototype.setStencilBackOperationFail = function(mm) {
      this._stencilState.stencilBackOpStencilFail = mm
    }, Qm.b.prototype.setStencilOperationDepthFail = function(mm) {
      this._stencilState.stencilOpDepthFail = mm
    }, Qm.b.prototype.setStencilBackOperationDepthFail = function(mm) {
      this._stencilState.stencilBackOpDepthFail = mm
    }, Qm.b.prototype.setStencilOperationPass = function(mm) {
      this._stencilState.stencilOpStencilDepthPass = mm
    }, Qm.b.prototype.setStencilBackOperationPass = function(mm) {
      this._stencilState.stencilBackOpStencilDepthPass = mm
    }, Qm.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Qm.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    fm(40145);
    let zm = !1;
    zm || (zm = !0, Qm.b.prototype.createDepthStencilTexture = function(mm, Tm, fm) {
      if (Tm.isCube) {
        const fm = mm.width || mm;
        return this._createDepthStencilCubeTexture(fm, Tm)
      }
      return this._createDepthStencilTexture(mm, Tm, fm)
    });
    fm(40147), fm(40188);
    let Zm = !1;
    Zm || (Zm = !0, Am.ThinEngine.prototype.enableScissor = function(mm, Tm, fm, hm) {
      const Am = this._gl;
      Am.enable(Am.SCISSOR_TEST), Am.scissor(mm, Tm, fm, hm)
    }, Am.ThinEngine.prototype.disableScissor = function() {
      const mm = this._gl;
      mm.disable(mm.SCISSOR_TEST)
    })
  },
  39939: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Qm
    });
    var hm = fm(39942),
      Am = fm(37201),
      am = fm(39956),
      xm = fm(40020);
    class wm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Dm(mm)
      }
      sampleFrame() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const Tm = mm - this._lastFrameTimeMs;
            this._rollingFrameTime.add(Tm)
          }
          this._lastFrameTimeMs = mm
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
        const mm = this._rollingFrameTime.history(0);
        return 0 === mm ? 0 : 1e3 / mm
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
    class Dm {
      constructor(mm) {
        this._samples = new Array(mm), this.reset()
      }
      add(mm) {
        let Tm;
        if (this.isSaturated()) {
          const mm = this._samples[this._pos];
          Tm = mm - this.average, this.average -= Tm / (this._sampleCount - 1), this._m2 -= Tm * (mm - this.average)
        } else this._sampleCount++;
        Tm = mm - this.average, this.average += Tm / this._sampleCount, this._m2 += Tm * (mm - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = mm, this._pos++, this._pos %= this._samples.length
      }
      history(mm) {
        if (mm >= this._sampleCount || mm >= this._samples.length) return 0;
        const Tm = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(Tm - mm)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(mm) {
        const Tm = this._samples.length;
        return (mm % Tm + Tm) % Tm
      }
    }
    var im = fm(40036),
      Rm = fm(38766),
      pm = fm(40055),
      Em = fm(40014),
      om = fm(39973);

    function Om(mm) {
      const Tm = function(mm) {
        if (!(0, om.h)() || !document.body) return null;
        const Tm = document.createElement("span");
        Tm.textContent = "Hg", Tm.style.font = mm;
        const fm = document.createElement("div");
        fm.style.display = "inline-block", fm.style.width = "1px", fm.style.height = "0px", fm.style.verticalAlign = "bottom";
        const hm = document.createElement("div");
        let Am, am;
        hm.style.whiteSpace = "nowrap", hm.appendChild(Tm), hm.appendChild(fm), document.body.appendChild(hm);
        try {
          am = fm.getBoundingClientRect().top - Tm.getBoundingClientRect().top, fm.style.verticalAlign = "baseline", Am = fm.getBoundingClientRect().top - Tm.getBoundingClientRect().top
        } finally {
          document.body.removeChild(hm)
        }
        const xm = {
          ascent: Am,
          height: am,
          descent: am - Am
        };
        return Ym(xm) ? xm : null
      }(mm);
      if (Tm) return Tm;
      const fm = function(mm) {
        let Tm = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Tm = new OffscreenCanvas(64, 64) : (0, om.h)() && "function" === typeof document.createElement && (Tm = document.createElement("canvas"), Tm.width = 64, Tm.height = 64);
          const fm = Tm?.getContext("2d");
          if (!fm) return null;
          fm.font = mm;
          const hm = fm.measureText("Hg"),
            Am = Number(hm.actualBoundingBoxAscent ?? hm.fontBoundingBoxAscent),
            am = Number(hm.actualBoundingBoxDescent ?? hm.fontBoundingBoxDescent),
            xm = {
              ascent: Am,
              height: Am + am,
              descent: am
            };
          return Ym(xm) ? xm : null
        } catch {
          return null
        } finally {
          const mm = Tm;
          "function" === typeof mm?.dispose && mm.dispose()
        }
      }(mm);
      return fm || function(mm) {
        const Tm = Math.max(1, function(mm) {
            const Tm = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(mm || ""));
            return Tm ? Number(Tm[1]) : 16
          }(mm)),
          fm = .8 * Tm,
          hm = .2 * Tm;
        return {
          ascent: fm,
          height: fm + hm,
          descent: hm
        }
      }(mm)
    }

    function Ym(mm) {
      return Number.isFinite(mm.ascent) && Number.isFinite(mm.height) && Number.isFinite(mm.descent) && mm.height > 0
    }

    function qm(mm) {
      if (mm.requestPointerLock) {
        const Tm = mm.requestPointerLock();
        Tm instanceof Promise ? Tm.then((() => {
          mm.focus()
        })).catch((() => {})) : mm.focus()
      }
    }
    var jm = fm(40068),
      Vm = fm(40008),
      Im = fm(40075),
      Km = fm(40078);
    class Qm extends am.ThinEngine {
      static get NpmPackage() {
        return Em.b.NpmPackage
      }
      static get Version() {
        return Em.b.Version
      }
      static get Instances() {
        return Am.c.Instances
      }
      static get LastCreatedEngine() {
        return Am.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Am.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(mm) {
        return Em.b.DefaultLoadingScreenFactory(mm)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Qm._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Im.b)(), (0, Km.c)(), super(mm, Tm, fm, hm), this._performanceMonitor = new wm, this._drawCalls = new jm.d, mm && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(mm) {
        super._sharedInit(mm),
          function(mm, Tm, fm) {
            mm._onCanvasFocus = () => {
              mm.onCanvasFocusObservable.notifyObservers(mm)
            }, mm._onCanvasBlur = () => {
              mm.onCanvasBlurObservable.notifyObservers(mm)
            }, mm._onCanvasContextMenu = Tm => {
              mm.disableContextMenu && Tm.preventDefault()
            }, Tm.addEventListener("focus", mm._onCanvasFocus), Tm.addEventListener("blur", mm._onCanvasBlur), Tm.addEventListener("contextmenu", mm._onCanvasContextMenu), mm._onBlur = () => {
              mm.disablePerformanceMonitorInBackground && mm.performanceMonitor.disable(), mm._windowIsBackground = !0
            }, mm._onFocus = () => {
              mm.disablePerformanceMonitorInBackground && mm.performanceMonitor.enable(), mm._windowIsBackground = !1
            }, mm._onCanvasPointerOut = fm => {
              document.elementFromPoint(fm.clientX, fm.clientY) !== Tm && mm.onCanvasPointerOutObservable.notifyObservers(fm)
            };
            const hm = mm.getHostWindow();
            hm && "function" === typeof hm.addEventListener && (hm.addEventListener("blur", mm._onBlur), hm.addEventListener("focus", mm._onFocus)), Tm.addEventListener("pointerout", mm._onCanvasPointerOut), fm.doNotHandleTouchAction || function(mm) {
              mm && mm.setAttribute && (mm.setAttribute("touch-action", "none"), mm.style.touchAction = "none", mm.style.webkitTapHighlightColor = "transparent")
            }(Tm), !Em.b.audioEngine && fm.audioEngine && Em.b.AudioEngineFactory && (Em.b.audioEngine = Em.b.AudioEngineFactory(mm.getRenderingCanvas(), mm.getAudioContext(), mm.getAudioDestination())), (0, om.h)() && (mm._onFullscreenChange = () => {
              mm.isFullscreen = !!document.fullscreenElement, mm.isFullscreen && mm._pointerLockRequested && Tm && qm(Tm)
            }, document.addEventListener("fullscreenchange", mm._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", mm._onFullscreenChange, !1), mm._onPointerLockChange = () => {
              mm.isPointerLock = document.pointerLockElement === Tm
            }, document.addEventListener("pointerlockchange", mm._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", mm._onPointerLockChange, !1)), mm.enableOfflineSupport = void 0 !== Em.b.OfflineProviderFactory, mm._deterministicLockstep = !!fm.deterministicLockstep, mm._lockstepMaxSteps = fm.lockstepMaxSteps || 0, mm._timeStep = fm.timeStep || 1 / 60
          }(this, mm, this._creationOptions)
      }
      resizeImageBitmap(mm, Tm, fm) {
        return function(mm, Tm, fm, hm) {
          const Am = mm.createCanvas(fm, hm).getContext("2d");
          if (!Am) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Am.drawImage(Tm, 0, 0), Am.getImageData(0, 0, fm, hm).data
        }(this, mm, Tm, fm)
      }
      async _createImageBitmapFromSource(mm, Tm) {
        return await async function(mm, Tm, fm) {
          return await new Promise(((hm, Am) => {
            const am = new Image;
            am.onload = () => {
              am.decode().then((() => {
                mm.createImageBitmap(am, fm).then((mm => {
                  hm(mm)
                }))
              }))
            }, am.onerror = () => {
              Am(`Error loading image ${am.src}`)
            }, am.src = Tm
          }))
        }(this, mm, Tm)
      }
      switchFullscreen(mm) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(mm)
      }
      enterFullscreen(mm) {
        this.isFullscreen || (this._pointerLockRequested = mm, this._renderingCanvas && function(mm) {
          const Tm = mm.requestFullscreen || mm.webkitRequestFullscreen;
          Tm && Tm.call(mm)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const mm = document;
          document.exitFullscreen ? document.exitFullscreen() : mm.webkitCancelFullScreen && mm.webkitCancelFullScreen()
        }()
      }
      setDitheringState(mm) {
        mm ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(mm) {
        mm ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(mm, Tm, fm, hm) {
        const Am = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(mm, Tm, fm, hm), Am
      }
      scissorClear(mm, Tm, fm, hm, Am) {
        this.enableScissor(mm, Tm, fm, hm), this.clear(Am, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(mm) {
        const Tm = this._gl.getAttachedShaders(mm);
        return Tm ? this._gl.getShaderSource(Tm[0]) : null
      }
      getFragmentShaderSource(mm) {
        const Tm = this._gl.getAttachedShaders(mm);
        return Tm ? this._gl.getShaderSource(Tm[1]) : null
      }
      set framebufferDimensionsObject(mm) {
        this._framebufferDimensionsObject = mm, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const mm of this.scenes) mm.resetCachedMaterial(), mm._rebuildGeometries();
        for (const mm of this._virtualScenes) mm.resetCachedMaterial(), mm._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(mm) {
        return Om(mm)
      }
      enterPointerlock() {
        this._renderingCanvas && qm(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      bI() {
        this._measureFps(), super.bI()
      }
      _deletePipelineContext(mm) {
        const Tm = mm;
        Tm && Tm.program && Tm.transformFeedback && (this.deleteTransformFeedback(Tm.transformFeedback), Tm.transformFeedback = null), super._deletePipelineContext(mm)
      }
      createShaderProgram(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Am = Am || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const xm = super.createShaderProgram(mm, Tm, fm, hm, Am, am);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), xm
      }
      _createShaderProgram(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const am = hm.createProgram();
        if (mm.program = am, !am) throw new Error("Unable to create program");
        if (hm.attachShader(am, Tm), hm.attachShader(am, fm), this.zY > 1 && Am) {
          const Tm = this.createTransformFeedback();
          this.bindTransformFeedback(Tm), this.setTranformFeedbackVaryings(am, Am), mm.transformFeedback = Tm
        }
        return hm.linkProgram(am), this.zY > 1 && Am && this.bindTransformFeedback(null), mm.context = hm, mm.vertexShader = Tm, mm.fragmentShader = fm, mm.isParallelCompiled || this._finalizePipelineContext(mm), am
      }
      _releaseTexture(mm) {
        super._releaseTexture(mm)
      }
      _releaseRenderTargetWrapper(mm) {
        super._releaseRenderTargetWrapper(mm);
        for (const Tm of this.scenes) {
          for (const fm of Tm.postProcesses) fm._outputTexture === mm && (fm._outputTexture = null);
          for (const fm of Tm.cameras)
            for (const Tm of fm._postProcesses) Tm && Tm._outputTexture === mm && (Tm._outputTexture = null)
        }
      }
      _rescaleTexture(mm, Tm, fm, hm, Am) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const am = this.createRenderTargetTexture({
          width: Tm.width,
          height: Tm.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Qm._RescalePostProcessFactory && (this._rescalePostProcess = Qm._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const xm = () => {
              this._rescalePostProcess.onApply = function(Tm) {
                Tm._bindTexture("textureSampler", mm)
              };
              let xm = fm;
              xm || (xm = this.scenes[this.scenes.length - 1]), xm.postProcessManager.directRender([this._rescalePostProcess], am, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Tm, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, hm, 0, 0, Tm.width, Tm.height, 0), this.unBindFramebuffer(am), am.dispose(), Am && Am()
            },
            wm = this._rescalePostProcess.getEffect();
          wm ? wm.executeWhenCompiled(xm) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((mm => {
            mm.executeWhenCompiled(xm)
          }))
        }
      }
      wrapWebGLTexture(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const xm = new pm.e(mm, this._gl),
          wm = new hm.d(this, 15, !0);
        return wm._hardwareTexture = xm, wm.baseWidth = Am, wm.baseHeight = am, wm.width = Am, wm.height = am, wm.isReady = !0, wm.useMipMaps = Tm, this.updateTextureSamplingMode(fm, wm), wm
      }
      updateWrappedWebGLTexture(mm, Tm) {
        if (15 !== mm.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const hm of this._renderTargetWrapperCache)
          if (hm.textures?.includes(mm)) {
            if (hm.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (hm._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } mm._hardwareTexture = new pm.e(Tm, this._gl), mm.isReady = !0, mm._cachedCoordinatesMode = null, mm._cachedWrapU = null, mm._cachedWrapV = null, mm._cachedWrapR = null, mm._cachedAnisotropicFilteringLevel = null;
        for (const hm in this._boundTexturesCache) this._boundTexturesCache[hm] === mm && (this._boundTexturesCache[hm] = null);
        this.updateTextureSamplingMode(mm.samplingMode, mm);
        const fm = this._gl;
        for (const hm of this._renderTargetWrapperCache) {
          if (hm.texture !== mm) continue;
          const Am = hm,
            am = hm.samples,
            xm = am > 1;
          Am._framebuffer && fm.deleteFramebuffer(Am._framebuffer), !xm && Am._depthStencilBuffer && (fm.deleteRenderbuffer(Am._depthStencilBuffer), Am._depthStencilBuffer = null);
          const wm = this._currentFramebuffer,
            Dm = fm.createFramebuffer();
          this._bindUnboundFramebuffer(Dm), fm.framebufferTexture2D(fm.FRAMEBUFFER, fm.COLOR_ATTACHMENT0, fm.TEXTURE_2D, Tm, 0), xm || (Am._depthStencilBuffer = this._setupFramebufferDepthAttachments(hm._generateStencilBuffer, hm._generateDepthBuffer, hm.width, hm.height)), this._bindUnboundFramebuffer(wm), Am._framebuffer = Dm, xm && (hm._samples = 1, this.updateRenderTargetTextureSampleCount(Am, am))
        }
      }
      _uploadImageToTexture(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Am = this._gl,
          am = this._getWebGLTextureType(mm.type),
          xm = this._getInternalFormat(mm.format),
          wm = this._getRGBABufferInternalSizedFormat(mm.type, xm),
          Dm = mm.isCube ? Am.TEXTURE_CUBE_MAP : Am.TEXTURE_2D;
        this._bindTextureDirectly(Dm, mm, !0), this._unpackFlipY(mm.invertY);
        let im = Am.TEXTURE_2D;
        mm.isCube && (im = Am.TEXTURE_CUBE_MAP_POSITIVE_X + fm), Am.texImage2D(im, hm, wm, xm, am, Tm), this._bindTextureDirectly(Dm, null, !0)
      }
      updateTextureComparisonFunction(mm, Tm) {
        if (1 === this.zY) return void Rm.b.Error("WebGL 1 does not support texture comparison.");
        const fm = this._gl;
        mm.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, mm, !0), 0 === Tm ? (fm.texParameteri(fm.TEXTURE_CUBE_MAP, fm.TEXTURE_COMPARE_FUNC, 515), fm.texParameteri(fm.TEXTURE_CUBE_MAP, fm.TEXTURE_COMPARE_MODE, fm.NONE)) : (fm.texParameteri(fm.TEXTURE_CUBE_MAP, fm.TEXTURE_COMPARE_FUNC, Tm), fm.texParameteri(fm.TEXTURE_CUBE_MAP, fm.TEXTURE_COMPARE_MODE, fm.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, mm, !0), 0 === Tm ? (fm.texParameteri(fm.TEXTURE_2D, fm.TEXTURE_COMPARE_FUNC, 515), fm.texParameteri(fm.TEXTURE_2D, fm.TEXTURE_COMPARE_MODE, fm.NONE)) : (fm.texParameteri(fm.TEXTURE_2D, fm.TEXTURE_COMPARE_FUNC, Tm), fm.texParameteri(fm.TEXTURE_2D, fm.TEXTURE_COMPARE_MODE, fm.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), mm._comparisonFunction = Tm
      }
      createInstancesBuffer(mm) {
        const Tm = this._gl.createBuffer();
        if (!Tm) throw new Error("Unable to create instance buffer");
        const fm = new im.e(Tm);
        return fm.yp = mm, this.bindArrayBuffer(fm), this._gl.bufferData(this._gl.ARRAY_BUFFER, mm, this._gl.DYNAMIC_DRAW), fm.references = 1, fm
      }
      deleteInstancesBuffer(mm) {
        this._gl.deleteBuffer(mm)
      }
      async _clientWaitAsync(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const hm = this._gl;
        return await new Promise(((Am, am) => {
          (0, Vm.f)((() => {
            const fm = hm.clientWaitSync(mm, Tm, 0);
            if (fm == hm.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return fm != hm.TIMEOUT_EXPIRED
          }), Am, am, fm)
        }))
      }
      _readPixelsAsync(mm, Tm, fm, hm, Am, am, xm) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const wm = this._gl,
          Dm = wm.createBuffer();
        wm.bindBuffer(wm.PIXEL_PACK_BUFFER, Dm), wm.bufferData(wm.PIXEL_PACK_BUFFER, xm.byteLength, wm.STREAM_READ), wm.readPixels(mm, Tm, fm, hm, Am, am, 0), wm.bindBuffer(wm.PIXEL_PACK_BUFFER, null);
        const im = wm.fenceSync(wm.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return im ? (wm.flush(), this._clientWaitAsync(im, 0, 10).then((() => (wm.deleteSync(im), wm.bindBuffer(wm.PIXEL_PACK_BUFFER, Dm), wm.getBufferSubData(wm.PIXEL_PACK_BUFFER, 0, xm), wm.bindBuffer(wm.PIXEL_PACK_BUFFER, null), wm.deleteBuffer(Dm), xm)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(mm, Tm) {
            1 === Am.c.Instances.length && Em.b.audioEngine && (Em.b.audioEngine.dispose(), Em.b.audioEngine = null);
            const fm = mm.getHostWindow();
            fm && "function" === typeof fm.removeEventListener && (fm.removeEventListener("blur", mm._onBlur), fm.removeEventListener("focus", mm._onFocus)), Tm && (Tm.removeEventListener("focus", mm._onCanvasFocus), Tm.removeEventListener("blur", mm._onCanvasBlur), Tm.removeEventListener("pointerout", mm._onCanvasPointerOut), Tm.removeEventListener("contextmenu", mm._onCanvasContextMenu)), (0, om.h)() && (document.removeEventListener("fullscreenchange", mm._onFullscreenChange), document.removeEventListener("mozfullscreenchange", mm._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", mm._onFullscreenChange), document.removeEventListener("msfullscreenchange", mm._onFullscreenChange), document.removeEventListener("pointerlockchange", mm._onPointerLockChange), document.removeEventListener("mspointerlockchange", mm._onPointerLockChange), document.removeEventListener("mozpointerlockchange", mm._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", mm._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Qm.ALPHA_DISABLE = 0, Qm.ALPHA_ADD = 1, Qm.ALPHA_COMBINE = 2, Qm.ALPHA_SUBTRACT = 3, Qm.ALPHA_MULTIPLY = 4, Qm.ALPHA_MAXIMIZED = 5, Qm.ALPHA_ONEONE = 6, Qm.ALPHA_PREMULTIPLIED = 7, Qm.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Qm.ALPHA_INTERPOLATE = 9, Qm.ALPHA_SCREENMODE = 10, Qm.DELAYLOADSTATE_NONE = 0, Qm.DELAYLOADSTATE_LOADED = 1, Qm.DELAYLOADSTATE_LOADING = 2, Qm.DELAYLOADSTATE_NOTLOADED = 4, Qm.NEVER = 512, Qm.ALWAYS = 519, Qm.LESS = 513, Qm.EQUAL = 514, Qm.LEQUAL = 515, Qm.GREATER = 516, Qm.GEQUAL = 518, Qm.NOTEQUAL = 517, Qm.KEEP = 7680, Qm.REPLACE = 7681, Qm.INCR = 7682, Qm.DECR = 7683, Qm.INVERT = 5386, Qm.INCR_WRAP = 34055, Qm.DECR_WRAP = 34056, Qm.TEXTURE_CLAMP_ADDRESSMODE = 0, Qm.TEXTURE_WRAP_ADDRESSMODE = 1, Qm.TEXTURE_MIRROR_ADDRESSMODE = 2, Qm.TEXTUREFORMAT_ALPHA = 0, Qm.TEXTUREFORMAT_LUMINANCE = 1, Qm.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Qm.TEXTUREFORMAT_RGB = 4, Qm.TEXTUREFORMAT_RGBA = 5, Qm.TEXTUREFORMAT_RED = 6, Qm.TEXTUREFORMAT_R = 6, Qm.TEXTUREFORMAT_R16_UNORM = 33322, Qm.TEXTUREFORMAT_RG16_UNORM = 33324, Qm.TEXTUREFORMAT_RGB16_UNORM = 32852, Qm.TEXTUREFORMAT_RGBA16_UNORM = 32859, Qm.TEXTUREFORMAT_R16_SNORM = 36760, Qm.TEXTUREFORMAT_RG16_SNORM = 36761, Qm.TEXTUREFORMAT_RGB16_SNORM = 36762, Qm.TEXTUREFORMAT_RGBA16_SNORM = 36763, Qm.TEXTUREFORMAT_RG = 7, Qm.TEXTUREFORMAT_RED_INTEGER = 8, Qm.TEXTUREFORMAT_R_INTEGER = 8, Qm.TEXTUREFORMAT_RG_INTEGER = 9, Qm.TEXTUREFORMAT_RGB_INTEGER = 10, Qm.TEXTUREFORMAT_RGBA_INTEGER = 11, Qm.TEXTURETYPE_UNSIGNED_BYTE = 0, Qm.TEXTURETYPE_UNSIGNED_INT = 0, Qm.TEXTURETYPE_FLOAT = 1, Qm.TEXTURETYPE_HALF_FLOAT = 2, Qm.TEXTURETYPE_BYTE = 3, Qm.TEXTURETYPE_SHORT = 4, Qm.TEXTURETYPE_UNSIGNED_SHORT = 5, Qm.TEXTURETYPE_INT = 6, Qm.TEXTURETYPE_UNSIGNED_INTEGER = 7, Qm.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Qm.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Qm.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Qm.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Qm.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Qm.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Qm.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Qm.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Qm.TEXTURE_NEAREST_SAMPLINGMODE = 1, Qm.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Qm.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Qm.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Qm.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Qm.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Qm.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Qm.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Qm.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Qm.TEXTURE_NEAREST_LINEAR = 7, Qm.TEXTURE_NEAREST_NEAREST = 1, Qm.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Qm.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Qm.TEXTURE_LINEAR_LINEAR = 2, Qm.TEXTURE_LINEAR_NEAREST = 12, Qm.TEXTURE_EXPLICIT_MODE = 0, Qm.TEXTURE_SPHERICAL_MODE = 1, Qm.TEXTURE_PLANAR_MODE = 2, Qm.TEXTURE_CUBIC_MODE = 3, Qm.TEXTURE_PROJECTION_MODE = 4, Qm.TEXTURE_SKYBOX_MODE = 5, Qm.TEXTURE_INVCUBIC_MODE = 6, Qm.TEXTURE_EQUIRECTANGULAR_MODE = 7, Qm.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Qm.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Qm.SCALEMODE_FLOOR = 1, Qm.SCALEMODE_NEAREST = 2, Qm.SCALEMODE_CEILING = 3
  },
  40100: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am
    });
    var hm = fm(40064);
    class Am {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(mm) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = mm, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, mm && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, hm.c)(mm.format))
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
      getBaseArrayLayer(mm) {
        if (!this._textures) return -1;
        const Tm = this._textures[mm],
          fm = this._layerIndices?.[mm] ?? 0,
          hm = this._faceIndices?.[mm] ?? 0;
        return Tm.isCube ? 6 * fm + hm : Tm.is3D ? 0 : fm
      }
      get samples() {
        return this._samples
      }
      setSamples(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === mm && !fm) return mm;
        const hm = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, mm, Tm) : this._engine.updateRenderTargetTextureSampleCount(this, mm);
        return this._samples = mm, hm
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(mm, Tm, fm, hm, Am) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = mm, this._isCube = Tm, this._size = fm, this._engine = hm, this._depthStencilTexture = null, this.label = Am
      }
      setTextures(mm) {
        Array.isArray(mm) ? this._textures = mm : this._textures = mm ? [mm] : null
      }
      setTexture(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Tm] !== mm && (this._textures[Tm] && fm && this._textures[Tm].dispose(), this._textures[Tm] = mm)
      }
      setLayerAndFaceIndices(mm, Tm) {
        this._layerIndices = mm, this._faceIndices = Tm
      }
      setLayerAndFaceIndex() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Tm && Tm >= 0 && (this._layerIndices[mm] = Tm), void 0 !== fm && fm >= 0 && (this._faceIndices[mm] = fm)
      }
      createDepthStencilTexture() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          am = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = fm, this._depthStencilTextureLabel = am, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Tm,
          comparisonFunction: mm,
          generateStencil: fm,
          isCube: this._isCube,
          samples: hm,
          depthTextureFormat: Am,
          label: am
        }, this), this._depthStencilTexture
      }
      _shareDepth(mm) {
        this.shareDepth(mm)
      }
      shareDepth(mm) {
        this._depthStencilTexture && (mm._depthStencilTexture && mm._depthStencilTexture.dispose(), mm._depthStencilTexture = this._depthStencilTexture, mm._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(mm) {
        this.texture && this.texture._swapAndDie(mm), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let mm = null;
        if (this._isMulti) {
          const Tm = this.textures;
          if (Tm && Tm.length > 0) {
            let fm = !1,
              hm = Tm.length,
              Am = -1;
            const am = Tm[Tm.length - 1]._source;
            14 !== am && 12 !== am || (fm = !0, Am = Tm[Tm.length - 1].format, hm--);
            const xm = [],
              wm = [],
              Dm = [],
              im = [],
              Rm = [],
              pm = [],
              Em = [],
              om = {};
            for (let mm = 0; mm < hm; ++mm) {
              const fm = Tm[mm];
              xm.push(fm.samplingMode), wm.push(fm.type), Dm.push(fm.format);
              void 0 !== om[fm.uniqueId] ? (im.push(-1), Em.push(0)) : (om[fm.uniqueId] = mm, fm.is2DArray ? (im.push(35866), Em.push(fm.depth)) : fm.isCube ? (im.push(34067), Em.push(0)) : fm.is3D ? (im.push(32879), Em.push(fm.depth)) : (im.push(3553), Em.push(0))), this._faceIndices && Rm.push(this._faceIndices[mm] ?? 0), this._layerIndices && pm.push(this._layerIndices[mm] ?? 0)
            }
            const Om = {
                samplingModes: xm,
                generateMipMaps: Tm[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: fm,
                depthTextureFormat: Am,
                types: wm,
                formats: Dm,
                sxm: hm,
                targetTypes: im,
                faceIndex: Rm,
                layerIndex: pm,
                layerCounts: Em,
                label: this.label
              },
              Ym = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            mm = this._engine.createMultipleRenderTarget(Ym, Om);
            for (let qm = 0; qm < hm; ++qm) {
              if (-1 !== im[qm]) continue;
              const fm = om[Tm[qm].uniqueId];
              mm.setTexture(mm.textures[fm], qm)
            }
          }
        } else {
          const Tm = {};
          if (Tm.generateDepthBuffer = this._generateDepthBuffer, Tm.generateMipMaps = this.texture?.generateMipMaps ?? !1, Tm.generateStencilBuffer = this._generateStencilBuffer, Tm.samplingMode = this.texture?.samplingMode, Tm.type = this.texture?.type, Tm.format = this.texture?.format, Tm.noColorAttachment = !this._textures, Tm.label = this.label, this.isCube) mm = this._engine.createRenderTargetCubeTexture(this.width, Tm);
          else {
            const fm = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            mm = this._engine.createRenderTargetTexture(fm, Tm)
          }
          mm.texture && (mm.texture.isReady = !0)
        }
        return mm
      }
      _swapRenderTargetWrapper(mm) {
        if (this._textures && mm._textures)
          for (let Tm = 0; Tm < this._textures.length; ++Tm) this._textures[Tm]._swapAndDie(mm._textures[Tm], !1), mm._textures[Tm].isReady = !0;
        this._depthStencilTexture && mm._depthStencilTexture && (this._depthStencilTexture._swapAndDie(mm._depthStencilTexture), mm._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const mm = this._cloneRenderTargetWrapper();
        if (mm) {
          if (this._depthStencilTexture) {
            const Tm = this._depthStencilTexture.samplingMode,
              fm = this._depthStencilTexture.format,
              hm = 2 === Tm || 3 === Tm || 11 === Tm;
            mm.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, hm, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, fm, this._depthStencilTextureLabel)
          }
          this.samples > 1 && mm.setSamples(this.samples), mm._swapRenderTargetWrapper(this), mm.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let mm = 0; mm < this._textures.length; ++mm) this._textures[mm].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40538: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    class hm {
      static get ForceFullSceneLoadingForIncremental() {
        return hm._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(mm) {
        hm._ForceFullSceneLoadingForIncremental = mm
      }
      static get ShowLoadingScreen() {
        return hm._ShowLoadingScreen
      }
      static set ShowLoadingScreen(mm) {
        hm._ShowLoadingScreen = mm
      }
      static get loggingLevel() {
        return hm._LoggingLevel
      }
      static set loggingLevel(mm) {
        hm._LoggingLevel = mm
      }
      static get CleanBoneMatrixWeights() {
        return hm._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(mm) {
        hm._CleanBoneMatrixWeights = mm
      }
    }
    hm._ForceFullSceneLoadingForIncremental = !1, hm._ShowLoadingScreen = !0, hm._CleanBoneMatrixWeights = !1, hm._LoggingLevel = 0
  },
  40193: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(38766);
    const Am = new Map;

    function am(mm, Tm) {
      (function(mm) {
        return Am.delete(mm)
      })(mm) && hm.b.Warn(`Extension with the name '${mm}' already exists`), Am.set(mm, Tm)
    }

    function xm(mm, Tm) {
      "image/ktx" !== Tm && "image/ktx2" !== Tm || (mm = ".ktx"), Am.has(mm) || (mm.endsWith(".ies") && am(".ies", (async () => await fm.e(309).then((() => fm(41799))).then((mm => new mm._IESTextureLoader)))), mm.endsWith(".dds") && am(".dds", (async () => await fm.e(307).then((() => fm(41807))).then((mm => new mm._DDSTextureLoader)))), mm.endsWith(".basis") && am(".basis", (async () => await fm.e(310).then((() => fm(41811))).then((mm => new mm._BasisTextureLoader)))), mm.endsWith(".env") && am(".env", (async () => await Promise.all([fm.e(311), fm.e(308)]).then((() => fm(41814))).then((mm => new mm._ENVTextureLoader)))), mm.endsWith(".hdr") && am(".hdr", (async () => await fm.e(312).then((() => fm(41855))).then((mm => new mm._HDRTextureLoader)))), (mm.endsWith(".ktx") || mm.endsWith(".ktx2")) && (am(".ktx", (async () => await fm.e(313).then((() => fm(41864))).then((mm => new mm._KTXTextureLoader)))), am(".ktx2", (async () => await fm.e(313).then((() => fm(41864))).then((mm => new mm._KTXTextureLoader))))), mm.endsWith(".tga") && am(".tga", (async () => await fm.e(314).then((() => fm(41879))).then((mm => new mm._TGATextureLoader)))), mm.endsWith(".exr") && am(".exr", (async () => await fm.e(315).then((() => fm(41881))).then((mm => new mm._ExrTextureLoader)))));
      const hm = Am.get(mm);
      return hm ? Promise.resolve(hm(Tm)) : null
    }
  },
  40552: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm,
      h: () => im
    });
    var hm = fm(40383),
      Am = fm(40138),
      am = fm(37224);
    class xm extends hm.d {
      get B3() {
        return this._subMaterials
      }
      set B3(mm) {
        this._subMaterials = mm, this._hookArray(mm)
      }
      getChildren() {
        return this.B3
      }
      constructor(mm, Tm) {
        super(mm, Tm, !0), this._waitingSubMaterialsUniqueIds = [], this.wG().addMultiMaterial(this), this.B3 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(mm) {
        var Tm = this;
        const fm = mm.push;
        mm.push = function() {
          for (var hm = arguments.length, Am = new Array(hm), am = 0; am < hm; am++) Am[am] = arguments[am];
          const xm = fm.apply(mm, Am);
          return Tm._markAllSubMeshesAsTexturesDirty(), xm
        };
        const hm = mm.splice;
        mm.splice = (Tm, fm) => {
          const Am = hm.call(mm, Tm, fm ?? mm.length);
          return this._markAllSubMeshesAsTexturesDirty(), Am
        }
      }
      getSubMaterial(mm) {
        return mm < 0 || mm >= this.B3.length ? this.wG().defaultMaterial : this.B3[mm]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.B3.map((mm => mm ? mm.getActiveTextures() : [])))
      }
      hasTexture(mm) {
        if (super.hasTexture(mm)) return !0;
        for (let Tm = 0; Tm < this.B3.length; Tm++)
          if (this.B3[Tm]?.hasTexture(mm)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(mm, Tm, fm) {
        for (let hm = 0; hm < this.B3.length; hm++) {
          const Am = this.B3[hm];
          if (Am) {
            if (Am._storeEffectOnSubMeshes) {
              if (!Am.isReadyForSubMesh(mm, Tm, fm)) return !1;
              continue
            }
            if (!Am.isReady(mm)) return !1
          }
        }
        return !0
      }
      clone(mm, Tm) {
        const fm = new xm(mm, this.wG());
        for (let hm = 0; hm < this.B3.length; hm++) {
          let Am;
          const am = this.B3[hm];
          Am = Tm && am ? am.clone(mm + "-" + am.name) : this.B3[hm], fm.B3.push(Am)
        }
        return fm
      }
      serialize() {
        const mm = {};
        mm.name = this.name, mm.id = this.id, mm.uniqueId = this.uniqueId, Am.e && (mm.tags = Am.e.GetTags(this)), mm.materialsUniqueIds = [], mm.materials = [];
        for (let Tm = 0; Tm < this.B3.length; Tm++) {
          const fm = this.B3[Tm];
          fm ? (mm.materialsUniqueIds.push(fm.uniqueId), mm.materials.push(fm.id)) : (mm.materialsUniqueIds.push(null), mm.materials.push(null))
        }
        return mm
      }
      dispose(mm, Tm, fm) {
        const hm = this.wG();
        if (!hm) return;
        if (fm)
          for (let am = 0; am < this.B3.length; am++) {
            const fm = this.B3[am];
            fm && fm.dispose(mm, Tm)
          }
        const Am = hm.multiMaterials.indexOf(this);
        Am >= 0 && hm.multiMaterials.splice(Am, 1), super.dispose(mm, Tm)
      }
    }
    let wm = !1;

    function Dm(mm, Tm) {
      const fm = new xm(mm.name, Tm);
      if (fm.id = mm.id, fm._loadedUniqueId = mm.uniqueId, Am.e && Am.e.AddTagsTo(fm, mm.tags), mm.materialsUniqueIds) fm._waitingSubMaterialsUniqueIds = mm.materialsUniqueIds;
      else
        for (const hm of mm.materials) fm.B3.push(Tm.getLastMaterialById(hm));
      return fm
    }

    function im() {
      wm || (wm = !0, xm.ParseMultiMaterial = Dm, (0, am.d)("BABYLON.MultiMaterial", xm))
    }
  },
  40330: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm, Am, am = fm(37185);
    ! function(mm) {
      mm[mm.LOCAL = 0] = "LOCAL", mm[mm.WORLD = 1] = "WORLD", mm[mm.BONE = 2] = "BONE"
    }(hm || (hm = {}));
    class xm {}
    xm.X = new am.p(1, 0, 0), xm.Y = new am.p(0, 1, 0), xm.Z = new am.p(0, 0, 1),
      function(mm) {
        mm[mm.X = 0] = "X", mm[mm.Y = 1] = "Y", mm[mm.Z = 2] = "Z"
      }(Am || (Am = {}))
  },
  40108: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      e: () => im
    });
    var hm = fm(37185);
    const Am = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      am = [() => 1, mm => mm.y, mm => mm.z, mm => mm.x, mm => mm.x * mm.y, mm => mm.y * mm.z, mm => 3 * mm.z * mm.z - 1, mm => mm.x * mm.z, mm => mm.x * mm.x - mm.y * mm.y],
      xm = (mm, Tm) => Am[mm] * am[mm](Tm),
      wm = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Dm {
      constructor() {
        this.preScaled = !1, this.l00 = hm.p.Zero(), this.l1_1 = hm.p.Zero(), this.l10 = hm.p.Zero(), this.l11 = hm.p.Zero(), this.l2_2 = hm.p.Zero(), this.l2_1 = hm.p.Zero(), this.l20 = hm.p.Zero(), this.l21 = hm.p.Zero(), this.l22 = hm.p.Zero()
      }
      addLight(mm, Tm, fm) {
        hm.j.WO[0].set(Tm.r, Tm.g, Tm.b);
        const Am = hm.j.WO[0],
          am = hm.j.WO[1];
        Am.scaleToRef(fm, am), am.scaleToRef(xm(0, mm), hm.j.WO[2]), this.l00.addInPlace(hm.j.WO[2]), am.scaleToRef(xm(1, mm), hm.j.WO[2]), this.l1_1.addInPlace(hm.j.WO[2]), am.scaleToRef(xm(2, mm), hm.j.WO[2]), this.l10.addInPlace(hm.j.WO[2]), am.scaleToRef(xm(3, mm), hm.j.WO[2]), this.l11.addInPlace(hm.j.WO[2]), am.scaleToRef(xm(4, mm), hm.j.WO[2]), this.l2_2.addInPlace(hm.j.WO[2]), am.scaleToRef(xm(5, mm), hm.j.WO[2]), this.l2_1.addInPlace(hm.j.WO[2]), am.scaleToRef(xm(6, mm), hm.j.WO[2]), this.l20.addInPlace(hm.j.WO[2]), am.scaleToRef(xm(7, mm), hm.j.WO[2]), this.l21.addInPlace(hm.j.WO[2]), am.scaleToRef(xm(8, mm), hm.j.WO[2]), this.l22.addInPlace(hm.j.WO[2])
      }
      scaleInPlace(mm) {
        this.l00.scaleInPlace(mm), this.l1_1.scaleInPlace(mm), this.l10.scaleInPlace(mm), this.l11.scaleInPlace(mm), this.l2_2.scaleInPlace(mm), this.l2_1.scaleInPlace(mm), this.l20.scaleInPlace(mm), this.l21.scaleInPlace(mm), this.l22.scaleInPlace(mm)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(wm[0]), this.l1_1.scaleInPlace(wm[1]), this.l10.scaleInPlace(wm[2]), this.l11.scaleInPlace(wm[3]), this.l2_2.scaleInPlace(wm[4]), this.l2_1.scaleInPlace(wm[5]), this.l20.scaleInPlace(wm[6]), this.l21.scaleInPlace(wm[7]), this.l22.scaleInPlace(wm[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Am[0]), this.l1_1.scaleInPlace(Am[1]), this.l10.scaleInPlace(Am[2]), this.l11.scaleInPlace(Am[3]), this.l2_2.scaleInPlace(Am[4]), this.l2_1.scaleInPlace(Am[5]), this.l20.scaleInPlace(Am[6]), this.l21.scaleInPlace(Am[7]), this.l22.scaleInPlace(Am[8])
      }
      updateFromArray(mm) {
        return hm.p.FromArrayToRef(mm[0], 0, this.l00), hm.p.FromArrayToRef(mm[1], 0, this.l1_1), hm.p.FromArrayToRef(mm[2], 0, this.l10), hm.p.FromArrayToRef(mm[3], 0, this.l11), hm.p.FromArrayToRef(mm[4], 0, this.l2_2), hm.p.FromArrayToRef(mm[5], 0, this.l2_1), hm.p.FromArrayToRef(mm[6], 0, this.l20), hm.p.FromArrayToRef(mm[7], 0, this.l21), hm.p.FromArrayToRef(mm[8], 0, this.l22), this
      }
      updateFromFloatsArray(mm) {
        return hm.p.FromFloatsToRef(mm[0], mm[1], mm[2], this.l00), hm.p.FromFloatsToRef(mm[3], mm[4], mm[5], this.l1_1), hm.p.FromFloatsToRef(mm[6], mm[7], mm[8], this.l10), hm.p.FromFloatsToRef(mm[9], mm[10], mm[11], this.l11), hm.p.FromFloatsToRef(mm[12], mm[13], mm[14], this.l2_2), hm.p.FromFloatsToRef(mm[15], mm[16], mm[17], this.l2_1), hm.p.FromFloatsToRef(mm[18], mm[19], mm[20], this.l20), hm.p.FromFloatsToRef(mm[21], mm[22], mm[23], this.l21), hm.p.FromFloatsToRef(mm[24], mm[25], mm[26], this.l22), this
      }
      static FromArray(mm) {
        return (new Dm).updateFromArray(mm)
      }
      static FromPolynomial(mm) {
        const Tm = new Dm;
        return Tm.l00 = mm.xx.scale(.376127).add(mm.yy.scale(.376127)).add(mm.zz.scale(.376126)), Tm.l1_1 = mm.y.scale(.977204), Tm.l10 = mm.z.scale(.977204), Tm.l11 = mm.x.scale(.977204), Tm.l2_2 = mm.xy.scale(1.16538), Tm.l2_1 = mm.yz.scale(1.16538), Tm.l20 = mm.zz.scale(1.34567).subtract(mm.xx.scale(.672834)).subtract(mm.yy.scale(.672834)), Tm.l21 = mm.zx.scale(1.16538), Tm.l22 = mm.xx.scale(1.16538).subtract(mm.yy.scale(1.16538)), Tm.l1_1.scaleInPlace(-1), Tm.l11.scaleInPlace(-1), Tm.l2_1.scaleInPlace(-1), Tm.l21.scaleInPlace(-1), Tm.scaleInPlace(Math.PI), Tm
      }
    }
    class im {
      constructor() {
        this.x = hm.p.Zero(), this.y = hm.p.Zero(), this.z = hm.p.Zero(), this.xx = hm.p.Zero(), this.yy = hm.p.Zero(), this.zz = hm.p.Zero(), this.xy = hm.p.Zero(), this.yz = hm.p.Zero(), this.zx = hm.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Dm.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(mm) {
        hm.j.WO[0].Z8(mm.r, mm.g, mm.b);
        const Tm = hm.j.WO[0];
        this.xx.addInPlace(Tm), this.yy.addInPlace(Tm), this.zz.addInPlace(Tm)
      }
      scaleInPlace(mm) {
        this.x.scaleInPlace(mm), this.y.scaleInPlace(mm), this.z.scaleInPlace(mm), this.xx.scaleInPlace(mm), this.yy.scaleInPlace(mm), this.zz.scaleInPlace(mm), this.yz.scaleInPlace(mm), this.zx.scaleInPlace(mm), this.xy.scaleInPlace(mm)
      }
      updateFromHarmonics(mm) {
        return this._harmonics = mm, this.x.ZZ(mm.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.ZZ(mm.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.ZZ(mm.l10), this.z.scaleInPlace(1.02333), this.xx.ZZ(mm.l00), hm.j.WO[0].ZZ(mm.l20).scaleInPlace(.247708), hm.j.WO[1].ZZ(mm.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).zhm(hm.j.WO[0]).addInPlace(hm.j.WO[1]), this.yy.ZZ(mm.l00), this.yy.scaleInPlace(.886277).zhm(hm.j.WO[0]).zhm(hm.j.WO[1]), this.zz.ZZ(mm.l00), hm.j.WO[0].ZZ(mm.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(hm.j.WO[0]), this.yz.ZZ(mm.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.ZZ(mm.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.ZZ(mm.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(mm) {
        return (new im).updateFromHarmonics(mm)
      }
      static FromArray(mm) {
        const Tm = new im;
        return hm.p.FromArrayToRef(mm[0], 0, Tm.x), hm.p.FromArrayToRef(mm[1], 0, Tm.y), hm.p.FromArrayToRef(mm[2], 0, Tm.z), hm.p.FromArrayToRef(mm[3], 0, Tm.xx), hm.p.FromArrayToRef(mm[4], 0, Tm.yy), hm.p.FromArrayToRef(mm[5], 0, Tm.zz), hm.p.FromArrayToRef(mm[6], 0, Tm.yz), hm.p.FromArrayToRef(mm[7], 0, Tm.zx), hm.p.FromArrayToRef(mm[8], 0, Tm.xy), Tm
      }
    }
  },
  40544: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Nm,
      g: () => Xm
    });
    var hm = fm(40113),
      Am = fm(37203),
      am = fm(37185),
      xm = fm(40251),
      wm = fm(40527),
      Dm = fm(40546),
      im = fm(40242),
      Rm = fm(40404),
      pm = fm(40235);
    class Em {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new am.p(0, 0, 0), this._diffPositionForCollisions = new am.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var om, Om, Ym, qm = fm(39993),
      jm = fm(40186),
      Vm = fm(40416),
      Im = fm(37336),
      Km = fm(37191),
      Qm = fm(40330),
      nm = fm(38766),
      Jm = fm(40119),
      cm = fm(40014),
      zm = fm(37224);

    function Zm(mm, Tm) {
      return mm - Math.floor(mm / Tm) * Tm
    }

    function km(mm, Tm, fm) {
      mm instanceof Float32Array ? am.e.FromArrayToRef(mm, Tm, fm) : fm.Z8((0, jm.d)(mm[Tm]), (0, jm.d)(mm[Tm + 1]), (0, jm.d)(mm[Tm + 2]), (0, jm.d)(mm[Tm + 3]), (0, jm.d)(mm[Tm + 4]), (0, jm.d)(mm[Tm + 5]), (0, jm.d)(mm[Tm + 6]), (0, jm.d)(mm[Tm + 7]), (0, jm.d)(mm[Tm + 8]), (0, jm.d)(mm[Tm + 9]), (0, jm.d)(mm[Tm + 10]), (0, jm.d)(mm[Tm + 11]), (0, jm.d)(mm[Tm + 12]), (0, jm.d)(mm[Tm + 13]), (0, jm.d)(mm[Tm + 14]), (0, jm.d)(mm[Tm + 15]))
    }

    function bm(mm, Tm, fm, hm, Am, wm, Dm, im, Rm) {
      const pm = fm.texture,
        Em = pm?.getInternalTexture(),
        om = Em?._bufferView;
      if (!(om instanceof Float32Array) && !(om instanceof Uint16Array)) return nm.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const Om = pm.getSize(),
        Ym = function(mm, Tm) {
          const fm = mm.y - mm.x + 1,
            hm = Tm * mm.w / fm,
            Am = hm < 1 ? 0 : 1,
            am = fm - Am;
          let xm = Zm(hm - Math.floor(hm), 1) * am;
          return xm = Zm(xm + mm.z, am), Math.floor(xm) + mm.x + Am
        }(hm, fm.time);
      if (!isFinite(Ym) || Ym < 0 || Ym >= Om.height) return nm.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const qm = am.j.WO[0],
        jm = am.j.Matrix[0],
        Vm = am.j.Matrix[1],
        Im = Ym * Om.width * 4,
        Km = Tm === xm.m.NormalKind ? am.p.TransformNormalFromFloatsToRef : am.p.TransformCoordinatesFromFloatsToRef;
      for (let am = 0, xm = 0; am < mm.length; am += 3, xm += 4) {
        let Tm, fm;
        for (jm.reset(), Tm = 0; Tm < 4 && Tm < Rm; Tm++) fm = wm[xm + Tm], fm > 0 && (km(om, Im + 16 * Math.floor(Am[xm + Tm]), Vm), Vm.scaleAndAddToRef(fm, jm));
        if (Dm && im)
          for (Tm = 0; Tm < 4 && Tm + 4 < Rm; Tm++) fm = im[xm + Tm], fm > 0 && (km(om, Im + 16 * Math.floor(Dm[xm + Tm]), Vm), Vm.scaleAndAddToRef(fm, jm));
        Km(mm[am], mm[am + 1], mm[am + 2], jm, qm), qm.toArray(mm, am)
      }
      return !0
    }
    class Sm {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = am.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class em {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Sm, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Em, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Nm = (() => {
        var mm;
        let Tm, Em = Dm.e,
          om = [];
        return mm = class extends Em {
          static get BILLBOARDMODE_NONE() {
            return Dm.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Dm.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Dm.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Dm.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Dm.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Dm.e.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(mm) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = mm
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(mm) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = mm
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(mm) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = mm
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(mm) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = mm
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(mm) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = mm
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(mm) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== mm && (this._internalAbstractMeshDataInfo._morphTargetManager = mm, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(mm) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== mm && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = mm, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(mm) {
            return !!super._updateNonUniformScalingState(mm) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(mm) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = mm
          }
          set cE(mm) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(mm)
          }
          set onCollisionPositionChange(mm) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(mm)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(mm) {
            if (this._internalAbstractMeshDataInfo._visibility === mm) return;
            const Tm = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = mm, (1 === Tm && 1 !== mm || 1 !== Tm && 1 === mm) && this._markSubMeshesAsDirty((mm => {
              mm.markAsMiscDirty(), mm.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(mm) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = mm
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(mm) {
            this._internalAbstractMeshDataInfo._renderingGroupId = mm
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(mm) {
            if (!Number.isInteger(mm) || mm < 0 || mm > 255 || 0 !== mm && 0 === (63 & mm)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = mm
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(mm) {
            this._setMaterial(mm)
          }
          _setMaterial(mm) {
            this._internalAbstractMeshDataInfo._material !== mm && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = mm, mm && mm.meshMap && (mm.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.jK && (this.resetDrawCache(void 0, null == mm), this._unBindEffect()))
          }
          getMaterialForRenderPass(mm) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[mm]
          }
          setMaterialForRenderPass(mm, Tm) {
            this.resetDrawCache(mm), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const fm = this._internalAbstractMeshDataInfo._materialForRenderPass[mm];
            fm?.meshMap?.[this.uniqueId] && (fm.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[mm] = Tm, Tm && Tm.meshMap && (Tm.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(mm) {
            this._internalAbstractMeshDataInfo._receiveShadows !== mm && (this._internalAbstractMeshDataInfo._receiveShadows = mm, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(mm) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== mm && (this._internalAbstractMeshDataInfo._hasVertexAlpha = mm, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(mm) {
            this._internalAbstractMeshDataInfo._useVertexColors !== mm && (this._internalAbstractMeshDataInfo._useVertexColors = mm, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(mm) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== mm && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = mm, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(mm) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== mm && (this._internalAbstractMeshDataInfo._numBoneInfluencers = mm, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(mm) {
            this._internalAbstractMeshDataInfo._applyFog !== mm && (this._internalAbstractMeshDataInfo._applyFog = mm, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(mm) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = mm
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(mm) {
            mm !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = mm, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(mm) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(mm) ? -1 : mm
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(mm) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = mm
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(mm) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(mm) ? -1 : mm
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(mm) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = mm
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(mm) {
            const Tm = this._internalAbstractMeshDataInfo._skeleton;
            Tm && Tm.needInitialSkinMatrix && Tm._unregisterMeshWithPoseMatrix(this), mm && mm.needInitialSkinMatrix && mm._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = mm, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(Tm) {
            var fm;
            let hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Tm, hm, !1), fm = this, this._internalAbstractMeshDataInfo = new em, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = mm.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Am.c, this.onCollisionPositionChangeObservable = new Am.c, this.onMaterialChangedObservable = new Am.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.xq = mm.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Im.b.Red(), this.outlineWidth = .02, this.overlayColor = Im.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.gO = !1, this.mY = !1, this.actionManager = null, this.ellipsoid = new am.p(.5, 1, .5), this.ellipsoidOffset = new am.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Im.c(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                nG: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Am.c, this._onCollisionPositionChange = function(mm, Tm) {
                let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Tm.subtractToRef(fm._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, fm._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), fm._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > cm.b.CollisionsEpsilon && fm.position.addInPlace(fm._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), hm && fm.onCollideObservable.notifyObservers(hm), fm.onCollisionPositionChangeObservable.notifyObservers(fm.position)
              }, hm = this.wG(), this.layerMask = hm.defaultRenderableLayerMask, hm.whm(this), this._resyncLightSources(), this._uniformBuffer = new pm.e(this.wG().dO(), void 0, void 0, Tm, !this.wG().dO().isWebGPU), this._buildUniformLayout(), hm.performancePriority) {
              case 2:
                this.mY = !0;
              case 1:
                this.gO = !0, this.xq = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(mm) {
            const Tm = this._uniformBuffer;
            Tm.K9("world", mm), Tm.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Tm.update()
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
          toString(mm) {
            let Tm = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            Tm += ", # of submeshes: " + (this.jK ? this.jK.length : 0);
            const fm = this._internalAbstractMeshDataInfo._skeleton;
            return fm && (Tm += ", skeleton: " + fm.name), mm && (Tm += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Tm += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.nG ? "YES" : "NO")), Tm
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Dm.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(mm) {
            let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (Tm || this.actionManager.isRecursive)) {
              if (!mm) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(mm)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(mm, !1) : null
          }
          _releaseRenderPassId(mm) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.jK) {
              for (const mm of this.jK) mm._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const mm of this.wG().lights) mm.isEnabled() && mm.canAffectMesh(this) && this._lightSources.push(mm);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(mm) {
            const Tm = mm.isEnabled() && mm.canAffectMesh(this),
              fm = this._lightSources.indexOf(mm);
            let hm = !1;
            if (-1 === fm) {
              if (!Tm) return;
              this._lightSources.push(mm)
            } else {
              if (Tm) return;
              hm = !0, this._lightSources.splice(fm, 1)
            }
            this._markSubMeshesAsLightDirty(hm)
          }
          _unBindEffect() {
            for (const mm of this.jK) mm.setEffect(null)
          }
          _removeLightSource(mm, Tm) {
            const fm = this._lightSources.indexOf(mm); - 1 !== fm && (this._lightSources.splice(fm, 1), this._markSubMeshesAsLightDirty(Tm))
          }
          _markSubMeshesAsDirty(mm) {
            if (this.jK)
              for (const Tm of this.jK)
                for (let fm = 0; fm < Tm._drawWrappers.length; ++fm) {
                  const hm = Tm._drawWrappers[fm];
                  hm && hm.defines && hm.defines.markAllAsDirty && mm(hm.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((Tm => Tm.markAsLightDirty(mm)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((mm => mm.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((mm => mm.markAsMiscDirty()))
          }
          HTm(mm) {
            return this._currentRenderId = Number.MAX_VALUE, super.HTm(mm), this._isDirty = !0, this
          }
          resetDrawCache(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.jK)
              for (const fm of this.jK) fm.resetDrawCache(mm, Tm)
          }
          get isBlocked() {
            return !1
          }
          getLOD(mm) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          xhm() {
            return null
          }
          getVerticesData(mm) {
            return null
          }
          setVerticesData(mm, Tm, fm, hm) {
            return this
          }
          updateVerticesData(mm, Tm, fm, hm) {
            return this
          }
          setIndices(mm, Tm) {
            return this
          }
          isVerticesDataPresent(mm) {
            return !1
          }
          DH() {
            return this._masterMesh ? this._masterMesh.DH() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.DH()
          }
          setBoundingInfo(mm) {
            return this._boundingInfo = mm, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(mm, Tm, fm) {
            return this._boundingInfo = new Rm.b(mm, Tm, fm), this._boundingInfo
          }
          normalizeToUnitCube() {
            let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              fm = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(mm, Tm, fm)
          }
          get useBones() {
            return this.skeleton && this.wG().skeletonsEnabled && this.isVerticesDataPresent(xm.m.MatricesIndicesKind) && this.isVerticesDataPresent(xm.m.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(mm) {}
          _activate(mm, Tm) {
            return this._renderId = mm, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Dm.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get pG() {
            return !1
          }
          get Fhm() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(mm, Tm, fm) {
            return this.position.addInPlace(this.calcMovePOV(mm, Tm, fm)), this
          }
          calcMovePOV(mm, Tm, fm) {
            const hm = new am.e;
            (this.rotationQuaternion ? this.rotationQuaternion : am.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(hm);
            const Am = am.p.Zero(),
              xm = this.definedFacingForward ? -1 : 1;
            return am.p.TransformCoordinatesFromFloatsToRef(mm * xm, Tm, fm * xm, hm, Am), Am
          }
          rotatePOV(mm, Tm, fm) {
            return this.rotation.addInPlace(this.calcRotatePOV(mm, Tm, fm)), this
          }
          calcRotatePOV(mm, Tm, fm) {
            const hm = this.definedFacingForward ? 1 : -1;
            return new am.p(mm * hm, Tm, fm * hm)
          }
          _refreshBoundingInfo(mm, Tm) {
            if (mm) {
              const fm = (0, Vm.g)(mm, 0, this.getTotalVertices(), Tm);
              this._boundingInfo ? this._boundingInfo.reConstruct(fm.minimum, fm.maximum) : this._boundingInfo = new Rm.b(fm.minimum, fm.maximum)
            }
            if (this.jK)
              for (let fm = 0; fm < this.jK.length; fm++) this.jK[fm].refreshBoundingInfo(mm);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(mm) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(mm.minimum, mm.maximum) : this._boundingInfo = new Rm.b(mm.minimum, mm.maximum), this.jK)
              for (let Tm = 0; Tm < this.jK.length; Tm++) this.jK[Tm].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(mm, Tm, fm, hm, Am, wm, Dm) {
            ! function(mm, Tm, fm, hm, Am, wm, Dm) {
              const im = am.j.WO[0],
                Rm = am.j.Matrix[0],
                pm = am.j.Matrix[1],
                Em = Tm === xm.m.NormalKind ? am.p.TransformNormalFromFloatsToRef : am.p.TransformCoordinatesFromFloatsToRef;
              for (let xm = 0, om = 0; xm < mm.length; xm += 3, om += 4) {
                let Tm, Om;
                for (Rm.reset(), Tm = 0; Tm < 4; Tm++) Om = Am[om + Tm], Om > 0 && (am.e.FromFloat32ArrayToRefScaled(fm, Math.floor(16 * hm[om + Tm]), Om, pm), Rm.addToSelf(pm));
                if (wm && Dm)
                  for (Tm = 0; Tm < 4; Tm++) Om = Dm[om + Tm], Om > 0 && (am.e.FromFloat32ArrayToRefScaled(fm, Math.floor(16 * wm[om + Tm]), Om, pm), Rm.addToSelf(pm));
                Em(mm[xm], mm[xm + 1], mm[xm + 2], Rm, im), im.toArray(mm, xm)
              }
            }(mm, Tm, fm, hm, Am, wm, Dm)
          }
          _getData(Tm, fm) {
            let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xm.m.PositionKind;
            const Am = Tm.cache,
              wm = mm => {
                if (Am) {
                  const Tm = Am._vertexData || (Am._vertexData = {});
                  return Tm[mm] || this.copyVerticesData(mm, Tm), Tm[mm]
                }
                return this.getVerticesData(mm)
              };
            if (fm || (fm = wm(hm)), !fm) return null;
            Am ? (Am._outputData ? Am._outputData.set(fm) : Am._outputData = new Float32Array(fm), fm = Am._outputData) : (Tm.applyMorph && this.morphTargetManager || Tm.applySkeleton && this.skeleton || Tm.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (fm = fm.slice()), Tm.applyMorph && this.morphTargetManager && function(mm, Tm, fm) {
              let hm;
              switch (Tm) {
                case xm.m.PositionKind:
                  hm = mm => mm.getPositions();
                  break;
                case xm.m.NormalKind:
                  hm = mm => mm.getNormals();
                  break;
                case xm.m.TangentKind:
                  hm = mm => mm.getTangents();
                  break;
                case xm.m.UVKind:
                  hm = mm => mm.getUVs();
                  break;
                case xm.m.UV2Kind:
                  hm = mm => mm.getUV2s();
                  break;
                case xm.m.ColorKind:
                  hm = mm => mm.getColors();
                  break;
                default:
                  return
              }
              for (let Am = 0; Am < mm.length; Am++) {
                let Tm = mm[Am];
                for (let am = 0; am < fm.numTargets; am++) {
                  const xm = fm.getTarget(am),
                    wm = xm.influence;
                  if (0 !== wm) {
                    const fm = hm(xm);
                    fm && (Tm += (fm[Am] - mm[Am]) * wm)
                  }
                }
                mm[Am] = Tm
              }
            }(fm, hm, this.morphTargetManager);
            const Dm = this.bakedVertexAnimationManager;
            let im = !1;
            if (Tm.applyBakedVertexAnimation && Dm?.isEnabled) {
              const mm = wm(xm.m.MatricesIndicesKind),
                Am = wm(xm.m.MatricesWeightsKind);
              if (Am && mm) {
                const am = this.numBoneInfluencers > 4,
                  Rm = am ? wm(xm.m.MatricesIndicesExtraKind) : null,
                  pm = am ? wm(xm.m.MatricesWeightsExtraKind) : null;
                im = bm(fm, hm, Dm, Tm.bakedVertexAnimationSettings ?? Dm.animationParameters, mm, Am, Rm, pm, this.numBoneInfluencers)
              }
            }
            if (!im && Tm.applySkeleton && this.skeleton) {
              const Tm = wm(xm.m.MatricesIndicesKind),
                Am = wm(xm.m.MatricesWeightsKind);
              if (Am && Tm) {
                const am = this.numBoneInfluencers > 4,
                  Dm = am ? wm(xm.m.MatricesIndicesExtraKind) : null,
                  im = am ? wm(xm.m.MatricesWeightsExtraKind) : null,
                  Rm = this.skeleton.getTransformMatrices(this);
                mm._ApplySkeleton(fm, hm, Rm, Tm, Am, Dm, im)
              }
            }
            if (!1 !== Tm.updatePositionsArray && hm === xm.m.PositionKind) {
              const mm = this._internalAbstractMeshDataInfo._positions || [],
                Tm = mm.length;
              if (mm.length = fm.length / 3, Tm < mm.length)
                for (let fm = Tm; fm < mm.length; fm++) mm[fm] = new am.p;
              for (let hm = 0, Am = 0; hm < mm.length; hm++, Am += 3) mm[hm].Z8(fm[Am], fm[Am + 1], fm[Am + 2]);
              this._internalAbstractMeshDataInfo._positions = mm
            }
            return fm
          }
          getNormalsData() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: mm,
              applyMorph: Tm,
              updatePositionsArray: !1
            }, null, xm.m.NormalKind)
          }
          uB() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: mm,
              applyMorph: Tm,
              updatePositionsArray: !1
            }, fm, xm.m.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Rm.b(am.p.Zero(), am.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(mm) {
            if (!this.jK) return this;
            const Tm = this.jK.length;
            for (let fm = 0; fm < Tm; fm++) {
              const hm = this.jK[fm];
              (Tm > 1 || !hm.IsGlobal) && hm.updateBoundingInfo(mm)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.mY || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(mm) {
            return this.DH().isInFrustum(mm, this.cullingStrategy)
          }
          isCompletelyInFrustum(mm) {
            return this.DH().isCompletelyInFrustum(mm)
          }
          vhm(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              fm = arguments.length > 2 ? arguments[2] : void 0;
            const hm = this.DH(),
              Am = mm.DH();
            if (hm.intersects(Am, Tm)) return !0;
            if (fm)
              for (const am of this.getChildMeshes())
                if (am.vhm(mm, Tm, !0)) return !0;
            return !1
          }
          intersectsPoint(mm) {
            return this.DH().intersectsPoint(mm)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(mm) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = mm
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(mm) {
            let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const fm = this.wG().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = fm.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, fm.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, mm, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Tm), this
          }
          _collideForSubMesh(mm, Tm, fm) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!mm._lastColliderWorldVertices || !mm._lastColliderTransformMatrix.equals(Tm)) {
              mm._lastColliderTransformMatrix = Tm.clone(), mm._lastColliderWorldVertices = [], mm._trianglePlanes = [];
              const fm = mm.verticesStart,
                hm = mm.verticesStart + mm.verticesCount;
              for (let Am = fm; Am < hm; Am++) mm._lastColliderWorldVertices.push(am.p.TransformCoordinates(this._positions[Am], Tm))
            }
            return fm._collide(mm._trianglePlanes, mm._lastColliderWorldVertices, this.xhm(), mm.indexStart, mm.indexStart + mm.indexCount, mm.verticesStart, !!mm.TY(), this, this._shouldConvertRHS(), 7 === mm.TY()?.fillMode), this
          }
          _processCollisionsForSubMeshes(mm, Tm) {
            const fm = this._scene.getCollidingSubMeshCandidates(this, mm),
              hm = fm.length;
            for (let Am = 0; Am < hm; Am++) {
              const am = fm.data[Am];
              hm > 1 && !am._checkCollision(mm) || this._collideForSubMesh(am, Tm, mm)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(mm) {
            if (!this.DH()._checkCollision(mm)) return this;
            const Tm = am.j.Matrix[0],
              fm = am.j.Matrix[1];
            return am.e.ScalingToRef(1 / mm._radius.x, 1 / mm._radius.y, 1 / mm._radius.z, Tm), this.worldMatrixFromCache.multiplyToRef(Tm, fm), this._processCollisionsForSubMeshes(mm, fm), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(mm, Tm, fm) {
            let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Am = arguments.length > 4 ? arguments[4] : void 0,
              xm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const wm = new im.e,
              Dm = this.getClassName(),
              Rm = "InstancedLinesMesh" === Dm || "LinesMesh" === Dm || "GreasedLineMesh" === Dm ? this.intersectionThreshold : 0,
              pm = this.DH();
            if (!this.jK) return wm;
            if (!xm && (!mm.intersectsSphere(pm.Shm, Rm) || !mm.intersectsBox(pm.boundingBox, Rm))) return wm;
            if (hm) return wm.hit = !xm, wm.pickedMesh = xm ? null : this, wm.distance = xm ? 0 : am.p.Distance(mm.origin, pm.Shm.center), wm.subMeshId = 0, wm;
            if (!this._generatePointsArray()) return wm;
            let Em = null;
            const om = this._scene.getIntersectingSubMeshCandidates(this, mm),
              Om = om.length;
            let Ym = !1;
            for (let am = 0; am < Om; am++) {
              const mm = om.data[am].TY();
              if (mm && (7 == mm.fillMode || 0 == mm.fillMode || 1 == mm.fillMode || 2 == mm.fillMode || 4 == mm.fillMode)) {
                Ym = !0;
                break
              }
            }
            if (!Ym) return wm.hit = !0, wm.pickedMesh = this, wm.distance = am.p.Distance(mm.origin, pm.Shm.center), wm.subMeshId = -1, wm;
            for (let am = 0; am < Om; am++) {
              const hm = om.data[am];
              if (Om > 1 && !xm && !hm.canIntersects(mm)) continue;
              const Am = hm.intersects(mm, this._positions, this.xhm(), Tm, fm);
              if (Am && (Tm || !Em || Am.distance < Em.distance) && (Em = Am, Em.subMeshId = hm._id, Em._internalSubMeshId = am, Tm)) break
            }
            if (Em) {
              const Tm = Am ?? this.getWorldMatrix(),
                fm = am.j.WO[0],
                hm = am.j.WO[1];
              am.p.TransformCoordinatesToRef(mm.origin, Tm, fm), mm.direction.scaleToRef(Em.distance, hm);
              const xm = am.p.TransformNormal(hm, Tm).addInPlace(fm);
              return wm.hit = !0, wm.distance = am.p.Distance(fm, xm), wm.pickedPoint = xm, wm.pickedMesh = this, wm.bu = Em.bu || 0, wm.bv = Em.bv || 0, wm.subMeshFaceId = Em.faceId, wm.faceId = Em.faceId + om.data[Em._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), wm.subMeshId = Em.subMeshId, wm
            }
            return wm
          }
          clone(mm, Tm, fm) {
            return null
          }
          releaseSubMeshes() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.jK)
              for (; this.jK.length;) this.jK[0].dispose(mm);
            else this.jK = [];
            return this
          }
          dispose(mm) {
            let Tm, fm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const hm = this.wG();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), hm.freeActiveMeshes(), hm.freeRenderingGroups(), hm.renderingManager.maintainStateBetweenFrames && hm.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((mm => mm !== this && mm.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Tm = 0; Tm < this._intersectionsInProgress.length; Tm++) {
              const mm = this._intersectionsInProgress[Tm],
                fm = mm._intersectionsInProgress.indexOf(this);
              mm._intersectionsInProgress.splice(fm, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Am = hm.lights;
            for (const xm of Am) {
              let mm = xm.includedOnlyMeshes.indexOf(this); - 1 !== mm && xm.includedOnlyMeshes.splice(mm, 1), mm = xm.excludedMeshes.indexOf(this), -1 !== mm && xm.excludedMeshes.splice(mm, 1);
              const Tm = xm.getShadowGenerators();
              if (Tm) {
                const fm = Tm.values();
                for (let Tm = fm.next(); !0 !== Tm.done; Tm = fm.next()) {
                  const fm = Tm.value.getShadowMap();
                  fm && fm.renderList && (mm = fm.renderList.indexOf(this), -1 !== mm && fm.renderList.splice(mm, 1))
                }
              }
            }
            this.releaseSubMeshes(hm._isDisposing);
            const am = hm.dO();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, am.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), am.wipeCaches(), hm.yG(this), this._parentContainer) {
              const mm = this._parentContainer.meshes.indexOf(this);
              mm > -1 && this._parentContainer.meshes.splice(mm, 1), this._parentContainer = null
            }
            if (fm && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !mm)
              for (Tm = 0; Tm < hm.VK.length; Tm++) hm.VK[Tm].emitter === this && (hm.VK[Tm].dispose(), Tm--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(mm, fm)
          }
          _initFacetData() {
            const mm = this._internalAbstractMeshDataInfo._facetData;
            mm.facetNormals || (mm.facetNormals = []), mm.facetPositions || (mm.facetPositions = []), mm.facetPartitioning || (mm.facetPartitioning = new Array), mm.facetNb = this.xhm().length / 3 | 0, mm.partitioningSubdivisions = mm.partitioningSubdivisions ? mm.partitioningSubdivisions : 10, mm.partitioningBBoxRatio = mm.partitioningBBoxRatio ? mm.partitioningBBoxRatio : 1.01;
            for (let Tm = 0; Tm < mm.facetNb; Tm++) mm.facetNormals[Tm] = am.p.Zero(), mm.facetPositions[Tm] = am.p.Zero();
            return mm.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const mm = this._internalAbstractMeshDataInfo._facetData;
            mm.facetDataEnabled || this._initFacetData();
            const Tm = this.getVerticesData(xm.m.PositionKind),
              fm = this.xhm(),
              hm = this.getVerticesData(xm.m.NormalKind)?.slice(),
              Am = this.DH();
            if (mm.facetDepthSort && !mm.facetDepthSortEnabled) {
              if (mm.facetDepthSortEnabled = !0, fm instanceof Uint16Array) mm.depthSortedIndices = new Uint16Array(fm);
              else if (fm instanceof Uint32Array) mm.depthSortedIndices = new Uint32Array(fm);
              else {
                let Tm = !1;
                for (let mm = 0; mm < fm.length; mm++)
                  if (fm[mm] > 65535) {
                    Tm = !0;
                    break
                  } mm.depthSortedIndices = Tm ? new Uint32Array(fm) : new Uint16Array(fm)
              }
              if (mm.facetDepthSortFunction = function(mm, Tm) {
                  return Tm.sqDistance - mm.sqDistance
                }, !mm.facetDepthSortFrom) {
                const Tm = this.wG().activeCamera;
                mm.facetDepthSortFrom = Tm ? Tm.position : am.p.Zero()
              }
              mm.depthSortedFacets = [];
              for (let Tm = 0; Tm < mm.facetNb; Tm++) {
                const fm = {
                  ind: 3 * Tm,
                  sqDistance: 0
                };
                mm.depthSortedFacets.push(fm)
              }
              mm.invertedMatrix = am.e.Identity(), mm.facetDepthSortOrigin = am.p.Zero()
            }
            mm.bbSize.x = Am.maximum.x - Am.minimum.x > Km.c ? Am.maximum.x - Am.minimum.x : Km.c, mm.bbSize.y = Am.maximum.y - Am.minimum.y > Km.c ? Am.maximum.y - Am.minimum.y : Km.c, mm.bbSize.z = Am.maximum.z - Am.minimum.z > Km.c ? Am.maximum.z - Am.minimum.z : Km.c;
            let Dm = mm.bbSize.x > mm.bbSize.y ? mm.bbSize.x : mm.bbSize.y;
            if (Dm = Dm > mm.bbSize.z ? Dm : mm.bbSize.z, mm.subDiv.max = mm.partitioningSubdivisions, mm.subDiv.X = Math.floor(mm.subDiv.max * mm.bbSize.x / Dm), mm.subDiv.Y = Math.floor(mm.subDiv.max * mm.bbSize.y / Dm), mm.subDiv.Z = Math.floor(mm.subDiv.max * mm.bbSize.z / Dm), mm.subDiv.X = mm.subDiv.X < 1 ? 1 : mm.subDiv.X, mm.subDiv.Y = mm.subDiv.Y < 1 ? 1 : mm.subDiv.Y, mm.subDiv.Z = mm.subDiv.Z < 1 ? 1 : mm.subDiv.Z, mm.facetParameters.facetNormals = this.getFacetLocalNormals(), mm.facetParameters.facetPositions = this.getFacetLocalPositions(), mm.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), mm.facetParameters.bInfo = Am, mm.facetParameters.bbSize = mm.bbSize, mm.facetParameters.subDiv = mm.subDiv, mm.facetParameters.ratio = this.partitioningBBoxRatio, mm.facetParameters.depthSort = mm.facetDepthSort, mm.facetDepthSort && mm.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(mm.invertedMatrix), am.p.TransformCoordinatesToRef(mm.facetDepthSortFrom, mm.invertedMatrix, mm.facetDepthSortOrigin), mm.facetParameters.distanceTo = mm.facetDepthSortOrigin), mm.facetParameters.depthSortedFacets = mm.depthSortedFacets, hm && wm.c.ComputeNormals(Tm, fm, hm, mm.facetParameters), mm.facetDepthSort && mm.facetDepthSortEnabled) {
              mm.depthSortedFacets.sort(mm.facetDepthSortFunction);
              const Tm = mm.depthSortedIndices.length / 3 | 0;
              for (let hm = 0; hm < Tm; hm++) {
                const Tm = mm.depthSortedFacets[hm].ind;
                mm.depthSortedIndices[3 * hm] = fm[Tm], mm.depthSortedIndices[3 * hm + 1] = fm[Tm + 1], mm.depthSortedIndices[3 * hm + 2] = fm[Tm + 2]
              }
              this.updateIndices(mm.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const mm = this._internalAbstractMeshDataInfo._facetData;
            return mm.facetNormals || this.updateFacetData(), mm.facetNormals
          }
          getFacetLocalPositions() {
            const mm = this._internalAbstractMeshDataInfo._facetData;
            return mm.facetPositions || this.updateFacetData(), mm.facetPositions
          }
          getFacetLocalPartitioning() {
            const mm = this._internalAbstractMeshDataInfo._facetData;
            return mm.facetPartitioning || this.updateFacetData(), mm.facetPartitioning
          }
          getFacetPosition(mm) {
            const Tm = am.p.Zero();
            return this.getFacetPositionToRef(mm, Tm), Tm
          }
          getFacetPositionToRef(mm, Tm) {
            const fm = this.getFacetLocalPositions()[mm],
              hm = this.getWorldMatrix();
            return am.p.TransformCoordinatesToRef(fm, hm, Tm), this
          }
          getFacetNormal(mm) {
            const Tm = am.p.Zero();
            return this.getFacetNormalToRef(mm, Tm), Tm
          }
          getFacetNormalToRef(mm, Tm) {
            const fm = this.getFacetLocalNormals()[mm];
            return am.p.TransformNormalToRef(fm, this.getWorldMatrix(), Tm), this
          }
          getFacetsAtLocalCoordinates(mm, Tm, fm) {
            const hm = this.DH(),
              Am = this._internalAbstractMeshDataInfo._facetData,
              am = Math.floor((mm - hm.minimum.x * Am.partitioningBBoxRatio) * Am.subDiv.X * Am.partitioningBBoxRatio / Am.bbSize.x),
              xm = Math.floor((Tm - hm.minimum.y * Am.partitioningBBoxRatio) * Am.subDiv.Y * Am.partitioningBBoxRatio / Am.bbSize.y),
              wm = Math.floor((fm - hm.minimum.z * Am.partitioningBBoxRatio) * Am.subDiv.Z * Am.partitioningBBoxRatio / Am.bbSize.z);
            return am < 0 || am > Am.subDiv.max || xm < 0 || xm > Am.subDiv.max || wm < 0 || wm > Am.subDiv.max ? null : Am.facetPartitioning[am + Am.subDiv.max * xm + Am.subDiv.max * Am.subDiv.max * wm]
          }
          getClosestFacetAtCoordinates(mm, Tm, fm, hm) {
            let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              xm = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const wm = this.getWorldMatrix(),
              Dm = am.j.Matrix[5];
            wm.invertToRef(Dm);
            const im = am.j.WO[8];
            am.p.TransformCoordinatesFromFloatsToRef(mm, Tm, fm, Dm, im);
            const Rm = this.getClosestFacetAtLocalCoordinates(im.x, im.y, im.z, hm, Am, xm);
            return hm && am.p.TransformCoordinatesFromFloatsToRef(hm.x, hm.y, hm.z, wm, hm), Rm
          }
          getClosestFacetAtLocalCoordinates(mm, Tm, fm, hm) {
            let Am, am, xm, wm, Dm, im, Rm, pm, Em = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              om = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Om = null;
            const Ym = this.getFacetLocalPositions(),
              qm = this.getFacetLocalNormals(),
              jm = this.getFacetsAtLocalCoordinates(mm, Tm, fm);
            if (!jm) return null;
            let Vm, Im, Km, Qm, nm = Number.MAX_VALUE;
            for (let Jm = 0; Jm < jm.length; Jm++) Im = jm[Jm], Km = qm[Im], Qm = Ym[Im], wm = (mm - Qm.x) * Km.x + (Tm - Qm.y) * Km.y + (fm - Qm.z) * Km.z, (!Em || Em && om && wm >= 0 || Em && !om && wm <= 0) && (wm = Km.x * Qm.x + Km.y * Qm.y + Km.z * Qm.z, Dm = -(Km.x * mm + Km.y * Tm + Km.z * fm - wm) / (Km.x * Km.x + Km.y * Km.y + Km.z * Km.z), im = mm + Km.x * Dm, Rm = Tm + Km.y * Dm, pm = fm + Km.z * Dm, Am = im - mm, am = Rm - Tm, xm = pm - fm, Vm = Am * Am + am * am + xm * xm, Vm < nm && (nm = Vm, Om = Im, hm && (hm.x = im, hm.y = Rm, hm.z = pm)));
            return Om
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const mm = this._internalAbstractMeshDataInfo._facetData;
            return mm.facetDataEnabled && (mm.facetDataEnabled = !1, mm.facetPositions = [], mm.facetNormals = [], mm.facetPartitioning = new Array, mm.facetParameters = {}, mm.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(mm, Tm) {
            return this
          }
          createNormals(mm) {
            const Tm = this.getVerticesData(xm.m.PositionKind),
              fm = this.xhm();
            let hm;
            return hm = this.isVerticesDataPresent(xm.m.NormalKind) ? this.getVerticesData(xm.m.NormalKind) : [], wm.c.ComputeNormals(Tm, fm, hm, {
              useRightHandedSystem: this.wG().useRightHandedSystem
            }), this.setVerticesData(xm.m.NormalKind, hm, mm), this
          }
          async optimizeIndicesAsync() {
            const mm = this.xhm();
            if (!mm) return this;
            const {
              OptimizeIndices: Tm
            } = await fm.e(351).then((() => fm(42584)));
            return Tm(mm), this.setIndices(mm, this.getTotalVertices()), this
          }
          alignWithNormal(mm, Tm) {
            Tm || (Tm = Qm.e.Y);
            const fm = am.j.WO[0],
              hm = am.j.WO[1];
            return am.p.CrossToRef(Tm, mm, hm), am.p.CrossToRef(mm, hm, fm), this.rotationQuaternion ? am.h.RotationQuaternionFromAxisToRef(fm, mm, hm, this.rotationQuaternion) : am.p.RotationFromAxisToRef(fm, mm, hm, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, qm.i)("EdgesRenderer")
          }
          enableEdgesRendering(mm, Tm, fm) {
            throw (0, qm.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.VK.filter((mm => mm.emitter === this))
          }
        }, (() => {
          const fm = "function" === typeof Symbol && Symbol.metadata ? Object.create(Em[Symbol.metadata] ?? null) : void 0;
          Tm = [Jm.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, hm.g)(mm, null, Tm, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: mm => "_ApplySkeleton" in mm,
              get: mm => mm._ApplySkeleton
            },
            metadata: fm
          }, null, om), fm && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fm
          })
        })(), mm.OCCLUSION_TYPE_NONE = ((0, hm.i)(mm, om), 0), mm.OCCLUSION_TYPE_OPTIMISTIC = 1, mm.OCCLUSION_TYPE_STRICT = 2, mm.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, mm.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, mm.CULLINGSTRATEGY_STANDARD = 0, mm.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, mm.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, mm.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, mm.DefaultIsPickable = !0, mm
      })(),
      Gm = !1;

    function Xm() {
      Gm || (Gm = !0, (0, zm.d)("BABYLON.AbstractMesh", Nm))
    }(om = Nm.prototype).createOrUpdateSubmeshesOctree ?? (om.createOrUpdateSubmeshesOctree = (0, qm.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (Om = Nm.prototype).getPhysicsImpostor ?? (Om.getPhysicsImpostor = (0, qm.f)("AbstractMesh", "getPhysicsImpostor")), (Ym = Nm.prototype).setPhysicsLinkWith ?? (Ym.setPhysicsLinkWith = (0, qm.f)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Nm.prototype, "occlusionRetryCount") || Object.defineProperty(Nm.prototype, "occlusionRetryCount", (0, qm.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Nm.prototype, "occlusionType") || Object.defineProperty(Nm.prototype, "occlusionType", (0, qm.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Nm.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Nm.prototype, "occlusionQueryAlgorithmType", (0, qm.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Nm.prototype, "isOccluded") || Object.defineProperty(Nm.prototype, "isOccluded", (0, qm.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Nm.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Nm.prototype, "isOcclusionQueryInProgress", (0, qm.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Nm.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Nm.prototype, "forceRenderingWhenOccluded", (0, qm.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Nm.prototype, "occlusionForRenderPassId") || Object.defineProperty(Nm.prototype, "occlusionForRenderPassId", (0, qm.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Nm.prototype, "decalMap") || Object.defineProperty(Nm.prototype, "decalMap", (0, qm.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Nm.prototype, "RP") || Object.defineProperty(Nm.prototype, "RP", (0, qm.e)("AbstractMesh", "RP")), Object.getOwnPropertyDescriptor(Nm.prototype, "physicsImpostor") || Object.defineProperty(Nm.prototype, "physicsImpostor", (0, qm.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Nm.prototype, "showBoundingBox") || Object.defineProperty(Nm.prototype, "showBoundingBox", (0, qm.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Nm.prototype, "edgesRenderer") || Object.defineProperty(Nm.prototype, "edgesRenderer", (0, qm.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Nm.prototype, "renderOutline") || Object.defineProperty(Nm.prototype, "renderOutline", (0, qm.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Nm.prototype, "renderOverlay") || Object.defineProperty(Nm.prototype, "renderOverlay", (0, qm.e)("AbstractMesh", "renderOverlay"))
  },
  40529: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => jm
    });
    var hm = fm(37185),
      Am = fm(37336),
      am = fm(40527),
      xm = fm(40251),
      wm = fm(40391),
      Dm = fm(40538),
      im = fm(40404),
      Rm = fm(40203),
      pm = fm(38766),
      Em = fm(40138),
      om = fm(40416),
      Om = fm(37201),
      Ym = fm(40540),
      qm = fm(40180);
    class jm {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(mm) {
        this._boundingBias ? this._boundingBias.ZZ(mm) : this._boundingBias = mm.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(mm) {
        const Tm = new jm(jm.RandomId(), mm.wG());
        return Tm.applyToMesh(mm), Tm
      }
      get meshes() {
        return this._meshes
      }
      constructor(mm, Tm, fm) {
        let Am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new hm.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new hm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Tm || Om.c.LastCreatedScene, this._scene && (this.id = mm, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.dO(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Am, null !== xm && (this._totalVertices = xm), fm ? this.setAllVerticesData(fm, Am) : null === xm && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), am && (this.applyToMesh(am), am.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      wG() {
        return this._scene
      }
      dO() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let mm = 0; mm < this._meshes.length; mm++)
          if (!this._meshes[mm].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const mm = new Set;
        for (const Tm in this._vertexBuffers) mm.add(this._vertexBuffers[Tm].getWrapperBuffer());
        mm.forEach((mm => {
          mm._rebuild()
        }))
      }
      setAllVerticesData(mm, Tm) {
        mm.applyToGeometry(this, Tm), this._notifyUpdate()
      }
      setVerticesData(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 ? arguments[3] : void 0;
        fm && Array.isArray(Tm) && (Tm = new Float32Array(Tm));
        const Am = new xm.m(this._engine, Tm, mm, {
          updatable: fm,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: hm,
          label: "Geometry_" + this.id + "_" + mm
        });
        this.setVerticesBuffer(Am)
      }
      removeVerticesData(mm) {
        this._vertexBuffers[mm] && (this._vertexBuffers[mm].dispose(), delete this._vertexBuffers[mm]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Am = mm.getKind();
        this._vertexBuffers[Am] && fm && this._vertexBuffers[Am].dispose(), mm._buffer && mm._ownsBuffer && mm._buffer._increaseReferences(), this._vertexBuffers[Am] = mm;
        const am = this._meshes,
          wm = am.length;
        if (Am === xm.m.PositionKind) {
          this._totalVertices = Tm ?? mm._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : mm.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const fm = this._extend && this._extend.minimum || new hm.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Am = this._extend && this._extend.maximum || new hm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let mm = 0; mm < wm; mm++) {
            const Tm = am[mm];
            Tm.buildBoundingInfo(fm, Am), Tm._createGlobalSubMesh(Tm.isUnIndexed), Tm.computeWorldMatrix(!0), Tm.synchronizeInstances()
          }
        }
        this._notifyUpdate(Am)
      }
      updateVerticesDataDirectly(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Am = this.getVertexBuffer(mm);
        Am && (Am.updateDirectly(Tm, fm, hm), this._notifyUpdate(mm))
      }
      updateVerticesData(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = this.getVertexBuffer(mm);
        hm && (hm.update(Tm), mm === xm.m.PositionKind && this._updateBoundingInfo(fm, Tm), this._notifyUpdate(mm))
      }
      _updateBoundingInfo(mm, Tm) {
        if (mm && this._updateExtend(Tm), this._resetPointsArrayCache(), mm) {
          const mm = this._meshes;
          for (const Tm of mm) {
            Tm.hasBoundingInfo ? Tm.DH().reConstruct(this._extend.minimum, this._extend.maximum) : Tm.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const mm = Tm.jK;
            for (const Tm of mm) Tm.refreshBoundingInfo()
          }
        }
      }
      _bind(mm, Tm, fm, hm) {
        if (!mm) return;
        void 0 === Tm && (Tm = this._indexBuffer);
        const Am = this.getVertexBuffers();
        if (!Am) return;
        if (Tm != this._indexBuffer || !this._vertexArrayObjects && !hm) return void this._engine.bindBuffers(Am, Tm, mm, fm);
        const am = hm || this._vertexArrayObjects,
          xm = this._engine;
        am[mm.key] || (am[mm.key] = xm.recordVertexArrayObject(Am, Tm, mm, fm)), xm.bindVertexArrayObject(am[mm.key], Tm)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(mm, Tm, fm) {
        const hm = this.getVertexBuffer(mm);
        return hm ? hm.getFloatData(this._totalVertices, fm || Tm && 1 !== this._meshes.length) : null
      }
      copyVerticesData(mm, Tm) {
        const fm = this.getVertexBuffer(mm);
        if (!fm) return;
        Tm[mm] || (Tm[mm] = new Float32Array(this._totalVertices * fm.getSize()));
        const hm = fm.getData();
        hm && (0, qm.f)(hm, fm.getSize(), fm.type, fm.byteOffset, fm.byteStride, fm.normalized, this._totalVertices, Tm[mm])
      }
      isVertexBufferUpdatable(mm) {
        const Tm = this._vertexBuffers[mm];
        return !!Tm && Tm.isUpdatable()
      }
      getVertexBuffer(mm) {
        return this.isReady() ? this._vertexBuffers[mm] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(mm) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[mm] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(mm)
      }
      getVerticesDataKinds() {
        const mm = [];
        let Tm;
        if (!this._vertexBuffers && this._delayInfo)
          for (Tm in this._delayInfo) mm.push(Tm);
        else
          for (Tm in this._vertexBuffers) mm.push(Tm);
        return mm
      }
      updateIndices(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const hm = mm.length !== this._indices.length;
            if (fm || (this._indices = mm.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, mm, Tm), hm)
              for (const mm of this._meshes) mm._createGlobalSubMesh(!0)
          } else this.setIndices(mm, null, !0)
      }
      setIndexBuffer(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = mm, this._totalVertices = Tm, this._totalIndices = fm, mm.is32Bits = null === hm ? Tm > 65535 : hm;
        for (const Am of this._meshes) Am._createGlobalSubMesh(!0), Am.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = mm, this._indexBufferIsUpdatable = fm, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, fm, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Tm && (this._totalVertices = Tm);
        for (const Am of this._meshes) Am._createGlobalSubMesh(!hm), Am.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      xhm(mm, Tm) {
        if (!this.isReady()) return null;
        const fm = this._indices;
        return Tm || mm && 1 !== this._meshes.length ? fm.slice() : fm
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        mm && this._vertexArrayObjects && this._vertexArrayObjects[mm.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[mm.key]), delete this._vertexArrayObjects[mm.key])
      }
      releaseForMesh(mm, Tm) {
        const fm = this._meshes,
          hm = fm.indexOf(mm); - 1 !== hm && (fm.splice(hm, 1), this._vertexArrayObjects && mm._invalidateInstanceVertexArrayObject(), mm._geometry = null, 0 === fm.length && Tm && this.dispose())
      }
      applyToMesh(mm) {
        if (mm._geometry === this) return;
        const Tm = mm._geometry;
        Tm && Tm.releaseForMesh(mm), this._vertexArrayObjects && mm._invalidateInstanceVertexArrayObject();
        const fm = this._meshes;
        mm._geometry = this, mm._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), fm.push(mm), this.isReady() ? this._applyToMesh(mm) : this._boundingInfo && mm.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!mm && (mm = this.getVerticesData(xm.m.PositionKind), !mm)) return;
          this._extend = (0, om.g)(mm, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(mm) {
        for (const Tm in this._vertexBuffers) {
          const fm = this._vertexBuffers[Tm];
          fm._buffer.getBuffer() || fm.create(), Tm === xm.m.PositionKind && (this._extend || this._updateExtend(), mm.buildBoundingInfo(this._extend.minimum, this._extend.maximum), mm._createGlobalSubMesh(mm.isUnIndexed), mm._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), mm._syncGeometryWithMorphTargetManager(), mm.synchronizeInstances()
      }
      _notifyUpdate(mm) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, mm), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const Tm of this._meshes) Tm._markSubMeshesAsAttributesDirty()
      }
      load(mm, Tm) {
        2 !== this.delayLoadState && (this.isReady() ? Tm && Tm() : (this.delayLoadState = 2, this._queueLoad(mm, Tm)))
      }
      _queueLoad(mm, Tm) {
        this.delayLoadingFile && (mm.addPendingData(this), (async () => {
          try {
            const fm = await mm._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void mm.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(fm), this), this.delayLoadState = 1, this._delayInfo = [], mm.removePendingData(this);
            const hm = this._meshes,
              Am = hm.length;
            for (let mm = 0; mm < Am; mm++) this._applyToMesh(hm[mm]);
            Tm && Tm()
          } catch (fm) {
            mm.removePendingData(this), mm.aJ || pm.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${fm}`)
          }
        })())
      }
      toLeftHanded() {
        const mm = this.xhm(!1);
        if (null != mm && mm.length > 0) {
          for (let Tm = 0; Tm < mm.length; Tm += 3) {
            const fm = mm[Tm + 0];
            mm[Tm + 0] = mm[Tm + 2], mm[Tm + 2] = fm
          }
          this.setIndices(mm)
        }
        const Tm = this.getVerticesData(xm.m.PositionKind, !1);
        if (null != Tm && Tm.length > 0) {
          for (let mm = 0; mm < Tm.length; mm += 3) Tm[mm + 2] = -Tm[mm + 2];
          this.setVerticesData(xm.m.PositionKind, Tm, !1)
        }
        const fm = this.getVerticesData(xm.m.NormalKind, !1);
        if (null != fm && fm.length > 0) {
          for (let mm = 0; mm < fm.length; mm += 3) fm[mm + 2] = -fm[mm + 2];
          this.setVerticesData(xm.m.NormalKind, fm, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const mm = this.getVerticesData(xm.m.PositionKind);
        if (!mm || 0 === mm.length) return !1;
        for (let Tm = 3 * this._positionsCache.length, fm = this._positionsCache.length; Tm < mm.length; Tm += 3, ++fm) this._positionsCache[fm] = hm.p.FromArray(mm, Tm);
        for (let Tm = 0, fm = 0; Tm < mm.length; Tm += 3, ++fm) this._positionsCache[fm].set(mm[0 + Tm], mm[1 + Tm], mm[2 + Tm]);
        return this._positionsCache.length = mm.length / 3, this._positions = this._positionsCache, !0
      }
      aJ() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const fm in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[fm]);
          this._vertexArrayObjects = {};
          const mm = this._meshes,
            Tm = mm.length;
          for (let fm = 0; fm < Tm; fm++) mm[fm]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const mm = this._meshes,
          Tm = mm.length;
        let fm;
        for (fm = 0; fm < Tm; fm++) this.releaseForMesh(mm[fm]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const hm in this._vertexBuffers) this._vertexBuffers[hm].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const mm = this._parentContainer.geometries.indexOf(this);
          mm > -1 && this._parentContainer.geometries.splice(mm, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(mm) {
        const Tm = new jm(mm, this._scene),
          fm = this.xhm(void 0, !0);
        fm && Tm.setIndices(fm);
        let hm, Am = !1;
        for (hm in this._vertexBuffers) {
          const mm = this.getVertexBuffer(hm),
            fm = mm.getData();
          if (!fm) continue;
          const am = mm.isUpdatable(),
            wm = mm.getSize(),
            {
              type: Dm,
              byteOffset: im,
              byteStride: Rm,
              normalized: pm
            } = mm;
          Am = Am || am;
          let Em = this._totalVertices;
          if (mm.getIsInstanced()) {
            let mm;
            mm = fm instanceof Array ? 4 * fm.length : fm.byteLength, Em = mm / Rm
          }
          const om = (0, qm.u)(fm, wm, Dm, im, Rm, Em, !0),
            Om = new xm.m(this._engine, om, hm, {
              updatable: am,
              useBytes: !1,
              stride: wm,
              size: wm,
              offset: 0,
              type: Dm,
              normalized: pm,
              takeBufferOwnership: !0,
              instanced: mm.getIsInstanced()
            });
          Tm.setVerticesBuffer(Om, Em)
        }
        for (hm in Tm._updatable = Am, Tm.delayLoadState = this.delayLoadState, Tm.delayLoadingFile = this.delayLoadingFile, Tm._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Tm._delayInfo = Tm._delayInfo || [], Tm._delayInfo.push(hm);
        return Tm._boundingInfo = new im.b(this._extend.minimum, this._extend.maximum), Tm
      }
      serialize() {
        const mm = {};
        return mm.id = this.id, mm.uniqueId = this.uniqueId, mm.updatable = this._updatable, Em.e && Em.e.HasTags(this) && (mm.tags = Em.e.GetTags(this)), mm
      }
      _toNumberArray(mm) {
        return Array.isArray(mm) ? mm : Array.prototype.slice.call(mm)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const mm in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, mm) && (this._vertexBuffers[mm]._buffer._data = null)
      }
      serializeVerticeData() {
        const mm = this.serialize();
        return this.isVerticesDataPresent(xm.m.PositionKind) && (mm.positions = this._toNumberArray(this.getVerticesData(xm.m.PositionKind)), this.isVertexBufferUpdatable(xm.m.PositionKind) && (mm.positionsUpdatable = !0)), this.isVerticesDataPresent(xm.m.NormalKind) && (mm.normals = this._toNumberArray(this.getVerticesData(xm.m.NormalKind)), this.isVertexBufferUpdatable(xm.m.NormalKind) && (mm.normalsUpdatable = !0)), this.isVerticesDataPresent(xm.m.TangentKind) && (mm.tangents = this._toNumberArray(this.getVerticesData(xm.m.TangentKind)), this.isVertexBufferUpdatable(xm.m.TangentKind) && (mm.tangentsUpdatable = !0)), this.isVerticesDataPresent(xm.m.UVKind) && (mm.uvs = this._toNumberArray(this.getVerticesData(xm.m.UVKind)), this.isVertexBufferUpdatable(xm.m.UVKind) && (mm.uvsUpdatable = !0)), this.isVerticesDataPresent(xm.m.UV2Kind) && (mm.uvs2 = this._toNumberArray(this.getVerticesData(xm.m.UV2Kind)), this.isVertexBufferUpdatable(xm.m.UV2Kind) && (mm.uvs2Updatable = !0)), this.isVerticesDataPresent(xm.m.UV3Kind) && (mm.uvs3 = this._toNumberArray(this.getVerticesData(xm.m.UV3Kind)), this.isVertexBufferUpdatable(xm.m.UV3Kind) && (mm.uvs3Updatable = !0)), this.isVerticesDataPresent(xm.m.UV4Kind) && (mm.uvs4 = this._toNumberArray(this.getVerticesData(xm.m.UV4Kind)), this.isVertexBufferUpdatable(xm.m.UV4Kind) && (mm.uvs4Updatable = !0)), this.isVerticesDataPresent(xm.m.UV5Kind) && (mm.uvs5 = this._toNumberArray(this.getVerticesData(xm.m.UV5Kind)), this.isVertexBufferUpdatable(xm.m.UV5Kind) && (mm.uvs5Updatable = !0)), this.isVerticesDataPresent(xm.m.UV6Kind) && (mm.uvs6 = this._toNumberArray(this.getVerticesData(xm.m.UV6Kind)), this.isVertexBufferUpdatable(xm.m.UV6Kind) && (mm.uvs6Updatable = !0)), this.isVerticesDataPresent(xm.m.ColorKind) && (mm.colors = this._toNumberArray(this.getVerticesData(xm.m.ColorKind)), this.isVertexBufferUpdatable(xm.m.ColorKind) && (mm.colorsUpdatable = !0)), this.isVerticesDataPresent(xm.m.MatricesIndicesKind) && (mm.matricesIndices = this._toNumberArray(this.getVerticesData(xm.m.MatricesIndicesKind)), mm.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(xm.m.MatricesIndicesKind) && (mm.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(xm.m.MatricesWeightsKind) && (mm.matricesWeights = this._toNumberArray(this.getVerticesData(xm.m.MatricesWeightsKind)), this.isVertexBufferUpdatable(xm.m.MatricesWeightsKind) && (mm.matricesWeightsUpdatable = !0)), mm.indices = this._toNumberArray(this.xhm()), mm
      }
      static ExtractFromMesh(mm, Tm) {
        const fm = mm._geometry;
        return fm ? fm.copy(Tm) : null
      }
      static RandomId() {
        return Rm.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(mm, Tm) {
        for (let fm = 0; fm < Tm.geometries.length; fm++)
          if (Tm.geometries[fm]._loadedUniqueId === mm) return Tm.geometries[fm];
        return null
      }
      static _ImportGeometry(mm, Tm) {
        const fm = Tm.wG(),
          hm = mm.geometryUniqueId,
          am = mm.geometryId;
        if (hm || am) {
          const mm = hm ? this._GetGeometryByLoadedUniqueId(hm, fm) : fm.getGeometryById(am);
          mm && mm.applyToMesh(Tm)
        } else if (mm instanceof ArrayBuffer) {
          const fm = Tm._binaryInfo;
          if (fm.positionsAttrDesc && fm.positionsAttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.positionsAttrDesc.offset, fm.positionsAttrDesc.count);
            Tm.setVerticesData(xm.m.PositionKind, hm, !1)
          }
          if (fm.normalsAttrDesc && fm.normalsAttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.normalsAttrDesc.offset, fm.normalsAttrDesc.count);
            Tm.setVerticesData(xm.m.NormalKind, hm, !1)
          }
          if (fm.tangetsAttrDesc && fm.tangetsAttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.tangetsAttrDesc.offset, fm.tangetsAttrDesc.count);
            Tm.setVerticesData(xm.m.TangentKind, hm, !1)
          }
          if (fm.uvsAttrDesc && fm.uvsAttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.uvsAttrDesc.offset, fm.uvsAttrDesc.count);
            if (Ym.c)
              for (let mm = 1; mm < hm.length; mm += 2) hm[mm] = 1 - hm[mm];
            Tm.setVerticesData(xm.m.UVKind, hm, !1)
          }
          if (fm.uvs2AttrDesc && fm.uvs2AttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.uvs2AttrDesc.offset, fm.uvs2AttrDesc.count);
            if (Ym.c)
              for (let mm = 1; mm < hm.length; mm += 2) hm[mm] = 1 - hm[mm];
            Tm.setVerticesData(xm.m.UV2Kind, hm, !1)
          }
          if (fm.uvs3AttrDesc && fm.uvs3AttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.uvs3AttrDesc.offset, fm.uvs3AttrDesc.count);
            if (Ym.c)
              for (let mm = 1; mm < hm.length; mm += 2) hm[mm] = 1 - hm[mm];
            Tm.setVerticesData(xm.m.UV3Kind, hm, !1)
          }
          if (fm.uvs4AttrDesc && fm.uvs4AttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.uvs4AttrDesc.offset, fm.uvs4AttrDesc.count);
            if (Ym.c)
              for (let mm = 1; mm < hm.length; mm += 2) hm[mm] = 1 - hm[mm];
            Tm.setVerticesData(xm.m.UV4Kind, hm, !1)
          }
          if (fm.uvs5AttrDesc && fm.uvs5AttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.uvs5AttrDesc.offset, fm.uvs5AttrDesc.count);
            if (Ym.c)
              for (let mm = 1; mm < hm.length; mm += 2) hm[mm] = 1 - hm[mm];
            Tm.setVerticesData(xm.m.UV5Kind, hm, !1)
          }
          if (fm.uvs6AttrDesc && fm.uvs6AttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.uvs6AttrDesc.offset, fm.uvs6AttrDesc.count);
            if (Ym.c)
              for (let mm = 1; mm < hm.length; mm += 2) hm[mm] = 1 - hm[mm];
            Tm.setVerticesData(xm.m.UV6Kind, hm, !1)
          }
          if (fm.colorsAttrDesc && fm.colorsAttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.colorsAttrDesc.offset, fm.colorsAttrDesc.count);
            Tm.setVerticesData(xm.m.ColorKind, hm, !1, fm.colorsAttrDesc.stride)
          }
          if (fm.matricesIndicesAttrDesc && fm.matricesIndicesAttrDesc.count > 0) {
            const hm = new Int32Array(mm, fm.matricesIndicesAttrDesc.offset, fm.matricesIndicesAttrDesc.count),
              Am = [];
            for (let mm = 0; mm < hm.length; mm++) {
              const Tm = hm[mm];
              Am.push(255 & Tm), Am.push((65280 & Tm) >> 8), Am.push((16711680 & Tm) >> 16), Am.push(Tm >> 24 & 255)
            }
            Tm.setVerticesData(xm.m.MatricesIndicesKind, Am, !1)
          }
          if (fm.matricesIndicesExtraAttrDesc && fm.matricesIndicesExtraAttrDesc.count > 0) {
            const hm = new Int32Array(mm, fm.matricesIndicesExtraAttrDesc.offset, fm.matricesIndicesExtraAttrDesc.count),
              Am = [];
            for (let mm = 0; mm < hm.length; mm++) {
              const Tm = hm[mm];
              Am.push(255 & Tm), Am.push((65280 & Tm) >> 8), Am.push((16711680 & Tm) >> 16), Am.push(Tm >> 24 & 255)
            }
            Tm.setVerticesData(xm.m.MatricesIndicesExtraKind, Am, !1)
          }
          if (fm.matricesWeightsAttrDesc && fm.matricesWeightsAttrDesc.count > 0) {
            const hm = new Float32Array(mm, fm.matricesWeightsAttrDesc.offset, fm.matricesWeightsAttrDesc.count);
            Tm.setVerticesData(xm.m.MatricesWeightsKind, hm, !1)
          }
          if (fm.indicesAttrDesc && fm.indicesAttrDesc.count > 0) {
            const hm = new Int32Array(mm, fm.indicesAttrDesc.offset, fm.indicesAttrDesc.count);
            Tm.setIndices(hm, null)
          }
          if (fm.subMeshesAttrDesc && fm.subMeshesAttrDesc.count > 0) {
            const hm = new Int32Array(mm, fm.subMeshesAttrDesc.offset, 5 * fm.subMeshesAttrDesc.count);
            Tm.jK = [];
            for (let mm = 0; mm < fm.subMeshesAttrDesc.count; mm++) {
              const fm = hm[5 * mm + 0],
                Am = hm[5 * mm + 1],
                am = hm[5 * mm + 2],
                xm = hm[5 * mm + 3],
                Dm = hm[5 * mm + 4];
              wm.e.AddToMesh(fm, Am, am, xm, Dm, Tm)
            }
          }
        } else if (mm.positions && mm.normals && mm.indices) {
          if (Tm.setVerticesData(xm.m.PositionKind, mm.positions, mm.positions._updatable || mm.positionsUpdatable), Tm.setVerticesData(xm.m.NormalKind, mm.normals, mm.normals._updatable || mm.normalsUpdatable), mm.tangents && Tm.setVerticesData(xm.m.TangentKind, mm.tangents, mm.tangents._updatable || mm.tangentsUpdatable), mm.uvs && Tm.setVerticesData(xm.m.UVKind, mm.uvs, mm.uvs._updatable || mm.uvsUpdatable), mm.uvs2 && Tm.setVerticesData(xm.m.UV2Kind, mm.uvs2, mm.uvs2._updatable || mm.uvs2Updatable), mm.uvs3 && Tm.setVerticesData(xm.m.UV3Kind, mm.uvs3, mm.uvs3._updatable || mm.uvs3Updatable), mm.uvs4 && Tm.setVerticesData(xm.m.UV4Kind, mm.uvs4, mm.uvs4._updatable || mm.uvs4Updatable), mm.uvs5 && Tm.setVerticesData(xm.m.UV5Kind, mm.uvs5, mm.uvs5._updatable || mm.uvs5Updatable), mm.uvs6 && Tm.setVerticesData(xm.m.UV6Kind, mm.uvs6, mm.uvs6._updatable || mm.uvs6Updatable), mm.colors && Tm.setVerticesData(xm.m.ColorKind, Am.c.CheckColors4(mm.colors, mm.positions.length / 3), mm.colors._updatable), mm.matricesIndices)
            if (mm.matricesIndices._isExpanded || mm.matricesIndicesExpanded) delete mm.matricesIndices._isExpanded, delete mm.matricesIndicesExpanded, Tm.setVerticesData(xm.m.MatricesIndicesKind, mm.matricesIndices, mm.matricesIndices._updatable || mm.matricesIndicesUpdatable);
            else {
              const fm = [];
              for (let Tm = 0; Tm < mm.matricesIndices.length; Tm++) {
                const hm = mm.matricesIndices[Tm];
                fm.push(255 & hm), fm.push((65280 & hm) >> 8), fm.push((16711680 & hm) >> 16), fm.push(hm >> 24 & 255)
              }
              Tm.setVerticesData(xm.m.MatricesIndicesKind, fm, mm.matricesIndices._updatable || mm.matricesIndicesUpdatable)
            } if (mm.matricesIndicesExtra)
            if (mm.matricesIndicesExtraExpanded || mm.matricesIndicesExtra._isExpanded) delete mm.matricesIndices._isExpanded, delete mm.matricesIndicesExtraExpanded, Tm.setVerticesData(xm.m.MatricesIndicesExtraKind, mm.matricesIndicesExtra, mm.matricesIndicesExtra._updatable || mm.matricesIndicesExtraUpdatable);
            else {
              const fm = [];
              for (let Tm = 0; Tm < mm.matricesIndicesExtra.length; Tm++) {
                const hm = mm.matricesIndicesExtra[Tm];
                fm.push(255 & hm), fm.push((65280 & hm) >> 8), fm.push((16711680 & hm) >> 16), fm.push(hm >> 24 & 255)
              }
              Tm.setVerticesData(xm.m.MatricesIndicesExtraKind, fm, mm.matricesIndicesExtra._updatable || mm.matricesIndicesExtraUpdatable)
            } mm.matricesWeights && (jm._CleanMatricesWeights(mm, Tm), Tm.setVerticesData(xm.m.MatricesWeightsKind, mm.matricesWeights, mm.matricesWeights._updatable)), mm.matricesWeightsExtra && Tm.setVerticesData(xm.m.MatricesWeightsExtraKind, mm.matricesWeightsExtra, mm.matricesWeights._updatable), Tm.setIndices(mm.indices, null)
        }
        if (mm.jK) {
          Tm.jK = [];
          for (let fm = 0; fm < mm.jK.length; fm++) {
            const hm = mm.jK[fm];
            wm.e.AddToMesh(hm.materialIndex, hm.verticesStart, hm.verticesCount, hm.indexStart, hm.indexCount, Tm)
          }
        }
        Tm._shouldGenerateFlatShading && (Tm.convertToFlatShadedMesh(), Tm._shouldGenerateFlatShading = !1), Tm.computeWorldMatrix(!0), fm.onMeshImportedObservable.notifyObservers(Tm)
      }
      static _CleanMatricesWeights(mm, Tm) {
        const fm = .001;
        if (!Dm.c.CleanBoneMatrixWeights) return;
        let hm;
        if (!(mm.skeletonId > -1)) return;
        {
          const fm = Tm.wG().getLastSkeletonById(mm.skeletonId);
          if (!fm) return;
          hm = fm.bones.length
        }
        const Am = Tm.getVerticesData(xm.m.MatricesIndicesKind),
          am = Tm.getVerticesData(xm.m.MatricesIndicesExtraKind),
          wm = mm.matricesWeights,
          im = mm.matricesWeightsExtra,
          Rm = mm.numBoneInfluencer,
          pm = wm.length;
        for (let xm = 0; xm < pm; xm += 4) {
          let mm = 0,
            Tm = -1;
          for (let hm = 0; hm < 4; hm++) {
            const Am = wm[xm + hm];
            mm += Am, Am < fm && Tm < 0 && (Tm = hm)
          }
          if (im)
            for (let hm = 0; hm < 4; hm++) {
              const Am = im[xm + hm];
              mm += Am, Am < fm && Tm < 0 && (Tm = hm + 4)
            }
          if ((Tm < 0 || Tm > Rm - 1) && (Tm = Rm - 1), mm > fm) {
            const Tm = 1 / mm;
            for (let mm = 0; mm < 4; mm++) wm[xm + mm] *= Tm;
            if (im)
              for (let mm = 0; mm < 4; mm++) im[xm + mm] *= Tm
          } else Tm >= 4 ? (im[xm + Tm - 4] = 1 - mm, am[xm + Tm - 4] = hm) : (wm[xm + Tm] = 1 - mm, Am[xm + Tm] = hm)
        }
        Tm.setVerticesData(xm.m.MatricesIndicesKind, Am), mm.matricesWeightsExtra && Tm.setVerticesData(xm.m.MatricesIndicesExtraKind, am)
      }
      static Parse(mm, Tm, fm) {
        const Am = new jm(mm.id, Tm, void 0, mm.updatable);
        return Am._loadedUniqueId = mm.uniqueId, Em.e && Em.e.AddTagsTo(Am, mm.tags), mm.delayLoadingFile ? (Am.delayLoadState = 4, Am.delayLoadingFile = fm + mm.delayLoadingFile, Am._boundingInfo = new im.b(hm.p.FromArray(mm.boundingBoxMinimum), hm.p.FromArray(mm.boundingBoxMaximum)), Am._delayInfo = [], mm.hasUVs && Am._delayInfo.push(xm.m.UVKind), mm.hasUVs2 && Am._delayInfo.push(xm.m.UV2Kind), mm.hasUVs3 && Am._delayInfo.push(xm.m.UV3Kind), mm.hasUVs4 && Am._delayInfo.push(xm.m.UV4Kind), mm.hasUVs5 && Am._delayInfo.push(xm.m.UV5Kind), mm.hasUVs6 && Am._delayInfo.push(xm.m.UV6Kind), mm.hasColors && Am._delayInfo.push(xm.m.ColorKind), mm.hasMatricesIndices && Am._delayInfo.push(xm.m.MatricesIndicesKind), mm.hasMatricesWeights && Am._delayInfo.push(xm.m.MatricesWeightsKind), Am._delayLoadingFunction = am.c.ImportVertexData) : am.c.ImportVertexData(mm, Am), Tm.pushGeometry(Am, !0), Am
      }
    }
  },
  40574: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => pm,
      d: () => Om
    });
    var hm = fm(37185),
      Am = fm(38766),
      am = fm(40544),
      xm = fm(40513),
      wm = fm(38764),
      Dm = fm(40546),
      im = fm(40251),
      Rm = fm(37224);
    class pm extends am.d {
      constructor(mm, Tm) {
        super(mm, Tm.wG()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Tm.W4(this), this._sourceMesh = Tm, this._unIndexed = Tm._unIndexed, this.position.ZZ(Tm.position), this.rotation.ZZ(Tm.rotation), this.fi.ZZ(Tm.fi), Tm.rotationQuaternion && (this.rotationQuaternion = Tm.rotationQuaternion.clone()), this.animations = Tm.animations.slice();
        for (const fm of Tm.getAnimationRanges()) null != fm && this.createAnimationRange(fm.name, fm.from, fm.to);
        if (this.infiniteDistance = Tm.infiniteDistance, this.setPivotMatrix(Tm.getPivotMatrix()), Tm.skeleton || Tm.morphTargetManager || !Tm.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const mm = Tm.DH();
          this.buildBoundingInfo(mm.minimum, mm.maximum)
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
      set receiveShadows(mm) {
        this._sourceMesh?.receiveShadows !== mm && Am.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(mm) {
        this._sourceMesh?.material !== mm && Am.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(mm) {
        this._sourceMesh?.visibility !== mm && Am.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(mm) {
        this._sourceMesh?.skeleton !== mm && Am.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(mm) {
        this._sourceMesh && mm !== this._sourceMesh.renderingGroupId && Am.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(mm) {
        this._sourceMesh && mm !== this._sourceMesh.meshBlendingTag && Am.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get mAm() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(mm) {
        return this._sourceMesh.createInstance(mm)
      }
      isReady() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(mm, !0)
      }
      getVerticesData(mm, Tm, fm) {
        return this._sourceMesh.getVerticesData(mm, Tm, fm)
      }
      copyVerticesData(mm, Tm) {
        this._sourceMesh.copyVerticesData(mm, Tm)
      }
      getVertexBuffer(mm, Tm) {
        return this._sourceMesh.getVertexBuffer(mm, Tm)
      }
      setVerticesData(mm, Tm, fm, hm) {
        return this.mAm && this.mAm.setVerticesData(mm, Tm, fm, hm), this.mAm
      }
      updateVerticesData(mm, Tm, fm, hm) {
        return this.mAm && this.mAm.updateVerticesData(mm, Tm, fm, hm), this.mAm
      }
      setIndices(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.mAm && this.mAm.setIndices(mm, Tm), this.mAm
      }
      isVerticesDataPresent(mm) {
        return this._sourceMesh.isVerticesDataPresent(mm)
      }
      xhm() {
        return this._sourceMesh.xhm()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let mm, Tm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          fm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.DH().isLocked) return this;
        mm = "object" === typeof Tm ? Tm : {
          applySkeleton: Tm,
          applyMorph: fm
        };
        const hm = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(mm, null, im.m.PositionKind), hm), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(mm, Tm) {
        if (super._activate(mm, Tm), this._sourceMesh.jK || Am.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, mm), Tm) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Dm.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new hm.e);
          const mm = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, hm.j.WO[7].ZZ(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.ZZ(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.ZZ(hm.j.WO[7]), this._currentLOD._masterMesh = mm, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get pG() {
        return !0
      }
      getLOD(mm) {
        if (!mm) return this;
        const Tm = this.mAm.getLODLevels();
        if (Tm && 0 !== Tm.length) {
          const Tm = this.DH();
          this._currentLOD = this.mAm.getLOD(mm, Tm.Shm)
        } else this._currentLOD = this.mAm;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(mm) {
        return this.mAm._preActivateForIntermediateRendering(mm)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.jK)
          for (let mm = 0; mm < this._sourceMesh.jK.length; mm++) this._sourceMesh.jK[mm].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.DH().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const hm = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(mm);
        if (wm.c.DeepCopy(this, hm, ["name", "jK", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "mAm", "pG", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "Fhm", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Lxm", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Tm && (hm.parent = Tm), !fm)
          for (let Am = 0; Am < this.wG().meshes.length; Am++) {
            const mm = this.wG().meshes[Am];
            mm.parent === this && mm.clone(mm.name, hm)
          }
        return hm.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(hm), hm
      }
      dispose(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.I9(this), super.dispose(mm, Tm)
      }
      _serializeAsParent(mm) {
        super._serializeAsParent(mm), mm.parentId = this._sourceMesh.uniqueId, mm.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const hm = this.clone("Clone of " + (this.name || this.id), mm || this.parent, !0, Tm && Tm.newSourcedMesh);
        hm && fm && fm(this, hm);
        for (const Am of this.getChildTransformNodes(!0)) Am.instantiateHierarchy(hm, Tm, fm);
        return hm
      }
    }
    let Em = !1;

    function om(mm, Tm, fm, hm, Am) {
      for (let am = 0; am < Tm.length; am++) {
        const xm = mm[Tm[am]] ?? 0,
          wm = Am + fm[am];
        xm.toArray ? xm.toArray(hm, wm) : xm.copyToArray ? xm.copyToArray(hm, wm) : hm[wm] = xm
      }
    }

    function Om() {
      Em || (Em = !0, xm.d._instancedMeshFactory = (mm, Tm) => {
        const fm = new pm(mm, Tm);
        if (Tm.RP) {
          fm.RP = {};
          for (const mm in Tm.RP) fm.RP[mm] = Tm.RP[mm]
        }
        return fm
      }, xm.d.prototype.FX = function(mm, Tm) {
        if (!this.RP) {
          this.RP = {};
          for (const mm of this.instances) mm.RP = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.dO().getCaps().vertexArrayObject ? {} : void 0
        }), this.RP[mm] = null, this._userInstancedBuffersStorage.strides[mm] = Tm;
        const fm = this._userInstancedBuffersStorage;
        fm.interleavedKinds = [], fm.interleavedOffsets = [], fm.interleavedRowStride = 0;
        for (const hm in fm.strides) fm.interleavedKinds.push(hm), fm.interleavedOffsets.push(fm.interleavedRowStride), fm.interleavedRowStride += fm.strides[hm];
        fm.interleavedData = new Float32Array(32 * fm.interleavedRowStride);
        for (const hm in fm.interleavedBuffers) fm.interleavedBuffers[hm].buffer.dispose();
        fm.interleavedBuffers = {}, fm.vertexBuffers[mm] = null;
        for (const hm of this.instances) hm.RP[mm] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, xm.d.prototype._processInstancedBuffers = function(mm, Tm) {
        const fm = this._userInstancedBuffersStorage,
          hm = fm.interleavedRowStride;
        if (!hm) return;
        const Am = mm ? mm.length : 0,
          am = (Am + 1) * hm;
        let xm = fm.interleavedData;
        if (xm.length < am) {
          let mm = xm.length;
          for (; mm < am;) mm *= 2;
          xm = fm.interleavedData = new Float32Array(mm)
        }
        const wm = fm.interleavedKinds,
          Dm = fm.interleavedOffsets;
        let Rm = 0;
        Tm && (om(this.RP, wm, Dm, xm, Rm), Rm += hm);
        for (let im = 0; im < Am; im++) om(mm[im].RP, wm, Dm, xm, Rm), Rm += hm;
        let pm = "shared",
          Em = fm.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (pm = this._instanceDataStorage.engine.currentRenderPassId, fm.renderPasses || (fm.renderPasses = {}), fm.renderPasses[pm] || (fm.renderPasses[pm] = {}), Em = fm.renderPasses[pm]);
        const Om = fm.interleavedBuffers[pm];
        let Ym = !Om || Om.data !== xm;
        for (let im = 0; !Ym && im < wm.length; im++) Ym = !Em[wm[im]];
        if (!Ym) return void Om.buffer.updateDirectly(xm, 0);
        Om?.buffer.dispose();
        const qm = new im.c(this.dO(), xm, !0, hm, !1, !0);
        for (let im = 0; im < wm.length; im++) {
          const mm = wm[im],
            Tm = qm.createVertexBuffer(mm, Dm[im], fm.strides[mm]);
          Tm.hashCode += Tm.byteOffset * 2 ** 24, Em[mm] = Tm
        }
        fm.interleavedBuffers[pm] = {
          buffer: qm,
          data: xm
        }, this._invalidateInstanceVertexArrayObject()
      }, xm.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const mm in this._userInstancedBuffersStorage.vertexArrayObjects) this.dO().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[mm]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, xm.d.prototype._disposeInstanceSpecificData = function() {
        for (const Tm in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Tm].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Tm in this.RP) this._userInstancedBuffersStorage.vertexBuffers[Tm] && this._userInstancedBuffersStorage.vertexBuffers[Tm].dispose();
        const mm = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (mm) {
          for (const Tm in mm) mm[Tm].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.RP = {}
      }, (0, Rm.d)("BABYLON.InstancedMesh", pm))
    }
  },
  40513: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Wm,
      g: () => mT,
      i: () => um
    });
    var hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm = fm(37203),
      Vm = fm(40203),
      Im = fm(40154),
      Km = fm(38764),
      Qm = fm(40138),
      nm = fm(40518),
      Jm = fm(40319),
      cm = fm(37185),
      zm = fm(37336),
      Zm = fm(40326),
      km = fm(40251),
      bm = fm(40527),
      Sm = fm(40529),
      em = fm(40544),
      Nm = fm(40391),
      Gm = fm(40383),
      Xm = fm(40483),
      Pm = fm(40552),
      Hm = fm(40538),
      ym = fm(40129),
      Cm = fm(38766),
      rm = fm(37224),
      sm = fm(39993),
      lm = fm(40274);
    class Mm {
      constructor(mm, Tm) {
        this.distanceOrScreenCoverage = mm, this.mesh = Tm
      }
    }
    class um {}
    class Bm {
      constructor() {
        this.batchCache = new tm(this), this.batchCacheReplacementModeInFrozenMode = new tm(this), this.instancesBufferSize = 2048
      }
    }
    class Lm {
      constructor() {
        this.renderPasses = {}
      }
    }
    class tm {
      constructor(mm) {
        this.parent = mm, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Um {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class dm {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const gm = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Wm extends em.d {
      static _GetDefaultSideOrientation(mm) {
        return mm || Wm.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(mm) {
        this._internalMeshDataInfo._useLODScreenCoverage = mm, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(mm) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== mm && (mm && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(km.m.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(km.m.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = mm, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new jm.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new jm.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new jm.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new jm.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new jm.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(mm) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(mm)
      }
      get Fhm() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(mm) {
        this._internalMeshDataInfo._forcedInstanceCount = mm
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(mm) {
        this._internalMeshDataInfo._sideOrientation = mm, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === mm || !this._scene.useRightHandedSystem && 0 === mm
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(mm) {
        this.sideOrientation = mm, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(mm) {
        this._internalMeshDataInfo._overrideRenderingFillMode = mm
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(mm) {
        mm && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (mm.sideOrientation = null), this._setMaterial(mm)
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
      set isUnIndexed(mm) {
        this._unIndexed !== mm && (this._unIndexed = mm, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const mm = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return mm ? mm.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const mm = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return mm ? mm.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(mm) {
        this._instanceDataStorage.manualUpdate = mm
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(mm) {
        this._instanceDataStorage.previousManualUpdate = mm
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(mm) {
        this._instanceDataStorage.forceMatrixUpdates = mm
      }
      _copySource(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Am = this.wG();
        if (mm._geometry && mm._geometry.applyToMesh(this), Km.c.DeepCopy(mm, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "Fhm", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "pG", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Lxm", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = mm, Am.useClonedMeshMap && (mm._internalMeshDataInfo.meshMap || (mm._internalMeshDataInfo.meshMap = {}), mm._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = mm._originalBuilderSideOrientation, this._creationDataStorage = mm._creationDataStorage, mm._ranges) {
          const Tm = mm._ranges;
          for (const mm in Tm) Object.prototype.hasOwnProperty.call(Tm, mm) && Tm[mm] && this.createAnimationRange(mm, Tm[mm].from, Tm[mm].to)
        }
        if (mm.metadata && mm.metadata.clone ? this.metadata = mm.metadata.clone() : this.metadata = mm.metadata, this._internalMetadata = mm._internalMetadata, this.meshBlendingTag = mm.meshBlendingTag, Qm.e && Qm.e.HasTags(mm) && Qm.e.AddTagsTo(this, Qm.e.GetTags(mm, !0)), this.Dk(mm.isEnabled(!1)), this.parent = mm.parent, this.setPivotMatrix(mm.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + mm.id, this.material = mm.material, !Tm) {
          const Am = mm.getDescendants(!0);
          for (let mm = 0; mm < Am.length; mm++) {
            const am = Am[mm];
            am._isMesh ? (gm.parent = this, gm.doNotCloneChildren = Tm, gm.clonePhysicsImpostor = fm, gm.cloneThinInstances = hm, am.clone(this.name + "." + am.name, gm)) : am.clone && am.clone(this.name + "." + am.name, this)
          }
        }
        if (mm.morphTargetManager && (this.morphTargetManager = mm.morphTargetManager), (0, sm.d)(Am.getPhysicsEngine)) {
          const Tm = Am.getPhysicsEngine();
          if (fm && Tm)
            if (1 === Tm.getPluginVersion()) {
              const fm = Tm.getImpostorForPhysicsObject(mm);
              fm && (this.physicsImpostor = fm.clone(this))
            } else 2 === Tm.getPluginVersion() && mm.physicsBody && mm.physicsBody.clone(this)
        }
        for (let am = 0; am < Am.VK.length; am++) {
          const Tm = Am.VK[am];
          Tm.emitter === mm && Tm.clone(Tm.name, this)
        }
        if (this.skeleton = mm.skeleton, hm && (mm._thinInstanceDataStorage.matrixData ? (this.I3("matrix", new Float32Array(mm._thinInstanceDataStorage.matrixData), 16, !mm._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = mm._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = mm._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = mm._thinInstanceDataStorage.matrixBufferSize, mm._userThinInstanceBuffersStorage)) {
          const Tm = mm._userThinInstanceBuffersStorage;
          for (const mm in Tm.data) this.I3(mm, new Float32Array(Tm.data[mm]), Tm.strides[mm], !Tm.vertexBuffers?.[mm]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[mm] = Tm.sizes[mm]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(mm) {
        let Tm, fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          am = arguments.length > 4 ? arguments[4] : void 0,
          xm = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(mm, fm), this._internalMeshDataInfo = new dm, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Um, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Wm.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, fm = this.wG(), this._instanceDataStorage = new Lm, this._instanceDataStorage.engine = fm.dO(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Bm), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (mm, Tm, fm) => {
          mm && fm && (this._uniformBuffer ? this.transferToEffect(Tm) : fm.bindOnlyWorldMatrix(Tm))
        };
        let wm = !1;
        if (hm && void 0 === hm._addToSceneRootNodes) {
          const mm = hm;
          Tm = mm.parent ?? null, Am = mm.source ?? null, am = mm.doNotCloneChildren ?? !1, xm = mm.clonePhysicsImpostor ?? !0, wm = mm.cloneThinInstances ?? !1
        } else Tm = hm;
        Am && this._copySource(Am, am, xm, wm), null !== Tm && (this.parent = Tm), this._instanceDataStorage.hardwareInstancedRendering = this.dO().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = mm => {
          mm.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new jm.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), Am && Am.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const hm = 0 === this.getTotalVertices() || Tm && Tm.doNotInstantiate && (!0 === Tm.doNotInstantiate || Tm.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), mm || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        hm.parent = mm || this.parent, hm.position = this.position.clone(), hm.fi = this.fi.clone(), this.rotationQuaternion ? hm.rotationQuaternion = this.rotationQuaternion.clone() : hm.rotation = this.rotation.clone(), fm && fm(this, hm);
        for (const Am of this.getChildTransformNodes(!0)) "InstancedMesh" === Am.getClassName() && "Mesh" === hm.getClassName() && Am.mAm === this ? Am.instantiateHierarchy(hm, {
          doNotInstantiate: Tm && Tm.doNotInstantiate || !1,
          newSourcedMesh: hm
        }, fm) : Am.instantiateHierarchy(hm, Tm, fm);
        return hm
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(mm) {
        let Tm = super.toString(mm);
        if (Tm += ", n vertices: " + this.getTotalVertices(), Tm += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let fm = 0; fm < this.animations.length; fm++) Tm += ", animation[0]: " + this.animations[fm].toString(mm);
        if (mm)
          if (this._geometry) {
            const mm = this.xhm(),
              fm = this.getVerticesData(km.m.PositionKind);
            fm && mm && (Tm += ", flat shading: " + (fm.length / 3 === mm.length ? "YES" : "NO"))
          } else Tm += ", flat shading: UNKNOWN";
        return Tm
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const mm of this.instances) mm._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const mm = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((Tm, fm) => Tm.distanceOrScreenCoverage < fm.distanceOrScreenCoverage ? mm : Tm.distanceOrScreenCoverage > fm.distanceOrScreenCoverage ? -mm : 0))
      }
      addLODLevel(mm, Tm) {
        if (Tm && Tm._masterMesh) return Cm.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const fm = new Mm(mm, Tm);
        return this._internalMeshDataInfo._LODLevels.push(fm), Tm && (Tm._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(mm) {
        const Tm = this._internalMeshDataInfo;
        for (let fm = 0; fm < Tm._LODLevels.length; fm++) {
          const hm = Tm._LODLevels[fm];
          if (hm.distanceOrScreenCoverage === mm) return hm.mesh
        }
        return null
      }
      removeLODLevel(mm) {
        const Tm = this._internalMeshDataInfo;
        for (let fm = 0; fm < Tm._LODLevels.length; fm++) Tm._LODLevels[fm].mesh === mm && (Tm._LODLevels.splice(fm, 1), mm && (mm._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(mm, Tm) {
        const fm = this._internalMeshDataInfo;
        if (!fm._LODLevels || 0 === fm._LODLevels.length) return this;
        const hm = Tm || this.DH().Shm,
          Am = mm.mode === Jm.b.ORTHOGRAPHIC_CAMERA ? mm.minZ : hm.centerWorld.subtract(mm.globalPosition).length();
        let am = Am,
          xm = 1;
        if (fm._useLODScreenCoverage) {
          const Tm = mm.screenArea;
          let fm = hm.radiusWorld * mm.minZ / Am;
          fm = fm * fm * Math.PI, am = fm / Tm, xm = -1
        }
        if (xm * fm._LODLevels[fm._LODLevels.length - 1].distanceOrScreenCoverage > xm * am) return this.onLODLevelSelection && this.onLODLevelSelection(am, this, this), this;
        for (let wm = 0; wm < fm._LODLevels.length; wm++) {
          const mm = fm._LODLevels[wm];
          if (xm * mm.distanceOrScreenCoverage < xm * am) {
            if (mm.mesh) {
              if (4 === mm.mesh.delayLoadState) return mm.mesh._checkDelayState(), this;
              if (2 === mm.mesh.delayLoadState) return this;
              mm.mesh._preActivate(), mm.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(am, this, mm.mesh), mm.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(am, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(mm, Tm, fm, hm) {
        if (!this._geometry) return null;
        let Am = hm ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[mm]?.getFloatData(this.instances.length + 1, fm || Tm && 1 !== this._geometry.meshes.length);
        return Am || (Am = this._geometry.getVerticesData(mm, Tm, fm)), Am
      }
      copyVerticesData(mm, Tm) {
        this._geometry && this._geometry.copyVerticesData(mm, Tm)
      }
      getVertexBuffer(mm, Tm) {
        return this._geometry ? (Tm ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[mm]) ?? this._geometry.getVertexBuffer(mm) : null
      }
      isVerticesDataPresent(mm, Tm) {
        return this._geometry ? !Tm && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[mm] || this._geometry.isVerticesDataPresent(mm) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(mm)
      }
      isVertexBufferUpdatable(mm, Tm) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(mm);
        if (!Tm) {
          const Tm = this._userInstancedBuffersStorage?.vertexBuffers[mm];
          if (Tm) return Tm.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(mm)
      }
      getVerticesDataKinds(mm) {
        if (!this._geometry) {
          const mm = [];
          if (this._delayInfo)
            for (const Tm of this._delayInfo) mm.push(Tm);
          return mm
        }
        const Tm = this._geometry.getVerticesDataKinds();
        if (!mm && this._userInstancedBuffersStorage)
          for (const fm in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Tm.indexOf(fm) && Tm.push(fm);
        return Tm
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      xhm(mm, Tm) {
        return this._geometry ? this._geometry.xhm(mm, Tm) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(mm)) return !1;
        if (!this.jK || 0 === this.jK.length) return !0;
        if (!mm) return !0;
        const fm = this.dO(),
          hm = this.wG(),
          Am = Tm || fm.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const am = this.material || hm.defaultMaterial;
        if (am)
          if (am._storeEffectOnSubMeshes)
            for (const wm of this.jK) {
              const mm = wm.TY();
              if (mm)
                if (mm._storeEffectOnSubMeshes) {
                  if (!mm.isReadyForSubMesh(this, wm, Am)) return !1
                } else if (!mm.isReady(this, Am)) return !1
            } else if (!am.isReady(this, Am)) return !1;
        const xm = fm.currentRenderPassId;
        for (const wm of this.lightSources) {
          const mm = wm.getShadowGenerators();
          if (!mm) continue;
          const Tm = mm.values();
          for (let hm = Tm.next(); !0 !== hm.done; hm = Tm.next()) {
            const mm = hm.value;
            if (mm && (!mm.getShadowMap()?.renderList || mm.getShadowMap()?.renderList && -1 !== mm.getShadowMap()?.renderList?.indexOf(this))) {
              const Tm = mm.getShadowMap().renderPassIds ?? [fm.currentRenderPassId];
              for (let hm = 0; hm < Tm.length; ++hm) {
                fm.currentRenderPassId = Tm[hm];
                for (const Tm of this.jK)
                  if (!mm.isReady(Tm, Am, Tm.TY()?.needAlphaBlendingForMesh(this) ?? !1)) return fm.currentRenderPassId = xm, !1
              }
              fm.currentRenderPassId = xm
            }
          }
        }
        for (const wm of this._internalMeshDataInfo._LODLevels)
          if (wm.mesh && !wm.mesh.isReady(Am)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      fY() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(mm) {
        this._instanceDataStorage.overridenInstanceCount = mm
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const mm = this._instanceDataStorage.engine.currentRenderPassId;
        let Tm = this._instanceDataStorage.renderPasses[mm];
        return Tm || (Tm = new Bm, this._instanceDataStorage.renderPasses[mm] = Tm), Tm
      }
      _preActivate() {
        const mm = this._internalMeshDataInfo,
          Tm = this.wG().getRenderId();
        return mm._preActivateId === Tm || (mm._preActivateId = Tm, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(mm) {
        const Tm = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Tm.visibleInstances && (Tm.visibleInstances.intermediateDefaultRenderId = mm), this
      }
      _registerInstanceForRenderId(mm, Tm) {
        const fm = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return fm.visibleInstances || (fm.visibleInstances = {
          defaultRenderId: Tm,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), fm.visibleInstances[Tm] || (void 0 === fm.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete fm.visibleInstances[fm.previousRenderId], fm.previousRenderId = Tm, fm.visibleInstances[Tm] = new Array), fm.visibleInstances[Tm].push(mm), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.mY || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let mm, Tm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          fm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.DH().isLocked) return this;
        mm = "object" === typeof Tm ? Tm : {
          applySkeleton: Tm,
          applyMorph: fm
        };
        const hm = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(mm, null, km.m.PositionKind), hm), this
      }
      _createGlobalSubMesh(mm) {
        const Tm = this.getTotalVertices();
        if (!Tm || !this.xhm()) return null;
        if (this.jK && this.jK.length > 0) {
          const fm = this.xhm();
          if (!fm) return null;
          const hm = fm.length;
          let Am = !1;
          if (mm) Am = !0;
          else
            for (const mm of this.jK) {
              if (mm.indexStart + mm.indexCount > hm) {
                Am = !0;
                break
              }
              if (mm.verticesStart + mm.verticesCount > Tm) {
                Am = !0;
                break
              }
            }
          if (!Am) return this.jK[0]
        }
        return this.releaseSubMeshes(), new Nm.e(0, 0, Tm, 0, this.getTotalIndices() || (this.isUnIndexed ? Tm : 0), this)
      }
      subdivide(mm) {
        if (mm < 1) return;
        const Tm = this.getTotalIndices();
        let fm = Tm / mm | 0,
          hm = 0;
        for (; fm % 3 !== 0;) fm++;
        this.releaseSubMeshes();
        for (let Am = 0; Am < mm && !(hm >= Tm); Am++) Nm.e.CreateFromIndices(0, hm, hm + fm >= Tm ? Tm - hm : fm, this, void 0, !1), hm += fm;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(mm, Tm, fm, hm);
        else {
          const hm = new bm.c;
          hm.set(Tm, mm);
          const Am = this.wG();
          new Sm.d(Sm.d.RandomId(), Am, hm, fm, this)
        }
        return this
      }
      removeVerticesData(mm) {
        this._geometry && this._geometry.removeVerticesData(mm)
      }
      markVerticesDataAsUpdatable(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const fm = this.getVertexBuffer(mm);
        fm && fm.isUpdatable() !== Tm && this.setVerticesData(mm, this.getVerticesData(mm), Tm)
      }
      setVerticesBuffer(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Sm.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(mm, fm, Tm), this
      }
      updateVerticesData(mm, Tm, fm, hm) {
        return this._geometry ? (hm ? (this.makeGeometryUnique(), this.updateVerticesData(mm, Tm, fm, !1)) : this._geometry.updateVerticesData(mm, Tm, fm), this) : this
      }
      updateMeshPositions(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const fm = this.getVerticesData(km.m.PositionKind);
        if (!fm) return this;
        if (mm(fm), this.updateVerticesData(km.m.PositionKind, fm, !1, !1), Tm) {
          const mm = this.xhm(),
            Tm = this.getVerticesData(km.m.NormalKind);
          if (!Tm) return this;
          bm.c.ComputeNormals(fm, mm, Tm), this.updateVerticesData(km.m.NormalKind, Tm, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const mm = this._geometry,
          Tm = this._geometry.copy(Sm.d.RandomId());
        return mm.releaseForMesh(this, !0), Tm.applyToMesh(this), this
      }
      setIndexBuffer(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Am = this._geometry;
        Am || (Am = new Sm.d(Sm.d.RandomId(), this.wG(), void 0, void 0, this)), Am.setIndexBuffer(mm, Tm, fm, hm)
      }
      setIndices(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(mm, Tm, fm, hm);
        else {
          const hm = new bm.c;
          hm.indices = mm;
          const Am = this.wG();
          new Sm.d(Sm.d.RandomId(), Am, hm, fm, this, Tm)
        }
        return this
      }
      updateIndices(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(mm, Tm, fm), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(mm, Tm, fm) {
        let hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Am = this.wG().dO();
        let am;
        if (this._unIndexed)
          if (this._getRenderingFillMode(fm) === Gm.d.WireFrameFillMode) am = mm._getLinesIndexBuffer(this.xhm(), Am);
          else am = null;
        else switch (this._getRenderingFillMode(fm)) {
          case Gm.d.PointFillMode:
            am = null;
            break;
          case Gm.d.WireFrameFillMode:
            am = mm._getLinesIndexBuffer(this.xhm(), Am);
            break;
          default:
          case Gm.d.TriangleFillMode:
            am = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Tm, am, hm)
      }
      _bindDirect(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(mm), fm && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const mm = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Tm in mm) this._userInstancedBuffersStorage.vertexBuffers[Tm] = mm[Tm]
          }
          this._geometry._bind(mm, Tm, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(mm, Tm);
        return this
      }
      _draw(mm, Tm, fm) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const hm = this.wG().dO(),
          Am = hm._currentMaterialContext,
          am = Am && Am.useVertexPulling;
        return this._unIndexed && Tm !== Gm.d.WireFrameFillMode || Tm == Gm.d.PointFillMode ? hm.drawArraysType(Tm, mm.verticesStart, mm.verticesCount, this.forcedInstanceCount || fm) : Tm == Gm.d.WireFrameFillMode ? hm.drawElementsType(Tm, 0, mm._linesIndexCount, this.forcedInstanceCount || fm) : am ? hm.drawArraysType(Tm, mm.indexStart, mm.indexCount, this.forcedInstanceCount || fm) : hm.drawElementsType(Tm, mm.indexStart, mm.indexCount, this.forcedInstanceCount || fm), this
      }
      registerBeforeRender(mm) {
        return this.onBeforeRenderObservable.add(mm), this
      }
      unregisterBeforeRender(mm) {
        return this.onBeforeRenderObservable.removeCallback(mm), this
      }
      registerAfterRender(mm) {
        return this.onAfterRenderObservable.add(mm), this
      }
      unregisterAfterRender(mm) {
        return this.onAfterRenderObservable.removeCallback(mm), this
      }
      _getInstancesRenderList(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Tm) return fm.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[mm] = !1, fm.batchCacheReplacementModeInFrozenMode.renderSelf[mm] = !0, fm.batchCacheReplacementModeInFrozenMode;
          if (fm.previousBatch) return fm.previousBatch
        }
        const hm = this.wG(),
          Am = hm._isInIntermediateRendering(),
          am = Am ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          xm = fm.batchCache;
        if (xm.mustReturn = !1, xm.renderSelf[mm] = Tm || !am && this.isEnabled() && this.isVisible, xm.visibleInstances[mm] = null, fm.visibleInstances && !Tm) {
          const Tm = fm.visibleInstances,
            am = hm.getRenderId(),
            wm = Am ? Tm.intermediateDefaultRenderId : Tm.defaultRenderId;
          xm.visibleInstances[mm] = Tm[am], !xm.visibleInstances[mm] && wm && (xm.visibleInstances[mm] = Tm[wm])
        }
        return xm.hardwareInstancedRendering[mm] = !Tm && this._instanceDataStorage.hardwareInstancedRendering && null !== xm.visibleInstances[mm] && void 0 !== xm.visibleInstances[mm], fm.previousBatch = xm, xm
      }
      _updateInstancedBuffers(mm, Tm, fm, hm, Am, am) {
        const xm = Tm.visibleInstances[mm._id],
          wm = xm ? xm.length : 0,
          Dm = Tm.parent,
          im = this._instanceDataStorage;
        let Rm = Dm.instancesBuffer,
          pm = Dm.instancesPreviousBuffer,
          Em = 0,
          om = 0;
        const Om = Tm.renderSelf[mm._id],
          Ym = this._scene.floatingOriginOffset,
          qm = !Rm || fm !== Dm.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Dm.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || im.isFrozen && !qm) om = (Om ? 1 : 0) + wm;
        else {
          const Tm = this.getWorldMatrix();
          if (Om) {
            this._scene.needsPreviousWorldMatrices && (im.masterMeshPreviousWorldMatrix ? (im.masterMeshPreviousWorldMatrix.copyToArray(Dm.instancesPreviousData, Em), im.masterMeshPreviousWorldMatrix.ZZ(Tm)) : (im.masterMeshPreviousWorldMatrix = Tm.clone(), im.masterMeshPreviousWorldMatrix.copyToArray(Dm.instancesPreviousData, Em))), Tm.copyToArray(Dm.instancesData, Em);
            const mm = Tm.ahm();
            Dm.instancesData[Em + 12] = mm[12] - Ym.x, Dm.instancesData[Em + 13] = mm[13] - Ym.y, Dm.instancesData[Em + 14] = mm[14] - Ym.z, Em += 16, om++
          }
          if (xm) {
            if (Wm.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && mm.TY()?.needAlphaBlendingForMesh(mm.getRenderingMesh())) {
              const mm = this._scene.activeCamera.globalPosition;
              for (let Tm = 0; Tm < xm.length; Tm++) {
                const fm = xm[Tm];
                fm._distanceToCamera = cm.p.Distance(fm.DH().Shm.centerWorld, mm)
              }
              xm.sort(((mm, Tm) => mm._distanceToCamera > Tm._distanceToCamera ? -1 : mm._distanceToCamera < Tm._distanceToCamera ? 1 : 0))
            }
            for (let mm = 0; mm < xm.length; mm++) {
              const Tm = xm[mm],
                fm = Tm.getWorldMatrix();
              fm.copyToArray(Dm.instancesData, Em), this._scene.needsPreviousWorldMatrices && (Tm._previousWorldMatrix ? (Tm._previousWorldMatrix.copyToArray(Dm.instancesPreviousData, Em), Tm._previousWorldMatrix.ZZ(fm)) : (Tm._previousWorldMatrix = fm.clone(), Tm._previousWorldMatrix.copyToArray(Dm.instancesPreviousData, Em)));
              const hm = fm.ahm();
              Dm.instancesData[Em + 12] = hm[12] - Ym.x, Dm.instancesData[Em + 13] = hm[13] - Ym.y, Dm.instancesData[Em + 14] = hm[14] - Ym.z, Em += 16, om++
            }
          }
        }
        if (qm) {
          let mm;
          if (Rm && Rm.dispose(), pm && pm.dispose(), Rm = new km.c(hm, Dm.instancesData, !0, 16, !1, !0), Dm.instancesBuffer = Rm, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.dO().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) mm = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Tm = this._instanceDataStorage.engine.currentRenderPassId;
            mm = this._userInstancedBuffersStorage.renderPasses[Tm], mm || (this._userInstancedBuffersStorage.renderPasses[Tm] = mm = {})
          }
          mm.world0 = Rm.createVertexBuffer("world0", 0, 4), mm.world1 = Rm.createVertexBuffer("world1", 4, 4), mm.world2 = Rm.createVertexBuffer("world2", 8, 4), mm.world3 = Rm.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (pm = new km.c(hm, Dm.instancesPreviousData, !0, 16, !1, !0), Dm.instancesPreviousBuffer = pm, mm.previousWorld0 = pm.createVertexBuffer("previousWorld0", 0, 4), mm.previousWorld1 = pm.createVertexBuffer("previousWorld1", 4, 4), mm.previousWorld2 = pm.createVertexBuffer("previousWorld2", 8, 4), mm.previousWorld3 = pm.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Rm.updateDirectly(Dm.instancesData, 0, om), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || pm.updateDirectly(Dm.instancesPreviousData, 0, om));
        this._processInstancedBuffers(xm, Om), am && void 0 !== Am && (this.wG()._activeIndices.addCount(mm.indexCount * om, !1), hm._currentDrawContext && (hm._currentDrawContext.useInstancing = !0), this._bind(mm, am, Am), this._draw(mm, Am, om)), !this._scene.needsPreviousWorldMatrices || qm || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || pm.updateDirectly(Dm.instancesData, 0, om)
      }
      _renderWithInstances(mm, Tm, fm, hm, Am) {
        const am = fm.visibleInstances[mm._id],
          xm = am ? am.length : 0,
          wm = fm.parent,
          Dm = wm.instancesBufferSize,
          im = 16 * (xm + 1) * 4;
        for (; wm.instancesBufferSize < im;) wm.instancesBufferSize *= 2;
        return wm.instancesData && Dm == wm.instancesBufferSize || (wm.instancesData = new Float32Array(wm.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !wm.instancesPreviousData || Dm != wm.instancesBufferSize) && (wm.instancesPreviousData = new Float32Array(wm.instancesBufferSize / 4)), this._updateInstancedBuffers(mm, fm, Dm, Am, Tm, hm), Am.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(mm, Tm, fm, hm) {
        const Am = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.wG()._activeIndices.addCount(mm.indexCount * Am, !1), hm._currentDrawContext && (hm._currentDrawContext.useInstancing = !0), this._bind(mm, fm, Tm), this._draw(mm, Tm, Am), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Am) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), hm.unbindInstanceAttributes()
      }
      _processInstancedBuffers(mm, Tm) {}
      _processRendering(mm, Tm, fm, hm, Am, am, xm, wm) {
        const Dm = this.wG(),
          im = Dm.dO();
        if (hm = this._getRenderingFillMode(hm), am && Tm.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Tm, hm, fm, im), this;
        if (am) this._renderWithInstances(Tm, hm, Am, fm, im);
        else {
          im._currentDrawContext && (im._currentDrawContext.useInstancing = !1);
          let fm = 0;
          Am.renderSelf[Tm._id] && (xm && xm(!1, mm.getWorldMatrix(), wm), fm++, this._draw(Tm, hm, this._instanceDataStorage.overridenInstanceCount));
          const am = Am.visibleInstances[Tm._id];
          if (am) {
            const mm = am.length;
            fm += mm;
            for (let fm = 0; fm < mm; fm++) {
              const mm = am[fm].getWorldMatrix();
              xm && xm(!0, mm, wm), this._draw(Tm, hm)
            }
          }
          Dm._activeIndices.addCount(Tm.indexCount * fm, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        mm?.instancesBuffer && (Tm && mm.instancesBuffer.dispose(), mm.instancesBuffer = null), mm?.instancesPreviousBuffer && (Tm && mm.instancesPreviousBuffer.dispose(), mm.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Tm in this._instanceDataStorage.renderPasses) {
          const fm = this._instanceDataStorage.renderPasses[Tm];
          this._disposeInstanceDataStorageRenderPass(fm, mm)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, mm), this._userInstancedBuffersStorage) {
          for (const Tm in this._userInstancedBuffersStorage.vertexBuffers) {
            const fm = this._userInstancedBuffersStorage.vertexBuffers[Tm];
            fm && (mm && fm.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Tm] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(mm)
      }
      _releaseRenderPassId(mm) {
        const Tm = this._instanceDataStorage.renderPasses[mm];
        if (Tm && (this._disposeInstanceDataStorageRenderPass(Tm, !0), delete this._instanceDataStorage.renderPasses[mm]), this._userInstancedBuffersStorage?.renderPasses) {
          const Tm = this._userInstancedBuffersStorage.renderPasses[mm];
          if (Tm)
            for (const mm in Tm) Tm[mm]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[mm]
        }
        const fm = this._userInstancedBuffersStorage?.interleavedBuffers;
        fm?.[mm] && (fm[mm].buffer.dispose(), delete fm[mm])
      }
      _freeze() {
        if (this.jK) {
          for (let mm = 0; mm < this.jK.length; mm++) this._getInstancesRenderList(mm);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const mm in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[mm].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(mm, Tm, fm, hm) {
        let Am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const am = this._scene.dO(),
          xm = am.currentRenderPassId;
        if (void 0 !== mm && (am.currentRenderPassId = mm), hm)(!Am || Am && hm.isInFrustum(this._scene._frustumPlanes)) && this.render(hm, !!Tm, fm);
        else
          for (let wm = 0; wm < this.jK.length; wm++) {
            const mm = this.jK[wm];
            (!Am || Am && mm.isInFrustum(this._scene._frustumPlanes)) && this.render(mm, !!Tm, fm)
          }
        return void 0 !== mm && (am.currentRenderPassId = xm), this
      }
      directRender() {
        if (!this.jK) return this;
        for (const mm of this.jK) this.render(mm, !1);
        return this
      }
      render(mm, Tm, fm) {
        const hm = this.wG(),
          Am = hm.dO();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const am = hm.activeCameras?.length ?? 0,
          xm = am > 1 && hm.activeCamera === hm.activeCameras[0] || am <= 1,
          wm = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Am.currentRenderPassId;
        if (xm && this._checkOcclusionQuery(wm) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Dm = this._getInstancesRenderList(mm._id, !!fm);
        if (Dm.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let im = 0,
          Rm = null;
        this.ignoreCameraMaxZ && hm.activeCamera && !hm._isInIntermediateRendering() && (im = hm.activeCamera.maxZ, Rm = hm.activeCamera, hm.activeCamera.maxZ = 0, hm.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const pm = mm.getRenderingMesh(),
          Em = Dm.hardwareInstancedRendering[mm._id] || pm.hasThinInstances || !!this._userInstancedBuffersStorage && !mm.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          om = this._instanceDataStorage,
          Om = mm.TY();
        if (!Om) return Rm && (Rm.maxZ = im, hm.updateTransformMatrix(!0)), this;
        if (om.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === Om) {
          if (Om._storeEffectOnSubMeshes && !mm._drawWrapper?._wasPreviouslyReady || !Om._storeEffectOnSubMeshes && !Om._getDrawWrapper()._wasPreviouslyReady) return Rm && (Rm.maxZ = im, hm.updateTransformMatrix(!0)), this
        } else {
          if (Om._storeEffectOnSubMeshes) {
            if (!Om.isReadyForSubMesh(this, mm, Em)) return Rm && (Rm.maxZ = im, hm.updateTransformMatrix(!0)), this
          } else if (!Om.isReady(this, Em)) return Rm && (Rm.maxZ = im, hm.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = Om
        }
        if (Tm) {
          const mm = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === mm.alphaModes.length) Am.setAlphaMode(mm.alphaMode);
          else
            for (let Tm = 0; Tm < mm.alphaModes.length; Tm++) {
              const fm = mm.alphaModes[Tm];
              Am.setAlphaMode(void 0 !== fm ? fm : 2, !1, Tm)
            }
        }
        let Ym;
        Ym = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? mm._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const qm = Ym?.effect ?? null;
        for (let Jm = 0, cm = hm._beforeRenderingMeshStage; Jm < cm.length; Jm++) {
          cm[Jm].action(this, mm, Dm, qm)
        }
        if (!Ym || !qm) return Rm && (Rm.maxZ = im, hm.updateTransformMatrix(!0)), this;
        const jm = fm || this;
        let Vm;
        if (!om.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const mm = jm._getWorldMatrixDeterminant();
          Vm = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), mm < 0 && (Vm = Vm === Gm.d.ClockWiseSideOrientation ? Gm.d.CounterClockWiseSideOrientation : Gm.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Vm
        }
        const Im = this._internalMeshDataInfo._effectiveMaterial._preBind(Ym, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Am.setDepthWrite(!0);
        const Km = this._internalMeshDataInfo._effectiveMaterial,
          Qm = Km.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Em || this._bind(mm, qm, Qm, !1);
        const nm = jm.getWorldMatrix();
        Km._storeEffectOnSubMeshes ? Km.bindForSubMesh(nm, this, mm) : Km.bind(nm, this);
        try {
          Xm.c._BindAttachmentsForEffect(Am, qm) && (!Km.backFaceCulling && Km.separateCullingPass && (Am.setState(!0, Km.zOffset, !1, !Im, Km.cullBackFaces, Km.stencil, Km.zOffsetUnits), this._processRendering(this, mm, qm, Qm, Dm, Em, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Am.setState(!0, Km.zOffset, !1, Im, Km.cullBackFaces, Km.stencil, Km.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(mm)), this._processRendering(this, mm, qm, Qm, Dm, Em, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Xm.c._RestoreAttachments(Am)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Jm = 0, cm = hm._afterRenderingMeshStage; Jm < cm.length; Jm++) {
          cm[Jm].action(this, mm, Dm, qm)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Rm && (Rm.maxZ = im, hm.updateTransformMatrix(!0)), 2 !== hm.performancePriority || om.isFrozen || this._freeze(), this
      }
      _renderRunFollower(mm, Tm) {
        const fm = this._scene,
          hm = fm._engine;
        if (hm.isWebGPU || mm._mesh !== this || 0 !== this.instances.length || this.render !== Wm.prototype.render) return !1;
        const Am = mm.TY();
        if (!Am || Am !== fm._cachedMaterial || void 0 === Am._canBindRunFollower) return !1;
        const am = mm._drawWrapper,
          xm = am?.effect;
        if (!xm || xm !== fm._cachedEffect || this.visibility !== fm._cachedVisibility || am._forceRebindOnNextCall) return !1;
        const wm = this.hasThinInstances;
        if (!wm && this._userInstancedBuffersStorage) return !1;
        if (!am._wasPreviouslyReady || am._wasPreviouslyUsingInstances !== wm) return !1;
        const Dm = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || fm._isInIntermediateRendering() || 0 !== fm._beforeRenderingMeshStage.length || 0 !== fm._afterRenderingMeshStage.length || Dm._onBeforeRenderObservable?.hasObservers() || Dm._onBeforeBindObservable?.hasObservers() || Dm._onAfterRenderObservable?.hasObservers()) return !1;
        const im = this.occlusionType;
        if (void 0 !== im && im !== em.d.OCCLUSION_TYPE_NONE || !Am._canBindRunFollower(fm, hm, this, mm, xm)) return !1;
        const Rm = this._internalAbstractMeshDataInfo,
          pm = Rm._isActiveIntermediate;
        pm ? Rm._isActiveIntermediate = !1 : Rm._isActive = !1;
        const Em = fm.activeCameras?.length ?? 0;
        (Em > 1 && fm.activeCamera === fm.activeCameras[0] || Em <= 1) && this._checkOcclusionQuery(!1);
        const om = this._getInstancesRenderList(mm._id);
        if (om.mustReturn) return !0;
        if (!wm && !om.renderSelf[mm._id]) return pm ? Rm._isActiveIntermediate = !0 : Rm._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Dm._effectiveMaterial = Am, Tm)
          if (1 === Am.alphaModes.length) hm.setAlphaMode(Am.alphaMode);
          else
            for (let Ym = 0; Ym < Am.alphaModes.length; Ym++) {
              const mm = Am.alphaModes[Ym];
              hm.setAlphaMode(void 0 !== mm ? mm : 2, !1, Ym)
            }
        if (Am.backFaceCulling || null !== Am.sideOrientation || Am._twoSidedLighting) {
          const mm = this._getWorldMatrixDeterminant();
          let Tm = Am._getEffectiveOrientation(this);
          mm < 0 && (Tm = Tm === Gm.d.ClockWiseSideOrientation ? Gm.d.CounterClockWiseSideOrientation : Gm.d.ClockWiseSideOrientation), Dm._effectiveSideOrientation = Tm
        }
        Am._preBind(am, Dm._effectiveSideOrientation), Am.forceDepthWrite && hm.setDepthWrite(!0);
        const Om = Am.fillMode;
        return wm || this._bind(mm, xm, Om, !1), Am._bindRunFollower(this.getWorldMatrix(), this, mm, xm), this._processRendering(this, mm, xm, Om, om, wm, this._onBeforeDraw, Am), Am.unbind(), 2 === fm.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(km.m.MatricesWeightsKind) && (this.isVerticesDataPresent(km.m.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const mm = this.getVerticesData(km.m.MatricesWeightsKind),
          Tm = mm.length;
        for (let fm = 0; fm < Tm; fm += 4) {
          const Tm = mm[fm] + mm[fm + 1] + mm[fm + 2] + mm[fm + 3];
          if (0 === Tm) mm[fm] = 1;
          else {
            const hm = 1 / Tm;
            mm[fm] *= hm, mm[fm + 1] *= hm, mm[fm + 2] *= hm, mm[fm + 3] *= hm
          }
        }
        this.setVerticesData(km.m.MatricesWeightsKind, mm)
      }
      _normalizeSkinWeightsAndExtra() {
        const mm = this.getVerticesData(km.m.MatricesWeightsExtraKind),
          Tm = this.getVerticesData(km.m.MatricesWeightsKind),
          fm = Tm.length;
        for (let hm = 0; hm < fm; hm += 4) {
          let fm = Tm[hm] + Tm[hm + 1] + Tm[hm + 2] + Tm[hm + 3];
          if (fm += mm[hm] + mm[hm + 1] + mm[hm + 2] + mm[hm + 3], 0 === fm) Tm[hm] = 1;
          else {
            const Am = 1 / fm;
            Tm[hm] *= Am, Tm[hm + 1] *= Am, Tm[hm + 2] *= Am, Tm[hm + 3] *= Am, mm[hm] *= Am, mm[hm + 1] *= Am, mm[hm + 2] *= Am, mm[hm + 3] *= Am
          }
        }
        this.setVerticesData(km.m.MatricesWeightsKind, Tm), this.setVerticesData(km.m.MatricesWeightsKind, mm)
      }
      validateSkinning() {
        const mm = this.getVerticesData(km.m.MatricesWeightsExtraKind),
          Tm = this.getVerticesData(km.m.MatricesWeightsKind);
        if (null === Tm || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          IO: "not skinned"
        };
        const fm = Tm.length;
        let hm = 0,
          Am = 0,
          am = 0,
          xm = 0;
        const wm = null === mm ? 4 : 8,
          Dm = [];
        for (let om = 0; om <= wm; om++) Dm[om] = 0;
        for (let om = 0; om < fm; om += 4) {
          let fm = Tm[om],
            im = fm,
            Rm = 0 === im ? 0 : 1;
          for (let Am = 1; Am < wm; Am++) {
            const am = Am < 4 ? Tm[om + Am] : mm[om + Am - 4];
            am > fm && hm++, 0 !== am && Rm++, im += am, fm = am
          }
          if (Dm[Rm]++, Rm > am && (am = Rm), 0 === im) Am++;
          else {
            const fm = 1 / im;
            let hm = 0;
            for (let Am = 0; Am < wm; Am++) hm += Am < 4 ? Math.abs(Tm[om + Am] - Tm[om + Am] * fm) : Math.abs(mm[om + Am - 4] - mm[om + Am - 4] * fm);
            hm > .001 && xm++
          }
        }
        const im = this.skeleton.bones.length,
          Rm = this.getVerticesData(km.m.MatricesIndicesKind),
          pm = this.getVerticesData(km.m.MatricesIndicesExtraKind);
        let Em = 0;
        for (let om = 0; om < fm; om += 4)
          for (let mm = 0; mm < wm; mm++) {
            const Tm = mm < 4 ? Rm[om + mm] : pm[om + mm - 4];
            (Tm >= im || Tm < 0) && Em++
          }
        return {
          skinned: !0,
          valid: 0 === Am && 0 === xm && 0 === Em,
          IO: "Number of Weights = " + fm / 4 + "\nMaximum influences = " + am + "\nMissing Weights = " + Am + "\nNot Sorted = " + hm + "\nNot Normalized = " + xm + "\nWeightCounts = [" + Dm + "]\nNumber of bones = " + im + "\nBad Bone Indices = " + Em
        }
      }
      _checkDelayState() {
        const mm = this.wG();
        return this._geometry ? this._geometry.load(mm) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(mm)), this
      }
      _queueLoad(mm) {
        mm.addPendingData(this);
        const Tm = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const fm = await mm._loadDelayedFileAsync(this.delayLoadingFile, Tm, !0);
            fm instanceof ArrayBuffer ? this._delayLoadingFunction(fm, this) : this._delayLoadingFunction(JSON.parse(fm), this);
            for (const mm of this.instances) mm.refreshBoundingInfo(), mm._syncSubMeshes();
            this.delayLoadState = 1, mm.removePendingData(this)
          } catch (fm) {
            mm.removePendingData(this), mm.aJ || Cm.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${fm}`)
          }
        })(), this
      }
      isInFrustum(mm) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(mm) && (this._checkDelayState(), !0))
      }
      setMaterialById(mm) {
        const Tm = this.wG().materials;
        let fm;
        for (fm = Tm.length - 1; fm > -1; fm--)
          if (Tm[fm].id === mm) return this.material = Tm[fm], this;
        const hm = this.wG().multiMaterials;
        for (fm = hm.length - 1; fm > -1; fm--)
          if (hm[fm].id === mm) return this.material = hm[fm], this;
        return this
      }
      getAnimatables() {
        const mm = [];
        return this.material && mm.push(this.material), this.skeleton && mm.push(this.skeleton), mm
      }
      bakeTransformIntoVertices(mm) {
        if (!this.isVerticesDataPresent(km.m.PositionKind)) return this;
        const Tm = this.jK.splice(0);
        this._resetPointsArrayCache();
        let fm = this.getVerticesData(km.m.PositionKind);
        const hm = cm.p.Zero();
        let Am;
        for (Am = 0; Am < fm.length; Am += 3) cm.p.TransformCoordinatesFromFloatsToRef(fm[Am], fm[Am + 1], fm[Am + 2], mm, hm).toArray(fm, Am);
        if (this.setVerticesData(km.m.PositionKind, fm, this.getVertexBuffer(km.m.PositionKind).isUpdatable()), this.isVerticesDataPresent(km.m.NormalKind)) {
          for (fm = this.getVerticesData(km.m.NormalKind), Am = 0; Am < fm.length; Am += 3) cm.p.TransformNormalFromFloatsToRef(fm[Am], fm[Am + 1], fm[Am + 2], mm, hm).normalize().toArray(fm, Am);
          this.setVerticesData(km.m.NormalKind, fm, this.getVertexBuffer(km.m.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(km.m.TangentKind)) {
          for (fm = this.getVerticesData(km.m.TangentKind), Am = 0; Am < fm.length; Am += 4) cm.p.TransformNormalFromFloatsToRef(fm[Am], fm[Am + 1], fm[Am + 2], mm, hm).normalize().toArray(fm, Am);
          this.setVerticesData(km.m.TangentKind, fm, this.getVertexBuffer(km.m.TangentKind).isUpdatable())
        }
        return mm.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.jK = Tm, this
      }
      bakeCurrentTransformIntoVertices() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(mm), this
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
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Tm && void 0 === Tm._addToSceneRootNodes) {
          const fm = Tm;
          return gm.source = this, gm.doNotCloneChildren = fm.doNotCloneChildren, gm.clonePhysicsImpostor = fm.clonePhysicsImpostor, gm.cloneThinInstances = fm.cloneThinInstances, new Wm(mm, this.wG(), gm)
        }
        return new Wm(mm, this.wG(), Tm, this, fm, hm)
      }
      dispose(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const fm = this._internalMeshDataInfo;
        if (fm._onBeforeDrawObservable && fm._onBeforeDrawObservable.clear(), fm._onBeforeBindObservable && fm._onBeforeBindObservable.clear(), fm._onBeforeRenderObservable && fm._onBeforeRenderObservable.clear(), fm._onAfterRenderObservable && fm._onAfterRenderObservable.clear(), fm._onBetweenPassObservable && fm._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (fm.meshMap)
            for (const mm in fm.meshMap) {
              const Tm = fm.meshMap[mm];
              Tm && (Tm._internalMeshDataInfo._source = null, fm.meshMap[mm] = void 0)
            }
          fm._source && fm._source._internalMeshDataInfo.meshMap && (fm._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const mm = this.wG().meshes;
          for (const Tm of mm) {
            const mm = Tm;
            mm._internalMeshDataInfo && mm._internalMeshDataInfo._source && mm._internalMeshDataInfo._source === this && (mm._internalMeshDataInfo._source = null)
          }
        }
        fm._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(mm, Tm)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(mm, Tm, fm, hm, Am, am) {
        let xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          wm = arguments.length > 7 ? arguments[7] : void 0;
        const Dm = this.wG();
        return (0, Im.u)(mm, (mm => {
          const wm = mm.width,
            Dm = mm.height,
            im = this.dO().createCanvas(wm, Dm).getContext("2d");
          im.drawImage(mm, 0, 0);
          const Rm = im.getImageData(0, 0, wm, Dm).data;
          this.applyDisplacementMapFromBuffer(Rm, wm, Dm, Tm, fm, Am, am, xm), hm && hm(this)
        }), wm || (() => {}), Dm.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(mm, Tm, fm, hm, Am, am, xm) {
        let wm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(km.m.PositionKind) || !this.isVerticesDataPresent(km.m.NormalKind) || !this.isVerticesDataPresent(km.m.UVKind)) return Cm.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Dm = this.getVerticesData(km.m.PositionKind, !0, !0),
          im = this.getVerticesData(km.m.NormalKind),
          Rm = this.getVerticesData(km.m.UVKind);
        let pm = cm.p.Zero();
        const Em = cm.p.Zero(),
          om = cm.l.Zero();
        am = am || cm.l.Zero(), xm = xm || new cm.l(1, 1);
        for (let Om = 0; Om < Dm.length; Om += 3) {
          cm.p.FromArrayToRef(Dm, Om, pm), cm.p.FromArrayToRef(im, Om, Em), cm.l.FromArrayToRef(Rm, Om / 3 * 2, om);
          const wm = 4 * ((Math.abs(om.x * xm.x + am.x % 1) * (Tm - 1) % Tm | 0) + (Math.abs(om.y * xm.y + am.y % 1) * (fm - 1) % fm | 0) * Tm),
            Ym = .3 * (mm[wm] / 255) + .59 * (mm[wm + 1] / 255) + .11 * (mm[wm + 2] / 255);
          Em.normalize(), Em.scaleInPlace(hm + (Am - hm) * Ym), pm = pm.add(Em), pm.toArray(Dm, Om)
        }
        return bm.c.ComputeNormals(Dm, this.xhm(), im), wm ? (this.setVerticesData(km.m.PositionKind, Dm), this.setVerticesData(km.m.NormalKind, im), this.setVerticesData(km.m.UVKind, Rm)) : (this.updateVerticesData(km.m.PositionKind, Dm), this.updateVerticesData(km.m.NormalKind, im)), this
      }
      _getFlattenedNormals(mm, Tm) {
        const fm = new Float32Array(3 * mm.length);
        let hm = 0;
        const Am = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let am = 0; am < mm.length; am += 3) {
          const xm = cm.p.FromArray(Tm, 3 * mm[am]),
            wm = cm.p.FromArray(Tm, 3 * mm[am + 1]),
            Dm = cm.p.FromArray(Tm, 3 * mm[am + 2]),
            im = xm.subtract(wm),
            Rm = Dm.subtract(wm),
            pm = cm.p.Normalize(cm.p.Cross(im, Rm));
          Am && pm.scaleInPlace(-1);
          for (let mm = 0; mm < 3; mm++) fm[hm++] = pm.x, fm[hm++] = pm.y, fm[hm++] = pm.z
        }
        return fm
      }
      _convertToUnIndexedMesh() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = this.getVerticesDataKinds().filter((mm => !this.getVertexBuffer(mm)?.getIsInstanced())),
          fm = this.xhm(!1, !0),
          hm = {},
          Am = (mm, Tm) => {
            const hm = new Float32Array(fm.length * Tm);
            let Am = 0;
            for (let am = 0; am < fm.length; am++)
              for (let xm = 0; xm < Tm; xm++) hm[Am++] = mm[fm[am] * Tm + xm];
            return hm
          },
          am = this.DH(),
          xm = this.geometry ? this.jK.slice(0) : [];
        for (const wm of Tm) hm[wm] = this.getVerticesData(wm);
        for (const wm of Tm) {
          const Tm = this.getVertexBuffer(wm),
            am = Tm.getSize();
          if (mm && wm === km.m.NormalKind) {
            const mm = this._getFlattenedNormals(fm, hm[km.m.PositionKind]);
            this.setVerticesData(km.m.NormalKind, mm, Tm.isUpdatable(), am)
          } else this.setVerticesData(wm, Am(hm[wm], am), Tm.isUpdatable(), am)
        }
        if (this.morphTargetManager) {
          for (let Tm = 0; Tm < this.morphTargetManager.numTargets; Tm++) {
            const hm = this.morphTargetManager.getTarget(Tm),
              am = hm.getPositions();
            hm.lxm(Am(am, 3));
            const xm = hm.getNormals();
            xm && hm.setNormals(mm ? this._getFlattenedNormals(fm, am) : Am(xm, 3));
            const wm = hm.getTangents();
            wm && hm.setTangents(Am(wm, 3));
            const Dm = hm.getUVs();
            Dm && hm.setUVs(Am(Dm, 2));
            const im = hm.getColors();
            im && hm.setColors(Am(im, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let wm = 0; wm < fm.length; wm++) fm[wm] = wm;
        this.setIndices(fm), this._unIndexed = !0, this.releaseSubMeshes();
        for (const wm of xm) {
          const mm = wm.DH();
          Nm.e.AddToMesh(wm.materialIndex, wm.indexStart, wm.indexCount, wm.indexStart, wm.indexCount, this).setBoundingInfo(mm)
        }
        return this.setBoundingInfo(am), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = bm.c.ExtractFromMesh(this);
        let fm;
        if (mm && this.isVerticesDataPresent(km.m.NormalKind) && Tm.normals) {
          for (fm = 0; fm < Tm.normals.length; fm++) Tm.normals[fm] *= -1;
          this.setVerticesData(km.m.NormalKind, Tm.normals, this.isVertexBufferUpdatable(km.m.NormalKind))
        }
        if (Tm.indices) {
          let mm;
          for (fm = 0; fm < Tm.indices.length; fm += 3) mm = Tm.indices[fm + 1], Tm.indices[fm + 1] = Tm.indices[fm + 2], Tm.indices[fm + 2] = mm;
          this.setIndices(Tm.indices, null, this.isVertexBufferUpdatable(km.m.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Tm = bm.c.ExtractFromMesh(this),
          fm = Tm.indices && !Array.isArray(Tm.indices) && Array.from ? Array.from(Tm.indices) : Tm.indices,
          hm = Tm.positions && !Array.isArray(Tm.positions) && Array.from ? Array.from(Tm.positions) : Tm.positions,
          Am = Tm.uvs && !Array.isArray(Tm.uvs) && Array.from ? Array.from(Tm.uvs) : Tm.uvs,
          am = Tm.normals && !Array.isArray(Tm.normals) && Array.from ? Array.from(Tm.normals) : Tm.normals;
        if (fm && hm) {
          Tm.indices = fm, Tm.positions = hm, Am && (Tm.uvs = Am), am && (Tm.normals = am);
          const xm = mm + 1,
            wm = [];
          for (let mm = 0; mm < xm + 1; mm++) wm[mm] = [];
          let Dm, im;
          const Rm = new cm.p(0, 0, 0),
            pm = new cm.p(0, 0, 0),
            Em = new cm.l(0, 0),
            om = [],
            Om = [],
            Ym = [];
          let qm, jm, Vm, Im = hm.length;
          Am && (jm = Am.length), am && (Vm = am.length);
          for (let mm = 0; mm < fm.length; mm += 3) {
            Om[0] = fm[mm], Om[1] = fm[mm + 1], Om[2] = fm[mm + 2];
            for (let mm = 0; mm < 3; mm++)
              if (Dm = Om[mm], im = Om[(mm + 1) % 3], void 0 === Ym[Dm] && void 0 === Ym[im] ? (Ym[Dm] = [], Ym[im] = []) : (void 0 === Ym[Dm] && (Ym[Dm] = []), void 0 === Ym[im] && (Ym[im] = [])), void 0 === Ym[Dm][im] && void 0 === Ym[im][Dm]) {
                Ym[Dm][im] = [], Rm.x = (hm[3 * im] - hm[3 * Dm]) / xm, Rm.y = (hm[3 * im + 1] - hm[3 * Dm + 1]) / xm, Rm.z = (hm[3 * im + 2] - hm[3 * Dm + 2]) / xm, am && (pm.x = (am[3 * im] - am[3 * Dm]) / xm, pm.y = (am[3 * im + 1] - am[3 * Dm + 1]) / xm, pm.z = (am[3 * im + 2] - am[3 * Dm + 2]) / xm), Am && (Em.x = (Am[2 * im] - Am[2 * Dm]) / xm, Em.y = (Am[2 * im + 1] - Am[2 * Dm + 1]) / xm), Ym[Dm][im].push(Dm);
                for (let mm = 1; mm < xm; mm++) Ym[Dm][im].push(hm.length / 3), hm[Im++] = hm[3 * Dm] + mm * Rm.x, hm[Im++] = hm[3 * Dm + 1] + mm * Rm.y, hm[Im++] = hm[3 * Dm + 2] + mm * Rm.z, am && (am[Vm++] = am[3 * Dm] + mm * pm.x, am[Vm++] = am[3 * Dm + 1] + mm * pm.y, am[Vm++] = am[3 * Dm + 2] + mm * pm.z), Am && (Am[jm++] = Am[2 * Dm] + mm * Em.x, Am[jm++] = Am[2 * Dm + 1] + mm * Em.y);
                Ym[Dm][im].push(im), Ym[im][Dm] = [], qm = Ym[Dm][im].length;
                for (let mm = 0; mm < qm; mm++) Ym[im][Dm][mm] = Ym[Dm][im][qm - 1 - mm]
              } wm[0][0] = fm[mm], wm[1][0] = Ym[fm[mm]][fm[mm + 1]][1], wm[1][1] = Ym[fm[mm]][fm[mm + 2]][1];
            for (let Tm = 2; Tm < xm; Tm++) {
              wm[Tm][0] = Ym[fm[mm]][fm[mm + 1]][Tm], wm[Tm][Tm] = Ym[fm[mm]][fm[mm + 2]][Tm], Rm.x = (hm[3 * wm[Tm][Tm]] - hm[3 * wm[Tm][0]]) / Tm, Rm.y = (hm[3 * wm[Tm][Tm] + 1] - hm[3 * wm[Tm][0] + 1]) / Tm, Rm.z = (hm[3 * wm[Tm][Tm] + 2] - hm[3 * wm[Tm][0] + 2]) / Tm, am && (pm.x = (am[3 * wm[Tm][Tm]] - am[3 * wm[Tm][0]]) / Tm, pm.y = (am[3 * wm[Tm][Tm] + 1] - am[3 * wm[Tm][0] + 1]) / Tm, pm.z = (am[3 * wm[Tm][Tm] + 2] - am[3 * wm[Tm][0] + 2]) / Tm), Am && (Em.x = (Am[2 * wm[Tm][Tm]] - Am[2 * wm[Tm][0]]) / Tm, Em.y = (Am[2 * wm[Tm][Tm] + 1] - Am[2 * wm[Tm][0] + 1]) / Tm);
              for (let mm = 1; mm < Tm; mm++) wm[Tm][mm] = hm.length / 3, hm[Im++] = hm[3 * wm[Tm][0]] + mm * Rm.x, hm[Im++] = hm[3 * wm[Tm][0] + 1] + mm * Rm.y, hm[Im++] = hm[3 * wm[Tm][0] + 2] + mm * Rm.z, am && (am[Vm++] = am[3 * wm[Tm][0]] + mm * pm.x, am[Vm++] = am[3 * wm[Tm][0] + 1] + mm * pm.y, am[Vm++] = am[3 * wm[Tm][0] + 2] + mm * pm.z), Am && (Am[jm++] = Am[2 * wm[Tm][0]] + mm * Em.x, Am[jm++] = Am[2 * wm[Tm][0] + 1] + mm * Em.y)
            }
            wm[xm] = Ym[fm[mm + 1]][fm[mm + 2]], om.push(wm[0][0], wm[1][0], wm[1][1]);
            for (let mm = 1; mm < xm; mm++) {
              let Tm;
              for (Tm = 0; Tm < mm; Tm++) om.push(wm[mm][Tm], wm[mm + 1][Tm], wm[mm + 1][Tm + 1]), om.push(wm[mm][Tm], wm[mm + 1][Tm + 1], wm[mm][Tm + 1]);
              om.push(wm[mm][Tm], wm[mm + 1][Tm], wm[mm + 1][Tm + 1])
            }
          }
          Tm.indices = om, Tm.applyToMesh(this, this.isVertexBufferUpdatable(km.m.PositionKind))
        } else Cm.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const mm = bm.c.ExtractFromMesh(this),
          Tm = mm.uvs,
          fm = mm.indices,
          hm = mm.positions,
          Am = mm.colors,
          am = mm.matricesIndices,
          xm = mm.matricesWeights,
          wm = mm.matricesIndicesExtra,
          Dm = mm.matricesWeightsExtra;
        if (void 0 === fm || void 0 === hm || null === fm || null === hm) Cm.b.Warn("VertexData contains empty entries");
        else {
          const im = [],
            Rm = [],
            pm = [],
            Em = [],
            om = [],
            Om = [],
            Ym = [],
            qm = [];
          let jm, Vm = 0;
          const Im = {};
          let Km, Qm;
          for (let mm = 0; mm < fm.length; mm += 3) {
            Qm = [fm[mm], fm[mm + 1], fm[mm + 2]], jm = [];
            for (let mm = 0; mm < 3; mm++) {
              jm[mm] = "";
              for (let Tm = 0; Tm < 3; Tm++) Math.abs(hm[3 * Qm[mm] + Tm]) < 1e-8 && (hm[3 * Qm[mm] + Tm] = 0), jm[mm] += hm[3 * Qm[mm] + Tm] + "|"
            }
            if (jm[0] != jm[1] && jm[0] != jm[2] && jm[1] != jm[2])
              for (let mm = 0; mm < 3; mm++) {
                if (Km = Im[jm[mm]], void 0 === Km) {
                  Im[jm[mm]] = Vm, Km = Vm++;
                  for (let Tm = 0; Tm < 3; Tm++) im.push(hm[3 * Qm[mm] + Tm]);
                  if (null !== Am && void 0 !== Am)
                    for (let Tm = 0; Tm < 4; Tm++) Em.push(Am[4 * Qm[mm] + Tm]);
                  if (null !== Tm && void 0 !== Tm)
                    for (let fm = 0; fm < 2; fm++) pm.push(Tm[2 * Qm[mm] + fm]);
                  if (null !== am && void 0 !== am)
                    for (let Tm = 0; Tm < 4; Tm++) om.push(am[4 * Qm[mm] + Tm]);
                  if (null !== xm && void 0 !== xm)
                    for (let Tm = 0; Tm < 4; Tm++) Om.push(xm[4 * Qm[mm] + Tm]);
                  if (null !== wm && void 0 !== wm)
                    for (let Tm = 0; Tm < 4; Tm++) Ym.push(wm[4 * Qm[mm] + Tm]);
                  if (null !== Dm && void 0 !== Dm)
                    for (let Tm = 0; Tm < 4; Tm++) qm.push(Dm[4 * Qm[mm] + Tm])
                }
                Rm.push(Km)
              }
          }
          const nm = [];
          bm.c.ComputeNormals(im, Rm, nm), mm.positions = im, mm.indices = Rm, mm.normals = nm, null !== Tm && void 0 !== Tm && (mm.uvs = pm), null !== Am && void 0 !== Am && (mm.colors = Em), null !== am && void 0 !== am && (mm.matricesIndices = om), null !== xm && void 0 !== xm && (mm.matricesWeights = Om), null !== wm && void 0 !== wm && (mm.matricesIndicesExtra = Ym), null !== xm && void 0 !== xm && (mm.matricesWeightsExtra = qm), mm.applyToMesh(this, this.isVertexBufferUpdatable(km.m.PositionKind))
        }
      }
      static _instancedMeshFactory(mm, Tm) {
        throw (0, sm.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(mm, Tm, fm) {
        throw (0, sm.i)("PhysicsImpostor")
      }
      createInstance(mm) {
        const Tm = Wm._instancedMeshFactory(mm, this);
        return Tm.parent = this.parent, Tm
      }
      synchronizeInstances() {
        for (let mm = 0; mm < this.instances.length; mm++) {
          this.instances[mm]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(mm) {
        const Tm = this.xhm(),
          fm = this.getVerticesData(km.m.PositionKind);
        if (!fm || !Tm) return this;
        const hm = [];
        for (let am = 0; am < fm.length; am += 3) hm.push(cm.p.FromArray(fm, am));
        const Am = [];
        return Vm.d.SyncAsyncForLoop(hm.length, 40, (mm => {
          const Tm = hm.length - 1 - mm,
            fm = hm[Tm];
          for (let am = 0; am < Tm; ++am) {
            const mm = hm[am];
            if (fm.equals(mm)) {
              Am[Tm] = am;
              break
            }
          }
        }), (() => {
          for (let mm = 0; mm < Tm.length; ++mm) Tm[mm] = Am[Tm[mm]] || Tm[mm];
          const fm = this.jK.slice(0);
          this.setIndices(Tm), this.jK = fm, mm && mm(this)
        })), this
      }
      serialize() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        mm.name = this.name, mm.id = this.id, mm.uniqueId = this.uniqueId, mm.type = this.getClassName(), Qm.e && Qm.e.HasTags(this) && (mm.tags = Qm.e.GetTags(this)), mm.position = this.position.ahm(), this.rotationQuaternion ? mm.rotationQuaternion = this.rotationQuaternion.ahm() : this.rotation && (mm.rotation = this.rotation.ahm()), mm.fi = this.fi.ahm(), this._postMultiplyPivotMatrix ? mm.pivotMatrix = this.getPivotMatrix().ahm() : mm.localMatrix = this.getPivotMatrix().ahm(), mm.isEnabled = this.isEnabled(!1), mm.isVisible = this.isVisible, mm.infiniteDistance = this.infiniteDistance, mm.pickable = this.xq, mm.receiveShadows = this.receiveShadows, mm.billboardMode = this.billboardMode, mm.visibility = this.visibility, mm.gO = this.gO, mm.checkCollisions = this.checkCollisions, mm.ellipsoid = this.ellipsoid.ahm(), mm.ellipsoidOffset = this.ellipsoidOffset.ahm(), mm.mY = this.mY, mm.isBlocker = this.isBlocker, mm.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (mm.nG = !0), this.parent && this.parent._serializeAsParent(mm), mm.isUnIndexed = this.isUnIndexed;
        const Tm = this._geometry;
        if (Tm && this.jK) {
          mm.geometryUniqueId = Tm.uniqueId, mm.geometryId = Tm.id, mm.jK = [];
          for (let Tm = 0; Tm < this.jK.length; Tm++) {
            const fm = this.jK[Tm];
            mm.jK.push({
              materialIndex: fm.materialIndex,
              verticesStart: fm.verticesStart,
              verticesCount: fm.verticesCount,
              indexStart: fm.indexStart,
              indexCount: fm.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (mm.materialUniqueId = this.material.uniqueId, mm.materialId = this.material.id) : (this.material = null, mm.materialUniqueId = this._scene.defaultMaterial.uniqueId, mm.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (mm.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (mm.skeletonId = this.skeleton.id, mm.skeletonUniqueId = this.skeleton.uniqueId, mm.numBoneInfluencers = this.numBoneInfluencers), this.wG()._getComponent(lm.c.NAME_PHYSICSENGINE)) {
          const Tm = this.getPhysicsImpostor?.();
          Tm && (mm.physicsMass = Tm.getParam("Ri"), mm.physicsFriction = Tm.getParam("friction"), mm.physicsRestitution = Tm.getParam("Ri"), mm.physicsImpostor = Tm.type)
        }
        this.metadata && (mm.metadata = this.metadata), 0 !== this.meshBlendingTag && (mm.meshBlendingTag = this.meshBlendingTag), mm.instances = [];
        for (let fm = 0; fm < this.instances.length; fm++) {
          const Tm = this.instances[fm];
          if (Tm.doNotSerialize) continue;
          const hm = {
            name: Tm.name,
            id: Tm.id,
            isEnabled: Tm.isEnabled(!1),
            isVisible: Tm.isVisible,
            xq: Tm.xq,
            checkCollisions: Tm.checkCollisions,
            position: Tm.position.ahm(),
            fi: Tm.fi.ahm()
          };
          if (Tm.parent && Tm.parent._serializeAsParent(hm), Tm.rotationQuaternion ? hm.rotationQuaternion = Tm.rotationQuaternion.ahm() : Tm.rotation && (hm.rotation = Tm.rotation.ahm()), this.wG()._getComponent(lm.c.NAME_PHYSICSENGINE)) {
            const mm = Tm.getPhysicsImpostor?.();
            mm && (hm.physicsMass = mm.getParam("Ri"), hm.physicsFriction = mm.getParam("friction"), hm.physicsRestitution = mm.getParam("Ri"), hm.physicsImpostor = mm.type)
          }
          Tm.metadata && (hm.metadata = Tm.metadata), Tm.actionManager && (hm.actions = Tm.actionManager.serialize(Tm.name)), mm.instances.push(hm), ym.d.AppendSerializedAnimations(Tm, hm), hm.mo = Tm.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (mm.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.ZTm
          }, this._userThinInstanceBuffersStorage)) {
          const Tm = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const mm in this._userThinInstanceBuffersStorage.data) Tm.data[mm] = Array.from(this._userThinInstanceBuffersStorage.data[mm]), Tm.sizes[mm] = this._userThinInstanceBuffersStorage.sizes[mm], Tm.strides[mm] = this._userThinInstanceBuffersStorage.strides[mm];
          mm.thinInstances.userThinInstance = Tm
        }
        return ym.d.AppendSerializedAnimations(this, mm), mm.mo = this.serializeAnimationRanges(), mm.layerMask = this.layerMask, mm.alphaIndex = this.alphaIndex, mm.hasVertexAlpha = this.hasVertexAlpha, mm.overlayAlpha = this.overlayAlpha, mm.overlayColor = this.overlayColor.ahm(), mm.renderOverlay = this.renderOverlay, mm.applyFog = this.applyFog, this.actionManager && (mm.actions = this.actionManager.serialize(this.name)), mm
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const mm = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (mm && mm.vertexCount) {
          if (mm.vertexCount !== this.getTotalVertices()) return Cm.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (mm.isUsingTextureForTargets) return;
          for (let Tm = 0; Tm < mm.numInfluencers; Tm++) {
            const fm = mm.getActiveTarget(Tm),
              hm = fm.getPositions();
            if (!hm) return void Cm.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(km.m.PositionKind + Tm, hm, !1, 3);
            const Am = fm.getNormals();
            Am && this.geometry.setVerticesData(km.m.NormalKind + Tm, Am, !1, 3);
            const am = fm.getTangents();
            am && this.geometry.setVerticesData(km.m.TangentKind + Tm, am, !1, 3);
            const xm = fm.getUVs();
            xm && this.geometry.setVerticesData(km.m.UVKind + "_" + Tm, xm, !1, 2);
            const wm = fm.getUV2s();
            wm && this.geometry.setVerticesData(km.m.UV2Kind + "_" + Tm, wm, !1, 2);
            const Dm = fm.getColors();
            Dm && this.geometry.setVerticesData(km.m.ColorKind + Tm, Dm, !1, 4)
          }
        } else {
          let mm = 0;
          for (; this.geometry.isVerticesDataPresent(km.m.PositionKind + mm);) this.geometry.removeVerticesData(km.m.PositionKind + mm), this.geometry.isVerticesDataPresent(km.m.NormalKind + mm) && this.geometry.removeVerticesData(km.m.NormalKind + mm), this.geometry.isVerticesDataPresent(km.m.TangentKind + mm) && this.geometry.removeVerticesData(km.m.TangentKind + mm), this.geometry.isVerticesDataPresent(km.m.UVKind + "_" + mm) && this.geometry.removeVerticesData(km.m.UVKind + "_" + mm), this.geometry.isVerticesDataPresent(km.m.UV2Kind + "_" + mm) && this.geometry.removeVerticesData(km.m.UV2Kind + "_" + mm), this.geometry.isVerticesDataPresent(km.m.ColorKind + mm) && this.geometry.removeVerticesData(km.m.ColorKind + mm), mm++
        }
      }
      static Parse(mm, Tm, fm) {
        let hm, Am = !1;
        if (mm.type && "LinesMesh" === mm.type ? hm = Wm._LinesMeshParser(mm, Tm) : mm.type && "GroundMesh" === mm.type ? hm = Wm._GroundMeshParser(mm, Tm) : mm.type && "GoldbergMesh" === mm.type ? hm = Wm._GoldbergMeshParser(mm, Tm) : mm.type && "GreasedLineMesh" === mm.type ? hm = Wm._GreasedLineMeshParser(mm, Tm) : mm.type && "TrailMesh" === mm.type ? hm = Wm._TrailMeshParser(mm, Tm) : mm.type && "GaussianSplattingMesh" === mm.type ? (hm = mm._isCompound ? Wm._GaussianSplattingCompoundMeshParser(mm, Tm) : Wm._GaussianSplattingMeshParser(mm, Tm), Am = !0) : mm.type && "GaussianSplattingPartProxyMesh" === mm.type ? (hm = Wm._GaussianSplattingPartProxyMeshParser(mm, Tm), Am = !0) : hm = new Wm(mm.name, Tm), hm.id = mm.id, hm._waitingParsedUniqueId = mm.uniqueId, Qm.e && Qm.e.AddTagsTo(hm, mm.tags), hm.position = cm.p.FromArray(mm.position), void 0 !== mm.metadata && (hm.metadata = mm.metadata), void 0 !== mm.meshBlendingTag && (hm.meshBlendingTag = mm.meshBlendingTag), mm.rotationQuaternion ? hm.rotationQuaternion = cm.h.FromArray(mm.rotationQuaternion) : mm.rotation && (hm.rotation = cm.p.FromArray(mm.rotation)), hm.fi = cm.p.FromArray(mm.fi), mm.localMatrix ? hm.setPreTransformMatrix(cm.e.FromArray(mm.localMatrix)) : mm.pivotMatrix && hm.setPivotMatrix(cm.e.FromArray(mm.pivotMatrix)), hm.Dk(mm.isEnabled), hm.isVisible = mm.isVisible, hm.infiniteDistance = mm.infiniteDistance, hm.gO = !!mm.gO, hm.showBoundingBox = mm.showBoundingBox, hm.showSubMeshesBoundingBox = mm.showSubMeshesBoundingBox, void 0 !== mm.applyFog && (hm.applyFog = mm.applyFog), void 0 !== mm.pickable && (hm.xq = mm.pickable), void 0 !== mm.alphaIndex && (hm.alphaIndex = mm.alphaIndex), hm.receiveShadows = mm.receiveShadows, void 0 !== mm.billboardMode && (hm.billboardMode = mm.billboardMode), void 0 !== mm.visibility && (hm.visibility = mm.visibility), hm.checkCollisions = mm.checkCollisions, hm.mY = !!mm.mY, mm.ellipsoid && (hm.ellipsoid = cm.p.FromArray(mm.ellipsoid)), mm.ellipsoidOffset && (hm.ellipsoidOffset = cm.p.FromArray(mm.ellipsoidOffset)), null != mm.overrideMaterialSideOrientation && (hm.sideOrientation = mm.overrideMaterialSideOrientation), void 0 !== mm.sideOrientation && (hm.sideOrientation = mm.sideOrientation), void 0 !== mm.isBlocker && (hm.isBlocker = mm.isBlocker), hm._shouldGenerateFlatShading = mm.useFlatShading, mm.nG && (hm._waitingData.nG = mm.nG), void 0 !== mm.parentId && (hm._waitingParentId = mm.parentId), void 0 !== mm.parentInstanceIndex && (hm._waitingParentInstanceIndex = mm.parentInstanceIndex), void 0 !== mm.actions && (hm._waitingData.actions = mm.actions), void 0 !== mm.overlayAlpha && (hm.overlayAlpha = mm.overlayAlpha), void 0 !== mm.overlayColor && (hm.overlayColor = zm.b.FromArray(mm.overlayColor)), void 0 !== mm.renderOverlay && (hm.renderOverlay = mm.renderOverlay), hm.isUnIndexed = !!mm.isUnIndexed, hm.hasVertexAlpha = mm.hasVertexAlpha, mm.delayLoadingFile ? (hm.delayLoadState = 4, hm.delayLoadingFile = fm + mm.delayLoadingFile, hm.buildBoundingInfo(cm.p.FromArray(mm.boundingBoxMinimum), cm.p.FromArray(mm.boundingBoxMaximum)), mm._binaryInfo && (hm._binaryInfo = mm._binaryInfo), hm._delayInfo = [], mm.hasUVs && hm._delayInfo.push(km.m.UVKind), mm.hasUVs2 && hm._delayInfo.push(km.m.UV2Kind), mm.hasUVs3 && hm._delayInfo.push(km.m.UV3Kind), mm.hasUVs4 && hm._delayInfo.push(km.m.UV4Kind), mm.hasUVs5 && hm._delayInfo.push(km.m.UV5Kind), mm.hasUVs6 && hm._delayInfo.push(km.m.UV6Kind), mm.hasColors && hm._delayInfo.push(km.m.ColorKind), mm.hasMatricesIndices && hm._delayInfo.push(km.m.MatricesIndicesKind), mm.hasMatricesWeights && hm._delayInfo.push(km.m.MatricesWeightsKind), hm._delayLoadingFunction = Sm.d._ImportGeometry, Hm.c.ForceFullSceneLoadingForIncremental && hm._checkDelayState()) : Am || Sm.d._ImportGeometry(mm, hm), mm.materialUniqueId ? hm._waitingMaterialId = mm.materialUniqueId : mm.materialId && (hm._waitingMaterialId = mm.materialId), mm.morphTargetManagerId > -1 && (hm._waitingMorphTargetManagerId = mm.morphTargetManagerId), void 0 !== mm.skeletonId && null !== mm.skeletonId && (hm.skeleton = Tm.getLastSkeletonById(mm.skeletonId), hm._waitingSkeletonId = mm.skeletonId, mm.numBoneInfluencers && (hm.numBoneInfluencers = mm.numBoneInfluencers)), void 0 !== mm.skeletonUniqueId && null !== mm.skeletonUniqueId && (hm._waitingSkeletonUniqueId = mm.skeletonUniqueId), mm.animations) {
          for (let Tm = 0; Tm < mm.animations.length; Tm++) {
            const fm = mm.animations[Tm],
              Am = (0, rm.c)("BABYLON.Animation");
            Am && hm.animations.push(Am.Parse(fm))
          }
          Zm.c.ParseAnimationRanges(hm, mm, Tm)
        }
        if (mm.autoAnimate && Tm.beginAnimation(hm, mm.autoAnimateFrom, mm.autoAnimateTo, mm.autoAnimateLoop, mm.autoAnimateSpeed || 1), mm.layerMask && !isNaN(mm.layerMask) ? hm.layerMask = Math.abs(parseInt(mm.layerMask)) : hm.layerMask = 268435455, mm.physicsImpostor && (hm.physicsImpostor = Wm._PhysicsImpostorParser(Tm, hm, mm)), mm.lodMeshIds && (hm._waitingData.lods = {
            ids: mm.lodMeshIds,
            distances: mm.lodDistances ? mm.lodDistances : null,
            coverages: mm.lodCoverages ? mm.lodCoverages : null
          }), mm.instances)
          for (let am = 0; am < mm.instances.length; am++) {
            const fm = mm.instances[am],
              Am = hm.createInstance(fm.name);
            if (fm.id && (Am.id = fm.id), Qm.e && (fm.tags ? Qm.e.AddTagsTo(Am, fm.tags) : Qm.e.AddTagsTo(Am, mm.tags)), Am.position = cm.p.FromArray(fm.position), void 0 !== fm.metadata && (Am.metadata = fm.metadata), void 0 !== fm.parentId && (Am._waitingParentId = fm.parentId), void 0 !== fm.parentInstanceIndex && (Am._waitingParentInstanceIndex = fm.parentInstanceIndex), void 0 !== fm.isEnabled && null !== fm.isEnabled && Am.Dk(fm.isEnabled), void 0 !== fm.isVisible && null !== fm.isVisible && (Am.isVisible = fm.isVisible), void 0 !== fm.xq && null !== fm.xq && (Am.xq = fm.xq), fm.rotationQuaternion ? Am.rotationQuaternion = cm.h.FromArray(fm.rotationQuaternion) : fm.rotation && (Am.rotation = cm.p.FromArray(fm.rotation)), Am.fi = cm.p.FromArray(fm.fi), void 0 != fm.checkCollisions && null != fm.checkCollisions && (Am.checkCollisions = fm.checkCollisions), void 0 != fm.pickable && null != fm.pickable && (Am.xq = fm.pickable), void 0 != fm.showBoundingBox && null != fm.showBoundingBox && (Am.showBoundingBox = fm.showBoundingBox), void 0 != fm.showSubMeshesBoundingBox && null != fm.showSubMeshesBoundingBox && (Am.showSubMeshesBoundingBox = fm.showSubMeshesBoundingBox), void 0 != fm.alphaIndex && null != fm.showSubMeshesBoundingBox && (Am.alphaIndex = fm.alphaIndex), fm.physicsImpostor && (Am.physicsImpostor = Wm._PhysicsImpostorParser(Tm, Am, fm)), void 0 !== fm.actions && (Am._waitingData.actions = fm.actions), fm.animations) {
              for (let mm = 0; mm < fm.animations.length; mm++) {
                const Tm = fm.animations[mm],
                  hm = (0, rm.c)("BABYLON.Animation");
                hm && Am.animations.push(hm.Parse(Tm))
              }
              Zm.c.ParseAnimationRanges(Am, fm, Tm), fm.autoAnimate && Tm.beginAnimation(Am, fm.autoAnimateFrom, fm.autoAnimateTo, fm.autoAnimateLoop, fm.autoAnimateSpeed || 1)
            }
          }
        if (mm.thinInstances) {
          const Tm = mm.thinInstances;
          if (hm.ZTm = !!Tm.enablePicking, Tm.matrixData ? (hm.I3("matrix", new Float32Array(Tm.matrixData), 16, !1), hm._thinInstanceDataStorage.matrixBufferSize = Tm.matrixBufferSize, hm._thinInstanceDataStorage.instancesCount = Tm.instancesCount) : hm._thinInstanceDataStorage.matrixBufferSize = Tm.matrixBufferSize, mm.thinInstances.userThinInstance) {
            const Tm = mm.thinInstances.userThinInstance;
            for (const mm in Tm.data) hm.I3(mm, new Float32Array(Tm.data[mm]), Tm.strides[mm], !1), hm._userThinInstanceBuffersStorage.sizes[mm] = Tm.sizes[mm]
          }
        }
        return hm
      }
      setPositionsForCPUSkinning() {
        const mm = this._internalMeshDataInfo;
        if (!mm._sourcePositions) {
          const Tm = this.getVerticesData(km.m.PositionKind);
          if (!Tm) return mm._sourcePositions;
          mm._sourcePositions = new Float32Array(Tm), this.isVertexBufferUpdatable(km.m.PositionKind) || this.setVerticesData(km.m.PositionKind, Tm, !0)
        }
        return mm._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const mm = this._internalMeshDataInfo;
        if (!mm._sourceNormals) {
          const Tm = this.getVerticesData(km.m.NormalKind);
          if (!Tm) return mm._sourceNormals;
          mm._sourceNormals = new Float32Array(Tm), this.isVertexBufferUpdatable(km.m.NormalKind) || this.setVerticesData(km.m.NormalKind, Tm, !0)
        }
        return mm._sourceNormals
      }
      applySkeleton(mm) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.wG().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.wG().getFrameId(), !this.isVerticesDataPresent(km.m.PositionKind)) return this;
        if (!this.isVerticesDataPresent(km.m.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(km.m.MatricesWeightsKind)) return this;
        const Tm = this.isVerticesDataPresent(km.m.NormalKind),
          fm = this._internalMeshDataInfo;
        if (!fm._sourcePositions) {
          const mm = this.jK.slice();
          this.setPositionsForCPUSkinning(), this.jK = mm
        }
        Tm && !fm._sourceNormals && this.setNormalsForCPUSkinning();
        let hm = this.getVerticesData(km.m.PositionKind);
        if (!hm) return this;
        hm instanceof Float32Array || (hm = new Float32Array(hm));
        let Am = this.getVerticesData(km.m.NormalKind);
        if (Tm) {
          if (!Am) return this;
          Am instanceof Float32Array || (Am = new Float32Array(Am))
        }
        const am = this.getVerticesData(km.m.MatricesIndicesKind),
          xm = this.getVerticesData(km.m.MatricesWeightsKind);
        if (!xm || !am) return this;
        const wm = this.numBoneInfluencers > 4,
          Dm = wm ? this.getVerticesData(km.m.MatricesIndicesExtraKind) : null,
          im = wm ? this.getVerticesData(km.m.MatricesWeightsExtraKind) : null,
          Rm = mm.getTransformMatrices(this),
          pm = cm.p.Zero(),
          Em = new cm.e,
          om = new cm.e;
        let Om, Ym = 0;
        for (let qm = 0; qm < hm.length; qm += 3, Ym += 4) {
          let mm;
          for (Om = 0; Om < 4; Om++) mm = xm[Ym + Om], mm > 0 && (cm.e.FromFloat32ArrayToRefScaled(Rm, Math.floor(16 * am[Ym + Om]), mm, om), Em.addToSelf(om));
          if (wm)
            for (Om = 0; Om < 4; Om++) mm = im[Ym + Om], mm > 0 && (cm.e.FromFloat32ArrayToRefScaled(Rm, Math.floor(16 * Dm[Ym + Om]), mm, om), Em.addToSelf(om));
          cm.p.TransformCoordinatesFromFloatsToRef(fm._sourcePositions[qm], fm._sourcePositions[qm + 1], fm._sourcePositions[qm + 2], Em, pm), pm.toArray(hm, qm), Tm && (cm.p.TransformNormalFromFloatsToRef(fm._sourceNormals[qm], fm._sourceNormals[qm + 1], fm._sourceNormals[qm + 2], Em, pm), pm.toArray(Am, qm)), Em.reset()
        }
        return this.updateVerticesData(km.m.PositionKind, hm), Tm && this.updateVerticesData(km.m.NormalKind, Am), this
      }
      static MinMax(mm) {
        let Tm = null,
          fm = null;
        for (const hm of mm) {
          const mm = hm.DH().boundingBox;
          Tm && fm ? (Tm.minimizeInPlace(mm.minimumWorld), fm.maximizeInPlace(mm.maximumWorld)) : (Tm = mm.minimumWorld.clone(), fm = mm.maximumWorld.clone())
        }
        return Tm && fm ? {
          min: Tm,
          max: fm
        } : {
          min: cm.p.Zero(),
          max: cm.p.Zero()
        }
      }
      static Center(mm) {
        const Tm = mm instanceof Array ? Wm.MinMax(mm) : mm;
        return cm.p.Center(Tm.min, Tm.max)
      }
      static MergeMeshes(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 ? arguments[5] : void 0;
        return (0, nm.h)(Wm._MergeMeshesCoroutine(mm, Tm, fm, hm, Am, am, !1))
      }
      static async MergeMeshesAsync(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, nm.f)(Wm._MergeMeshesCoroutine(mm, Tm, fm, hm, Am, am, !0), (0, nm.b)())
      }
      static * _MergeMeshesCoroutine(mm) {
        let Tm, fm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hm = arguments.length > 2 ? arguments[2] : void 0,
          Am = arguments.length > 3 ? arguments[3] : void 0,
          am = arguments.length > 4 ? arguments[4] : void 0,
          xm = arguments.length > 5 ? arguments[5] : void 0,
          wm = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (mm = mm.filter(Boolean)).length) return null;
        if (!hm) {
          let fm = 0;
          for (Tm = 0; Tm < mm.length; Tm++)
            if (fm += mm[Tm].getTotalVertices(), fm >= 65536) return Cm.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Dm = mm[0];
        xm && (am = !1, mm.sort(((mm, Tm) => (mm.material?.uniqueId ?? -1) - (Tm.material?.uniqueId ?? -1))));
        const im = new Array,
          Rm = new Array,
          pm = new Array,
          Em = mm[0].sideOrientation;
        for (Tm = 0; Tm < mm.length; Tm++) {
          const fm = mm[Tm];
          if (fm.pG) return Cm.b.Warn("Cannot merge instance meshes."), null;
          if (Em !== fm.sideOrientation) return Cm.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (am || xm) {
            const mm = pm.reduce(((mm, Tm) => Math.max(mm, Tm.start + Tm.count)), 0);
            if (xm)
              if (fm.material) {
                const Tm = fm.material;
                if (Tm instanceof Pm.e) {
                  for (let mm = 0; mm < Tm.B3.length; mm++) im.indexOf(Tm.B3[mm]) < 0 && im.push(Tm.B3[mm]);
                  for (let hm = 0; hm < fm.jK.length; hm++) Rm.push(im.indexOf(Tm.B3[fm.jK[hm].materialIndex])), pm.push({
                    start: mm + fm.jK[hm].indexStart,
                    count: fm.jK[hm].indexCount
                  })
                } else {
                  im.indexOf(Tm) < 0 && im.push(Tm);
                  for (let hm = 0; hm < fm.jK.length; hm++) Rm.push(im.indexOf(Tm)), pm.push({
                    start: mm + fm.jK[hm].indexStart,
                    count: fm.jK[hm].indexCount
                  })
                }
              } else
                for (let Tm = 0; Tm < fm.jK.length; Tm++) Rm.push(0), pm.push({
                  start: mm + fm.jK[Tm].indexStart,
                  count: fm.jK[Tm].indexCount
                });
            else pm.push({
              start: mm,
              count: fm.getTotalIndices()
            })
          }
        }
        if (xm && pm.length > 1) {
          let mm = 0;
          for (let Tm = 1; Tm < pm.length; Tm++) {
            const fm = pm[mm],
              hm = pm[Tm];
            Rm[Tm] === Rm[mm] && fm.start + fm.count === hm.start ? fm.count += hm.count : (mm++, pm[mm] = hm, Rm[mm] = Rm[Tm])
          }
          pm.length = mm + 1, Rm.length = mm + 1
        }
        const om = mm => {
            const Tm = mm.computeWorldMatrix(!0);
            return {
              vertexData: bm.c.ExtractFromMesh(mm, !1, !1),
              transform: Tm
            }
          },
          {
            vertexData: Om,
            transform: Ym
          } = om(mm[0]);
        wm && (yield);
        const qm = new Array(mm.length - 1);
        for (let nm = 1; nm < mm.length; nm++) qm[nm - 1] = om(mm[nm]), wm && (yield);
        const jm = Om._mergeCoroutine(Ym, qm, hm, wm, !fm);
        let Vm = jm.next();
        for (; !Vm.done;) wm && (yield), Vm = jm.next();
        const Im = Vm.value;
        Am || (Am = new Wm(Dm.name + "_merged", Dm.wG()));
        const Km = Im._applyToCoroutine(Am, void 0, wm);
        let Qm = Km.next();
        for (; !Qm.done;) wm && (yield), Qm = Km.next();
        if (Am.checkCollisions = Dm.checkCollisions, Am.sideOrientation = Dm.sideOrientation, fm)
          for (Tm = 0; Tm < mm.length; Tm++) mm[Tm].dispose();
        if (am || xm) {
          for (Am.releaseSubMeshes(), Tm = 0; Tm < pm.length;) Nm.e.CreateFromIndices(0, pm[Tm].start, pm[Tm].count, Am, void 0, !1), Tm++;
          for (const mm of Am.jK) mm.refreshBoundingInfo();
          Am.computeWorldMatrix(!0)
        }
        if (xm) {
          const mm = new Pm.e(Dm.name + "_merged", Dm.wG());
          mm.B3 = im;
          for (let Tm = 0; Tm < Am.jK.length; Tm++) Am.jK[Tm].materialIndex = Rm[Tm];
          Am.material = mm
        } else Am.material = Dm.material;
        return Am
      }
      W4(mm) {
        mm._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(mm)
      }
      I9(mm) {
        const Tm = mm._indexInSourceMeshInstanceArray;
        if (-1 != Tm) {
          if (Tm !== this.instances.length - 1) {
            const mm = this.instances[this.instances.length - 1];
            this.instances[Tm] = mm, mm._indexInSourceMeshInstanceArray = Tm
          }
          mm._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === Gm.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(mm) {
        const Tm = this.wG();
        return Tm.forcePointsCloud ? Gm.d.PointFillMode : Tm.forceWireframe ? Gm.d.WireFrameFillMode : this.overrideRenderingFillMode ?? mm
      }
      setMaterialByID(mm) {
        return this.setMaterialById(mm)
      }
      static CreateRibbon(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(mm, Tm, fm, hm, Am, am) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(mm, Tm, fm, hm, Am) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(mm, Tm, fm, hm, Am, am) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(mm, Tm, fm, hm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(mm, Tm, fm, hm, Am, am, xm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(mm, Tm, fm, hm, Am) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(mm, Tm, fm, hm, Am, am, xm, wm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(mm, Tm, fm, hm, Am, am, xm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(mm, Tm, fm, hm, Am, am, xm, wm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(mm, Tm, fm, hm, Am, am, xm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(mm, Tm, fm, hm, Am) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(mm, Tm, fm, hm, Am, am) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(mm, Tm, fm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(mm, Tm, fm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(mm, Tm, fm, hm, Am, am) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(mm, Tm, fm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(mm) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Wm.FRONTSIDE = bm.c.FRONTSIDE, Wm.BACKSIDE = bm.c.BACKSIDE, Wm.DOUBLESIDE = bm.c.DOUBLESIDE, Wm.DEFAULTSIDE = bm.c.DEFAULTSIDE, Wm.NO_CAP = 0, Wm.CAP_START = 1, Wm.CAP_END = 2, Wm.CAP_ALL = 3, Wm.NO_FLIP = 0, Wm.FLIP_TILE = 1, Wm.ROTATE_TILE = 2, Wm.FLIP_ROW = 3, Wm.ROTATE_ROW = 4, Wm.FLIP_N_ROTATE_TILE = 5, Wm.FLIP_N_ROTATE_ROW = 6, Wm.CENTER = 0, Wm.LEFT = 1, Wm.RIGHT = 2, Wm.TOP = 3, Wm.BOTTOM = 4, Wm.INSTANCEDMESH_SORT_TRANSPARENT = !1, Wm._GroundMeshParser = (mm, Tm) => {
      throw (0, sm.i)("GroundMesh")
    }, Wm._GoldbergMeshParser = (mm, Tm) => {
      throw (0, sm.i)("GoldbergMesh")
    }, Wm._LinesMeshParser = (mm, Tm) => {
      throw (0, sm.i)("LinesMesh")
    }, Wm._GreasedLineMeshParser = (mm, Tm) => {
      throw (0, sm.i)("GreasedLineMesh")
    }, Wm._GreasedLineRibbonMeshParser = (mm, Tm) => {
      throw (0, sm.i)("GreasedLineRibbonMesh")
    }, Wm._TrailMeshParser = (mm, Tm) => {
      throw (0, sm.i)("TrailMesh")
    }, Wm._GaussianSplattingMeshParser = (mm, Tm) => {
      throw (0, sm.i)("GaussianSplattingMesh")
    }, Wm._GaussianSplattingPartProxyMeshParser = (mm, Tm) => {
      throw (0, sm.i)("GaussianSplattingPartProxyMesh")
    }, Wm._GaussianSplattingCompoundMeshParser = (mm, Tm) => {
      throw (0, sm.i)("GaussianSplattingCompoundMesh")
    };
    let Fm = !1;

    function mT() {
      Fm || (Fm = !0, (0, rm.d)("BABYLON.Mesh", Wm))
    }(hm = Wm.prototype).FX ?? (hm.FX = (0, sm.f)("Mesh", "FX")), (Am = Wm.prototype).simplify ?? (Am.simplify = (0, sm.f)("Mesh", "simplify")), (am = Wm.prototype).thinInstanceAdd ?? (am.thinInstanceAdd = (0, sm.f)("Mesh", "thinInstanceAdd")), (xm = Wm.prototype).thinInstanceAddSelf ?? (xm.thinInstanceAddSelf = (0, sm.f)("Mesh", "thinInstanceAddSelf")), (wm = Wm.prototype).thinInstanceRegisterAttribute ?? (wm.thinInstanceRegisterAttribute = (0, sm.f)("Mesh", "thinInstanceRegisterAttribute")), (Dm = Wm.prototype).thinInstanceSetMatrixAt ?? (Dm.thinInstanceSetMatrixAt = (0, sm.f)("Mesh", "thinInstanceSetMatrixAt")), (im = Wm.prototype).thinInstanceSetAttributeAt ?? (im.thinInstanceSetAttributeAt = (0, sm.f)("Mesh", "thinInstanceSetAttributeAt")), (Rm = Wm.prototype).I3 ?? (Rm.I3 = (0, sm.f)("Mesh", "I3")), (pm = Wm.prototype).thinInstanceGetWorldMatrices ?? (pm.thinInstanceGetWorldMatrices = (0, sm.f)("Mesh", "thinInstanceGetWorldMatrices")), (Em = Wm.prototype).u9 ?? (Em.u9 = (0, sm.f)("Mesh", "u9")), (om = Wm.prototype).thinInstancePartialBufferUpdate ?? (om.thinInstancePartialBufferUpdate = (0, sm.f)("Mesh", "thinInstancePartialBufferUpdate")), (Om = Wm.prototype).thinInstanceRefreshBoundingInfo ?? (Om.thinInstanceRefreshBoundingInfo = (0, sm.f)("Mesh", "thinInstanceRefreshBoundingInfo")), (Ym = Wm.prototype).getEmittedParticleSystems ?? (Ym.getEmittedParticleSystems = (0, sm.f)("Mesh", "getEmittedParticleSystems")), (qm = Wm.prototype).getHierarchyEmittedParticleSystems ?? (qm.getHierarchyEmittedParticleSystems = (0, sm.f)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Wm.prototype, "edgesShareWithInstances") || Object.defineProperty(Wm.prototype, "edgesShareWithInstances", (0, sm.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Wm.prototype, "ZTm") || Object.defineProperty(Wm.prototype, "ZTm", (0, sm.e)("Mesh", "ZTm")), Object.getOwnPropertyDescriptor(Wm.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Wm.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, sm.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Wm.prototype, "o4") || Object.defineProperty(Wm.prototype, "o4", (0, sm.e)("Mesh", "o4"))
  },
  40527: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Om
    });
    var hm = fm(40113),
      Am = fm(37185),
      am = fm(40251),
      xm = fm(39993),
      wm = fm(37336),
      Dm = fm(38766),
      im = fm(40119),
      Rm = fm(40518),
      pm = fm(40166),
      Em = fm(40391);
    class om {}
    let Om = (() => {
      var mm;
      let Tm, fm, Om, Ym, qm = [];
      return mm = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Rm.d)(this._applyToCoroutine.bind(this)), this.uniqueId = mm._UniqueIdGenerator, mm._UniqueIdGenerator++
        }
        set(mm, Tm) {
          switch (mm.length || Dm.b.Warn(`Setting vertex data kind '${Tm}' with an empty array`), Tm) {
            case am.m.PositionKind:
              this.positions = mm;
              break;
            case am.m.NormalKind:
              this.normals = mm;
              break;
            case am.m.TangentKind:
              this.tangents = mm;
              break;
            case am.m.UVKind:
              this.uvs = mm;
              break;
            case am.m.UV2Kind:
              this.uvs2 = mm;
              break;
            case am.m.UV3Kind:
              this.uvs3 = mm;
              break;
            case am.m.UV4Kind:
              this.uvs4 = mm;
              break;
            case am.m.UV5Kind:
              this.uvs5 = mm;
              break;
            case am.m.UV6Kind:
              this.uvs6 = mm;
              break;
            case am.m.ColorKind:
              this.colors = mm;
              break;
            case am.m.MatricesIndicesKind:
              this.matricesIndices = mm;
              break;
            case am.m.MatricesWeightsKind:
              this.matricesWeights = mm;
              break;
            case am.m.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = mm;
              break;
            case am.m.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = mm
          }
        }
        applyToMesh(mm, Tm) {
          return this._applyTo(mm, Tm, !1), this
        }
        applyToGeometry(mm, Tm) {
          return this._applyTo(mm, Tm, !1), this
        }
        updateMesh(mm) {
          return this._update(mm), this
        }
        updateGeometry(mm) {
          return this._update(mm), this
        }* _applyToCoroutine(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            fm = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (mm.setVerticesData(am.m.PositionKind, this.positions, Tm), fm && (yield)), this.normals && (mm.setVerticesData(am.m.NormalKind, this.normals, Tm), fm && (yield)), this.tangents && (mm.setVerticesData(am.m.TangentKind, this.tangents, Tm), fm && (yield)), this.uvs && (mm.setVerticesData(am.m.UVKind, this.uvs, Tm), fm && (yield)), this.uvs2 && (mm.setVerticesData(am.m.UV2Kind, this.uvs2, Tm), fm && (yield)), this.uvs3 && (mm.setVerticesData(am.m.UV3Kind, this.uvs3, Tm), fm && (yield)), this.uvs4 && (mm.setVerticesData(am.m.UV4Kind, this.uvs4, Tm), fm && (yield)), this.uvs5 && (mm.setVerticesData(am.m.UV5Kind, this.uvs5, Tm), fm && (yield)), this.uvs6 && (mm.setVerticesData(am.m.UV6Kind, this.uvs6, Tm), fm && (yield)), this.colors) {
            const hm = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            mm.setVerticesData(am.m.ColorKind, this.colors, Tm, hm), this.hasVertexAlpha && void 0 !== mm.hasVertexAlpha && (mm.hasVertexAlpha = !0), fm && (yield)
          }
          if (this.matricesIndices && (mm.setVerticesData(am.m.MatricesIndicesKind, this.matricesIndices, Tm), fm && (yield)), this.matricesWeights && (mm.setVerticesData(am.m.MatricesWeightsKind, this.matricesWeights, Tm), fm && (yield)), this.matricesIndicesExtra && (mm.setVerticesData(am.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, Tm), fm && (yield)), this.matricesWeightsExtra && (mm.setVerticesData(am.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, Tm), fm && (yield)), this.indices ? (mm.setIndices(this.indices, null, Tm), fm && (yield)) : mm.setIndices([], null), mm.jK && this.materialInfos && this.materialInfos.length > 1) {
            const Tm = mm;
            Tm.jK = [];
            for (const mm of this.materialInfos) new Em.e(mm.materialIndex, mm.verticesStart, mm.verticesCount, mm.indexStart, mm.indexCount, Tm)
          }
          return this
        }
        _update(mm, Tm, fm) {
          return this.positions && mm.updateVerticesData(am.m.PositionKind, this.positions, Tm, fm), this.normals && mm.updateVerticesData(am.m.NormalKind, this.normals, Tm, fm), this.tangents && mm.updateVerticesData(am.m.TangentKind, this.tangents, Tm, fm), this.uvs && mm.updateVerticesData(am.m.UVKind, this.uvs, Tm, fm), this.uvs2 && mm.updateVerticesData(am.m.UV2Kind, this.uvs2, Tm, fm), this.uvs3 && mm.updateVerticesData(am.m.UV3Kind, this.uvs3, Tm, fm), this.uvs4 && mm.updateVerticesData(am.m.UV4Kind, this.uvs4, Tm, fm), this.uvs5 && mm.updateVerticesData(am.m.UV5Kind, this.uvs5, Tm, fm), this.uvs6 && mm.updateVerticesData(am.m.UV6Kind, this.uvs6, Tm, fm), this.colors && mm.updateVerticesData(am.m.ColorKind, this.colors, Tm, fm), this.matricesIndices && mm.updateVerticesData(am.m.MatricesIndicesKind, this.matricesIndices, Tm, fm), this.matricesWeights && mm.updateVerticesData(am.m.MatricesWeightsKind, this.matricesWeights, Tm, fm), this.matricesIndicesExtra && mm.updateVerticesData(am.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, Tm, fm), this.matricesWeightsExtra && mm.updateVerticesData(am.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, Tm, fm), this.indices && mm.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm.length;
          const am = Am.j.WO[0],
            xm = Am.j.WO[1];
          for (let wm = fm; wm < fm + hm; wm += 3) Am.p.FromArrayToRef(mm, wm, am), Am.p.TransformCoordinatesToRef(am, Tm, xm), mm[wm] = xm.x, mm[wm + 1] = xm.y, mm[wm + 2] = xm.z
        }
        static _TransformVector3Normals(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm.length;
          const am = Am.j.WO[0],
            xm = Am.j.WO[1];
          for (let wm = fm; wm < fm + hm; wm += 3) Am.p.FromArrayToRef(mm, wm, am), Am.p.TransformNormalToRef(am, Tm, xm), mm[wm] = xm.x, mm[wm + 1] = xm.y, mm[wm + 2] = xm.z
        }
        static _TransformVector4Normals(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm.length;
          const am = Am.j.Vector4[0],
            xm = Am.j.Vector4[1];
          for (let wm = fm; wm < fm + hm; wm += 4) Am.t.FromArrayToRef(mm, wm, am), Am.t.TransformNormalToRef(am, Tm, xm), mm[wm] = xm.x, mm[wm + 1] = xm.y, mm[wm + 2] = xm.z, mm[wm + 3] = xm.w
        }
        static _FlipFaces(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mm.length;
          for (let hm = Tm; hm < Tm + fm; hm += 3) {
            const Tm = mm[hm + 1];
            mm[hm + 1] = mm[hm + 2], mm[hm + 2] = Tm
          }
        }
        transform(Tm) {
          const fm = Tm.determinant() < 0;
          return this.positions && mm._TransformVector3Coordinates(this.positions, Tm), this.normals && mm._TransformVector3Normals(this.normals, Tm), this.tangents && mm._TransformVector4Normals(this.tangents, Tm), fm && this.indices && mm._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Tm = [];
          for (const fm of this.materialInfos) {
            const hm = new mm;
            if (this.positions && (hm.positions = this.positions.slice(3 * fm.verticesStart, 3 * (fm.verticesCount + fm.verticesStart))), this.normals && (hm.normals = this.normals.slice(3 * fm.verticesStart, 3 * (fm.verticesCount + fm.verticesStart))), this.tangents && (hm.tangents = this.tangents.slice(4 * fm.verticesStart, 4 * (fm.verticesCount + fm.verticesStart))), this.colors && (hm.colors = this.colors.slice(4 * fm.verticesStart, 4 * (fm.verticesCount + fm.verticesStart))), this.uvs && (hm.uvs = this.uvs.slice(2 * fm.verticesStart, 2 * (fm.verticesCount + fm.verticesStart))), this.uvs2 && (hm.uvs2 = this.uvs2.slice(2 * fm.verticesStart, 2 * (fm.verticesCount + fm.verticesStart))), this.uvs3 && (hm.uvs3 = this.uvs3.slice(2 * fm.verticesStart, 2 * (fm.verticesCount + fm.verticesStart))), this.uvs4 && (hm.uvs4 = this.uvs4.slice(2 * fm.verticesStart, 2 * (fm.verticesCount + fm.verticesStart))), this.uvs5 && (hm.uvs5 = this.uvs5.slice(2 * fm.verticesStart, 2 * (fm.verticesCount + fm.verticesStart))), this.uvs6 && (hm.uvs6 = this.uvs6.slice(2 * fm.verticesStart, 2 * (fm.verticesCount + fm.verticesStart))), this.matricesIndices && (hm.matricesIndices = this.matricesIndices.slice(4 * fm.verticesStart, 4 * (fm.verticesCount + fm.verticesStart))), this.matricesIndicesExtra && (hm.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * fm.verticesStart, 4 * (fm.verticesCount + fm.verticesStart))), this.matricesWeights && (hm.matricesWeights = this.matricesWeights.slice(4 * fm.verticesStart, 4 * (fm.verticesCount + fm.verticesStart))), this.matricesWeightsExtra && (hm.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * fm.verticesStart, 4 * (fm.verticesCount + fm.verticesStart))), this.indices) {
              hm.indices = [];
              for (let mm = fm.indexStart; mm < fm.indexStart + fm.indexCount; mm++) hm.indices.push(this.indices[mm] - fm.verticesStart)
            }
            const Am = new om;
            Am.indexStart = 0, Am.indexCount = hm.indices ? hm.indices.length : 0, Am.materialIndex = fm.materialIndex, Am.verticesStart = 0, Am.verticesCount = (hm.positions ? hm.positions.length : 0) / 3, hm.materialInfos = [Am], Tm.push(hm)
          }
          return Tm
        }
        merge(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const am = Array.isArray(mm) ? mm.map((mm => ({
            vertexData: mm
          }))) : [{
            vertexData: mm
          }];
          return (0, Rm.h)(this._mergeCoroutine(void 0, am, Tm, !1, fm, hm, Am))
        }* _mergeCoroutine(Tm, fm) {
          let hm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Am = arguments.length > 3 ? arguments[3] : void 0,
            xm = arguments.length > 4 ? arguments[4] : void 0,
            wm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Dm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let im = fm.map((mm => mm.vertexData)),
            Rm = this;
          if (Dm)
            for (const mm of im) mm && (mm._validate(), !this.normals && mm.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && mm.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && mm.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && mm.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && mm.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && mm.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && mm.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && mm.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && mm.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && mm.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && mm.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && mm.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && mm.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const mm of im)
            if (mm)
              if (Dm) this.normals && !mm.normals && (mm.normals = new Float32Array(mm.positions.length)), this.tangents && !mm.tangents && (mm.tangents = new Float32Array(mm.positions.length / 3 * 4)), this.uvs && !mm.uvs && (mm.uvs = new Float32Array(mm.positions.length / 3 * 2)), this.uvs2 && !mm.uvs2 && (mm.uvs2 = new Float32Array(mm.positions.length / 3 * 2)), this.uvs3 && !mm.uvs3 && (mm.uvs3 = new Float32Array(mm.positions.length / 3 * 2)), this.uvs4 && !mm.uvs4 && (mm.uvs4 = new Float32Array(mm.positions.length / 3 * 2)), this.uvs5 && !mm.uvs5 && (mm.uvs5 = new Float32Array(mm.positions.length / 3 * 2)), this.uvs6 && !mm.uvs6 && (mm.uvs6 = new Float32Array(mm.positions.length / 3 * 2)), this.colors && !mm.colors && (mm.colors = new Float32Array(mm.positions.length / 3 * 4), mm.colors.fill(1)), this.matricesIndices && !mm.matricesIndices && (mm.matricesIndices = new Float32Array(mm.positions.length / 3 * 4)), this.matricesWeights && !mm.matricesWeights && (mm.matricesWeights = new Float32Array(mm.positions.length / 3 * 4)), this.matricesIndicesExtra && !mm.matricesIndicesExtra && (mm.matricesIndicesExtra = new Float32Array(mm.positions.length / 3 * 4)), this.matricesWeightsExtra && !mm.matricesWeightsExtra && (mm.matricesWeightsExtra = new Float32Array(mm.positions.length / 3 * 4));
              else if (mm._validate(), !this.normals !== !mm.normals || !this.tangents !== !mm.tangents || !this.uvs !== !mm.uvs || !this.uvs2 !== !mm.uvs2 || !this.uvs3 !== !mm.uvs3 || !this.uvs4 !== !mm.uvs4 || !this.uvs5 !== !mm.uvs5 || !this.uvs6 !== !mm.uvs6 || !this.colors !== !mm.colors || !this.matricesIndices !== !mm.matricesIndices || !this.matricesWeights !== !mm.matricesWeights || !this.matricesIndicesExtra !== !mm.matricesIndicesExtra || !this.matricesWeightsExtra !== !mm.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (wm) {
            let mm, hm = 0,
              Am = 0;
            const am = [];
            let xm = null;
            const wm = [];
            for (const fm of this.splitBasedOnMaterialID()) wm.push({
              vertexData: fm,
              transform: Tm
            });
            for (const Tm of fm)
              if (Tm.vertexData)
                for (const mm of Tm.vertexData.splitBasedOnMaterialID()) wm.push({
                  vertexData: mm,
                  transform: Tm.transform
                });
            wm.sort(((mm, Tm) => {
              const fm = mm.vertexData.materialInfos ? mm.vertexData.materialInfos[0].materialIndex : 0,
                hm = Tm.vertexData.materialInfos ? Tm.vertexData.materialInfos[0].materialIndex : 0;
              return fm > hm ? 1 : fm === hm ? 0 : -1
            }));
            for (const Tm of wm) {
              const fm = Tm.vertexData;
              if (mm = fm.materialInfos ? fm.materialInfos[0].materialIndex : 0, xm && xm.materialIndex === mm) xm.indexCount += fm.indices.length, xm.verticesCount += fm.positions.length / 3;
              else {
                const Tm = new om;
                Tm.materialIndex = mm, Tm.indexStart = hm, Tm.indexCount = fm.indices.length, Tm.verticesStart = Am, Tm.verticesCount = fm.positions.length / 3, am.push(Tm), xm = Tm
              }
              hm += fm.indices.length, Am += fm.positions.length / 3
            }
            const Dm = wm.splice(0, 1)[0];
            Rm = Dm.vertexData, Tm = Dm.transform, im = wm.map((mm => mm.vertexData)), fm = wm, this.materialInfos = am
          }
          const pm = im.reduce(((mm, Tm) => mm + (Tm.indices?.length ?? 0)), Rm.indices?.length ?? 0);
          let Em = xm || im.some((mm => mm.indices === Rm.indices)) ? Rm.indices?.slice() : Rm.indices;
          if (pm > 0) {
            let am = Em?.length ?? 0;
            if (Em || (Em = new Array(pm)), Em.length !== pm) {
              if (Array.isArray(Em)) Em.length = pm;
              else {
                const mm = hm || Em instanceof Uint32Array ? new Uint32Array(pm) : new Uint16Array(pm);
                mm.set(Em), Em = mm
              }
              Tm && Tm.determinant() < 0 && mm._FlipFaces(Em, 0, am)
            }
            let xm = Rm.positions ? Rm.positions.length / 3 : 0;
            for (const {
                vertexData: Tm,
                transform: hm
              }
              of fm)
              if (Tm.indices) {
                for (let mm = 0; mm < Tm.indices.length; mm++) Em[am + mm] = Tm.indices[mm] + xm;
                hm && hm.determinant() < 0 && mm._FlipFaces(Em, am, Tm.indices.length), xm += Tm.positions.length / 3, am += Tm.indices.length, Am && (yield)
              }
          }
          return this.indices = Em, this.positions = mm._MergeElement(am.m.PositionKind, Rm.positions, Tm, fm.map((mm => [mm.vertexData.positions, mm.transform]))), Am && (yield), Rm.normals && (this.normals = mm._MergeElement(am.m.NormalKind, Rm.normals, Tm, fm.map((mm => [mm.vertexData.normals, mm.transform]))), Am && (yield)), Rm.tangents && (this.tangents = mm._MergeElement(am.m.TangentKind, Rm.tangents, Tm, fm.map((mm => [mm.vertexData.tangents, mm.transform]))), Am && (yield)), Rm.uvs && (this.uvs = mm._MergeElement(am.m.UVKind, Rm.uvs, Tm, fm.map((mm => [mm.vertexData.uvs, mm.transform]))), Am && (yield)), Rm.uvs2 && (this.uvs2 = mm._MergeElement(am.m.UV2Kind, Rm.uvs2, Tm, fm.map((mm => [mm.vertexData.uvs2, mm.transform]))), Am && (yield)), Rm.uvs3 && (this.uvs3 = mm._MergeElement(am.m.UV3Kind, Rm.uvs3, Tm, fm.map((mm => [mm.vertexData.uvs3, mm.transform]))), Am && (yield)), Rm.uvs4 && (this.uvs4 = mm._MergeElement(am.m.UV4Kind, Rm.uvs4, Tm, fm.map((mm => [mm.vertexData.uvs4, mm.transform]))), Am && (yield)), Rm.uvs5 && (this.uvs5 = mm._MergeElement(am.m.UV5Kind, Rm.uvs5, Tm, fm.map((mm => [mm.vertexData.uvs5, mm.transform]))), Am && (yield)), Rm.uvs6 && (this.uvs6 = mm._MergeElement(am.m.UV6Kind, Rm.uvs6, Tm, fm.map((mm => [mm.vertexData.uvs6, mm.transform]))), Am && (yield)), Rm.colors && (this.colors = mm._MergeElement(am.m.ColorKind, Rm.colors, Tm, fm.map((mm => [mm.vertexData.colors, mm.transform]))), (void 0 !== Rm.hasVertexAlpha || fm.some((mm => void 0 !== mm.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Rm.hasVertexAlpha || fm.some((mm => mm.vertexData.hasVertexAlpha))), Am && (yield)), Rm.matricesIndices && (this.matricesIndices = mm._MergeElement(am.m.MatricesIndicesKind, Rm.matricesIndices, Tm, fm.map((mm => [mm.vertexData.matricesIndices, mm.transform]))), Am && (yield)), Rm.matricesWeights && (this.matricesWeights = mm._MergeElement(am.m.MatricesWeightsKind, Rm.matricesWeights, Tm, fm.map((mm => [mm.vertexData.matricesWeights, mm.transform]))), Am && (yield)), Rm.matricesIndicesExtra && (this.matricesIndicesExtra = mm._MergeElement(am.m.MatricesIndicesExtraKind, Rm.matricesIndicesExtra, Tm, fm.map((mm => [mm.vertexData.matricesIndicesExtra, mm.transform]))), Am && (yield)), Rm.matricesWeightsExtra && (this.matricesWeightsExtra = mm._MergeElement(am.m.MatricesWeightsExtraKind, Rm.matricesWeightsExtra, Tm, fm.map((mm => [mm.vertexData.matricesWeightsExtra, mm.transform])))), this
        }
        static _MergeElement(Tm, fm, hm, Am) {
          const xm = Am.filter((mm => null !== mm[0] && void 0 !== mm[0]));
          if (!fm && 0 == xm.length) return fm;
          if (!fm) return this._MergeElement(Tm, xm[0][0], xm[0][1], xm.slice(1));
          const wm = xm.reduce(((mm, Tm) => mm + Tm[0].length), fm.length),
            Dm = Tm === am.m.PositionKind ? mm._TransformVector3Coordinates : Tm === am.m.NormalKind ? mm._TransformVector3Normals : Tm === am.m.TangentKind ? mm._TransformVector4Normals : () => {};
          if (fm instanceof Float32Array) {
            const mm = new Float32Array(wm);
            mm.set(fm), hm && Dm(mm, hm, 0, fm.length);
            let Tm = fm.length;
            for (const [fm, hm] of xm) mm.set(fm, Tm), hm && Dm(mm, hm, Tm, fm.length), Tm += fm.length;
            return mm
          } {
            const mm = new Array(wm);
            for (let hm = 0; hm < fm.length; hm++) mm[hm] = fm[hm];
            hm && Dm(mm, hm, 0, fm.length);
            let Tm = fm.length;
            for (const [fm, hm] of xm) {
              for (let hm = 0; hm < fm.length; hm++) mm[Tm + hm] = fm[hm];
              hm && Dm(mm, hm, Tm, fm.length), Tm += fm.length
            }
            return mm
          }
        }
        _validate() {
          if (!this.positions) throw new pm.h("Positions are required", pm.e.MeshInvalidPositionsError);
          const mm = (mm, Tm) => {
              const fm = (0, am.i)(mm);
              if (Tm.length % fm !== 0) throw new Error("The " + mm + "s array count must be a multiple of " + fm);
              return Tm.length / fm
            },
            Tm = mm(am.m.PositionKind, this.positions),
            fm = (fm, hm) => {
              const Am = mm(fm, hm);
              if (Am !== Tm) throw new Error("The " + fm + "s element count (" + Am + ") does not match the positions count (" + Tm + ")")
            };
          this.normals && fm(am.m.NormalKind, this.normals), this.tangents && fm(am.m.TangentKind, this.tangents), this.uvs && fm(am.m.UVKind, this.uvs), this.uvs2 && fm(am.m.UV2Kind, this.uvs2), this.uvs3 && fm(am.m.UV3Kind, this.uvs3), this.uvs4 && fm(am.m.UV4Kind, this.uvs4), this.uvs5 && fm(am.m.UV5Kind, this.uvs5), this.uvs6 && fm(am.m.UV6Kind, this.uvs6), this.colors && fm(am.m.ColorKind, this.colors), this.matricesIndices && fm(am.m.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && fm(am.m.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && fm(am.m.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && fm(am.m.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const Tm = this.serialize();
          return mm.Parse(Tm)
        }
        serialize() {
          const mm = {};
          if (this.positions && (mm.positions = Array.from(this.positions)), this.normals && (mm.normals = Array.from(this.normals)), this.tangents && (mm.tangents = Array.from(this.tangents)), this.uvs && (mm.uvs = Array.from(this.uvs)), this.uvs2 && (mm.uvs2 = Array.from(this.uvs2)), this.uvs3 && (mm.uvs3 = Array.from(this.uvs3)), this.uvs4 && (mm.uvs4 = Array.from(this.uvs4)), this.uvs5 && (mm.uvs5 = Array.from(this.uvs5)), this.uvs6 && (mm.uvs6 = Array.from(this.uvs6)), this.colors && (mm.colors = Array.from(this.colors), mm.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (mm.matricesIndices = Array.from(this.matricesIndices), mm.matricesIndicesExpanded = !0), this.matricesWeights && (mm.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (mm.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), mm.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (mm.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), mm.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            mm.materialInfos = [];
            for (const Tm of this.materialInfos) {
              const fm = {
                indexStart: Tm.indexStart,
                indexCount: Tm.indexCount,
                materialIndex: Tm.materialIndex,
                verticesStart: Tm.verticesStart,
                verticesCount: Tm.verticesCount
              };
              mm.materialInfos.push(fm)
            }
          }
          return mm
        }
        static ExtractFromMesh(Tm, fm, hm) {
          return mm._ExtractFrom(Tm, fm, hm)
        }
        static ExtractFromGeometry(Tm, fm, hm) {
          return mm._ExtractFrom(Tm, fm, hm)
        }
        static _ExtractFrom(Tm, fm, hm) {
          const Am = new mm;
          if (Tm.isVerticesDataPresent(am.m.PositionKind) && (Am.positions = Tm.getVerticesData(am.m.PositionKind, fm, hm)), Tm.isVerticesDataPresent(am.m.NormalKind) && (Am.normals = Tm.getVerticesData(am.m.NormalKind, fm, hm)), Tm.isVerticesDataPresent(am.m.TangentKind) && (Am.tangents = Tm.getVerticesData(am.m.TangentKind, fm, hm)), Tm.isVerticesDataPresent(am.m.UVKind) && (Am.uvs = Tm.getVerticesData(am.m.UVKind, fm, hm)), Tm.isVerticesDataPresent(am.m.UV2Kind) && (Am.uvs2 = Tm.getVerticesData(am.m.UV2Kind, fm, hm)), Tm.isVerticesDataPresent(am.m.UV3Kind) && (Am.uvs3 = Tm.getVerticesData(am.m.UV3Kind, fm, hm)), Tm.isVerticesDataPresent(am.m.UV4Kind) && (Am.uvs4 = Tm.getVerticesData(am.m.UV4Kind, fm, hm)), Tm.isVerticesDataPresent(am.m.UV5Kind) && (Am.uvs5 = Tm.getVerticesData(am.m.UV5Kind, fm, hm)), Tm.isVerticesDataPresent(am.m.UV6Kind) && (Am.uvs6 = Tm.getVerticesData(am.m.UV6Kind, fm, hm)), Tm.isVerticesDataPresent(am.m.ColorKind)) {
            const mm = Tm.geometry || Tm,
              xm = mm.getVertexBuffer(am.m.ColorKind),
              wm = mm.getVerticesData(am.m.ColorKind, fm, hm);
            if (3 === xm.getSize()) {
              const mm = new Float32Array(4 * wm.length / 3);
              for (let Tm = 0, fm = 0; Tm < wm.length; Tm += 3, fm += 4) mm[fm] = wm[Tm], mm[fm + 1] = wm[Tm + 1], mm[fm + 2] = wm[Tm + 2], mm[fm + 3] = 1;
              Am.colors = mm
            } else {
              if (4 !== xm.getSize()) throw new Error(`Unexpected number of color components: ${xm.getSize()}`);
              Am.colors = wm
            }
          }
          return Tm.isVerticesDataPresent(am.m.MatricesIndicesKind) && (Am.matricesIndices = Tm.getVerticesData(am.m.MatricesIndicesKind, fm, hm)), Tm.isVerticesDataPresent(am.m.MatricesWeightsKind) && (Am.matricesWeights = Tm.getVerticesData(am.m.MatricesWeightsKind, fm, hm)), Tm.isVerticesDataPresent(am.m.MatricesIndicesExtraKind) && (Am.matricesIndicesExtra = Tm.getVerticesData(am.m.MatricesIndicesExtraKind, fm, hm)), Tm.isVerticesDataPresent(am.m.MatricesWeightsExtraKind) && (Am.matricesWeightsExtra = Tm.getVerticesData(am.m.MatricesWeightsExtraKind, fm, hm)), Am.indices = Tm.xhm(fm, hm), Am
        }
        static CreateRibbon(mm) {
          throw (0, xm.i)("ribbonBuilder")
        }
        static CreateBox(mm) {
          throw (0, xm.i)("boxBuilder")
        }
        static CreateTiledBox(mm) {
          throw (0, xm.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(mm) {
          throw (0, xm.i)("tiledPlaneBuilder")
        }
        static CreateSphere(mm) {
          throw (0, xm.i)("sphereBuilder")
        }
        static CreateCylinder(mm) {
          throw (0, xm.i)("cylinderBuilder")
        }
        static CreateTorus(mm) {
          throw (0, xm.i)("torusBuilder")
        }
        static CreateLineSystem(mm) {
          throw (0, xm.i)("linesBuilder")
        }
        static CreateDashedLines(mm) {
          throw (0, xm.i)("linesBuilder")
        }
        static CreateGround(mm) {
          throw (0, xm.i)("groundBuilder")
        }
        static CreateTiledGround(mm) {
          throw (0, xm.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(mm) {
          throw (0, xm.i)("groundBuilder")
        }
        static CreatePlane(mm) {
          throw (0, xm.i)("planeBuilder")
        }
        static CreateDisc(mm) {
          throw (0, xm.i)("discBuilder")
        }
        static CreatePolygon(mm, Tm, fm, hm, Am, am, wm) {
          throw (0, xm.i)("polygonBuilder")
        }
        static CreateIcoSphere(mm) {
          throw (0, xm.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(mm) {
          throw (0, xm.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Am.p.Up();
          throw (0, xm.i)("capsuleBuilder")
        }
        static CreateTorusKnot(mm) {
          throw (0, xm.i)("torusKnotBuilder")
        }
        static ComputeNormals(mm, Tm, fm, hm) {
          let am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm, zm = !1,
            Zm = !1,
            km = !1,
            bm = !1,
            Sm = 1,
            em = 0,
            Nm = null;
          hm && (zm = !!hm.facetNormals, Zm = !!hm.facetPositions, km = !!hm.facetPartitioning, Sm = !0 === hm.useRightHandedSystem ? -1 : 1, em = hm.ratio || 0, bm = !!hm.depthSort, Nm = hm.distanceTo, bm && void 0 === Nm && (Nm = Am.p.Zero()));
          let Gm = 0,
            Xm = 0,
            Pm = 0,
            Hm = 0;
          for (km && hm && hm.bbSize && (Gm = hm.subDiv.X * em / hm.bbSize.x, Xm = hm.subDiv.Y * em / hm.bbSize.y, Pm = hm.subDiv.Z * em / hm.bbSize.z, Hm = hm.subDiv.max * hm.subDiv.max, hm.facetPartitioning.length = 0), am = 0; am < mm.length; am++) fm[am] = 0;
          const ym = Tm.length / 3 | 0;
          for (am = 0; am < ym; am++) {
            if (qm = 3 * Tm[3 * am], jm = qm + 1, Vm = qm + 2, Im = 3 * Tm[3 * am + 1], Km = Im + 1, Qm = Im + 2, nm = 3 * Tm[3 * am + 2], Jm = nm + 1, cm = nm + 2, xm = mm[qm] - mm[Im], wm = mm[jm] - mm[Km], Dm = mm[Vm] - mm[Qm], im = mm[nm] - mm[Im], Rm = mm[Jm] - mm[Km], pm = mm[cm] - mm[Qm], Em = Sm * (wm * pm - Dm * Rm), om = Sm * (Dm * im - xm * pm), Om = Sm * (xm * Rm - wm * im), Ym = Math.sqrt(Em * Em + om * om + Om * Om), Ym = 0 === Ym ? 1 : Ym, Em /= Ym, om /= Ym, Om /= Ym, zm && hm && (hm.facetNormals[am].x = Em, hm.facetNormals[am].y = om, hm.facetNormals[am].z = Om), Zm && hm && (hm.facetPositions[am].x = (mm[qm] + mm[Im] + mm[nm]) / 3, hm.facetPositions[am].y = (mm[jm] + mm[Km] + mm[Jm]) / 3, hm.facetPositions[am].z = (mm[Vm] + mm[Qm] + mm[cm]) / 3), km && hm) {
              const Tm = Math.floor((hm.facetPositions[am].x - hm.bInfo.minimum.x * em) * Gm),
                fm = Math.floor((hm.facetPositions[am].y - hm.bInfo.minimum.y * em) * Xm),
                Am = Math.floor((hm.facetPositions[am].z - hm.bInfo.minimum.z * em) * Pm),
                xm = Math.floor((mm[qm] - hm.bInfo.minimum.x * em) * Gm),
                wm = Math.floor((mm[jm] - hm.bInfo.minimum.y * em) * Xm),
                Dm = Math.floor((mm[Vm] - hm.bInfo.minimum.z * em) * Pm),
                im = Math.floor((mm[Im] - hm.bInfo.minimum.x * em) * Gm),
                Rm = Math.floor((mm[Km] - hm.bInfo.minimum.y * em) * Xm),
                pm = Math.floor((mm[Qm] - hm.bInfo.minimum.z * em) * Pm),
                Em = Math.floor((mm[nm] - hm.bInfo.minimum.x * em) * Gm),
                om = Math.floor((mm[Jm] - hm.bInfo.minimum.y * em) * Xm),
                Om = Math.floor((mm[cm] - hm.bInfo.minimum.z * em) * Pm),
                Ym = xm + hm.subDiv.max * wm + Hm * Dm,
                zm = im + hm.subDiv.max * Rm + Hm * pm,
                Zm = Em + hm.subDiv.max * om + Hm * Om,
                km = Tm + hm.subDiv.max * fm + Hm * Am;
              hm.facetPartitioning[km] = hm.facetPartitioning[km] ? hm.facetPartitioning[km] : [], hm.facetPartitioning[Ym] = hm.facetPartitioning[Ym] ? hm.facetPartitioning[Ym] : [], hm.facetPartitioning[zm] = hm.facetPartitioning[zm] ? hm.facetPartitioning[zm] : [], hm.facetPartitioning[Zm] = hm.facetPartitioning[Zm] ? hm.facetPartitioning[Zm] : [], hm.facetPartitioning[Ym].push(am), zm != Ym && hm.facetPartitioning[zm].push(am), Zm != zm && Zm != Ym && hm.facetPartitioning[Zm].push(am), km != Ym && km != zm && km != Zm && hm.facetPartitioning[km].push(am)
            }
            if (bm && hm && hm.facetPositions) {
              const mm = hm.depthSortedFacets[am];
              mm.ind = 3 * am, mm.sqDistance = Am.p.DistanceSquared(hm.facetPositions[am], Nm)
            }
            fm[qm] += Em, fm[jm] += om, fm[Vm] += Om, fm[Im] += Em, fm[Km] += om, fm[Qm] += Om, fm[nm] += Em, fm[Jm] += om, fm[cm] += Om
          }
          for (am = 0; am < fm.length / 3; am++) Em = fm[3 * am], om = fm[3 * am + 1], Om = fm[3 * am + 2], Ym = Math.sqrt(Em * Em + om * om + Om * Om), Ym = 0 === Ym ? 1 : Ym, Em /= Ym, om /= Ym, Om /= Ym, fm[3 * am] = Em, fm[3 * am + 1] = om, fm[3 * am + 2] = Om
        }
        static _ComputeSides(Tm, fm, hm, am, xm, wm, Dm) {
          const im = hm.length,
            Rm = am.length;
          let pm, Em;
          switch (Tm = Tm || mm.DEFAULTSIDE) {
            case mm.FRONTSIDE:
              break;
            case mm.BACKSIDE:
              for (pm = 0; pm < im; pm += 3) {
                const mm = hm[pm];
                hm[pm] = hm[pm + 2], hm[pm + 2] = mm
              }
              for (Em = 0; Em < Rm; Em++) am[Em] = -am[Em];
              break;
            case mm.DOUBLESIDE: {
              const mm = fm.length,
                Tm = mm / 3;
              for (let hm = 0; hm < mm; hm++) fm[mm + hm] = fm[hm];
              for (pm = 0; pm < im; pm += 3) hm[pm + im] = hm[pm + 2] + Tm, hm[pm + 1 + im] = hm[pm + 1] + Tm, hm[pm + 2 + im] = hm[pm] + Tm;
              for (Em = 0; Em < Rm; Em++) am[Rm + Em] = -am[Em];
              const om = xm.length;
              let Om;
              for (Om = 0; Om < om; Om++) xm[Om + om] = xm[Om];
              for (wm = wm || new Am.t(0, 0, 1, 1), Dm = Dm || new Am.t(0, 0, 1, 1), Om = 0, pm = 0; pm < om / 2; pm++) xm[Om] = wm.x + (wm.z - wm.x) * xm[Om], xm[Om + 1] = wm.y + (wm.w - wm.y) * xm[Om + 1], xm[Om + om] = Dm.x + (Dm.z - Dm.x) * xm[Om + om], xm[Om + om + 1] = Dm.y + (Dm.w - Dm.y) * xm[Om + om + 1], Om += 2;
              break
            }
          }
        }
        static Parse(Tm) {
          const fm = new mm,
            hm = Tm.positions;
          hm && fm.set(hm, am.m.PositionKind);
          const Am = Tm.normals;
          Am && fm.set(Am, am.m.NormalKind);
          const xm = Tm.tangents;
          xm && fm.set(xm, am.m.TangentKind);
          const Dm = Tm.uvs;
          Dm && fm.set(Dm, am.m.UVKind);
          const im = Tm.uvs2;
          im && fm.set(im, am.m.UV2Kind);
          const Rm = Tm.uvs3;
          Rm && fm.set(Rm, am.m.UV3Kind);
          const pm = Tm.uvs4;
          pm && fm.set(pm, am.m.UV4Kind);
          const Em = Tm.uvs5;
          Em && fm.set(Em, am.m.UV5Kind);
          const Om = Tm.uvs6;
          Om && fm.set(Om, am.m.UV6Kind);
          const Ym = Tm.colors;
          Ym && (fm.set(wm.c.CheckColors4(Ym, hm.length / 3), am.m.ColorKind), void 0 !== Tm.hasVertexAlpha && (fm.hasVertexAlpha = Tm.hasVertexAlpha));
          const qm = Tm.matricesIndices;
          qm && fm.set(qm, am.m.MatricesIndicesKind);
          const jm = Tm.matricesWeights;
          jm && fm.set(jm, am.m.MatricesWeightsKind);
          const Vm = Tm.indices;
          Vm && (fm.indices = Vm);
          const Im = Tm.materialInfos;
          if (Im) {
            fm.materialInfos = [];
            for (const mm of Im) {
              const Tm = new om;
              Tm.indexCount = mm.indexCount, Tm.indexStart = mm.indexStart, Tm.verticesCount = mm.verticesCount, Tm.verticesStart = mm.verticesStart, Tm.materialIndex = mm.materialIndex, fm.materialInfos.push(Tm)
            }
          }
          return fm
        }
        static ImportVertexData(Tm, fm) {
          const hm = mm.Parse(Tm);
          fm.setAllVerticesData(hm, Tm.updatable)
        }
      }, (() => {
        const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [im.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], fm = [im.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Om = [im.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Ym = [im.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, hm.g)(mm, null, Tm, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: mm => "_TransformVector3Coordinates" in mm,
            get: mm => mm._TransformVector3Coordinates
          },
          metadata: Am
        }, null, qm), (0, hm.g)(mm, null, fm, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: mm => "_TransformVector3Normals" in mm,
            get: mm => mm._TransformVector3Normals
          },
          metadata: Am
        }, null, qm), (0, hm.g)(mm, null, Om, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: mm => "_TransformVector4Normals" in mm,
            get: mm => mm._TransformVector4Normals
          },
          metadata: Am
        }, null, qm), (0, hm.g)(mm, null, Ym, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: mm => "_FlipFaces" in mm,
            get: mm => mm._FlipFaces
          },
          metadata: Am
        }, null, qm), Am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Am
        })
      })(), mm.FRONTSIDE = ((0, hm.i)(mm, qm), 0), mm.BACKSIDE = 1, mm.DOUBLESIDE = 2, mm.DEFAULTSIDE = 0, mm._UniqueIdGenerator = 0, mm
    })()
  },
  40590: (mm, Tm, fm) => {
    var hm = fm(37185),
      Am = fm(38766),
      am = fm(40404),
      xm = fm(40513),
      wm = fm(40251);
    const Dm = "bakedVertexAnimationSettingsInstanced";

    function im(mm) {
      const Tm = mm.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Tm instanceof Float32Array || Tm instanceof Uint16Array
    }

    function Rm(mm, Tm, fm, hm) {
      fm.Y5(Number.POSITIVE_INFINITY), hm.Y5(Number.NEGATIVE_INFINITY);
      for (let Am = 0; Am < 3 * Tm; Am += 3) {
        const Tm = mm[Am],
          am = mm[Am + 1],
          xm = mm[Am + 2];
        Tm < fm.x && (fm.x = Tm), am < fm.y && (fm.y = am), xm < fm.z && (fm.z = xm), Tm > hm.x && (hm.x = Tm), am > hm.y && (hm.y = am), xm > hm.z && (hm.z = xm)
      }
    }

    function pm(mm, Tm, fm) {
      fm && (mm.x -= mm.x * fm.x + fm.y, mm.y -= mm.y * fm.x + fm.y, mm.z -= mm.z * fm.x + fm.y, Tm.x += Tm.x * fm.x + fm.y, Tm.y += Tm.y * fm.x + fm.y, Tm.z += Tm.z * fm.x + fm.y)
    }

    function Em(mm, Tm, fm, Am, am) {
      const xm = hm.j.WO[7],
        wm = hm.j.WO[8];
      for (let Dm = 0; Dm < 2; ++Dm)
        for (let im = 0; im < 2; ++im)
          for (let Rm = 0; Rm < 2; ++Rm) xm.set(Dm ? Tm.x : mm.x, im ? Tm.y : mm.y, Rm ? Tm.z : mm.z), hm.p.TransformCoordinatesToRef(xm, fm, wm), Am.minimizeInPlace(wm), am.maximizeInPlace(wm)
    }

    function om(mm, Tm, fm, Am, am) {
      const xm = hm.j.WO[7];
      for (let wm = 0; wm < 3 * Tm; wm += 3) hm.p.TransformCoordinatesFromFloatsToRef(mm[wm], mm[wm + 1], mm[wm + 2], fm, xm), Am.minimizeInPlace(xm), am.maximizeInPlace(xm)
    }
    let Om = !1;
    Om || (Om = !0, xm.d.prototype.thinInstanceAdd = function(mm) {
      let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.wG().dO().getCaps().instancedArrays) return Am.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(mm) ? mm.length : 1);
      const fm = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(mm))
        for (let hm = 0; hm < mm.length; ++hm) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, mm[hm], hm === mm.length - 1 && Tm);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, mm, Tm);
      return fm
    }, xm.d.prototype.thinInstanceAddSelf = function() {
      let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(hm.e.IdentityReadOnly, mm)
    }, xm.d.prototype.thinInstanceRegisterAttribute = function(mm, Tm) {
      mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), this.removeVerticesData(mm), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[mm] = Tm, this._userThinInstanceBuffersStorage.sizes[mm] = Tm * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[mm] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[mm]), this._userThinInstanceBuffersStorage.vertexBuffers[mm] = new wm.m(this.dO(), this._userThinInstanceBuffersStorage.data[mm], mm, !0, !1, Tm, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[mm])
    }, xm.d.prototype.thinInstanceSetMatrixAt = function(mm, Tm) {
      let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || mm >= this._thinInstanceDataStorage.instancesCount) return !1;
      const hm = this._thinInstanceDataStorage.matrixData;
      return Tm.copyToArray(hm, 16 * mm), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[mm] = Tm), fm && (this.u9("matrix"), this.mY || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, xm.d.prototype.thinInstanceSetAttributeAt = function(mm, Tm, fm) {
      let hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[mm] || Tm >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(mm, 0), this._userThinInstanceBuffersStorage.data[mm].set(fm, Tm * this._userThinInstanceBuffersStorage.strides[mm]), hm && this.u9(mm), !0)
    }, Object.defineProperty(xm.d.prototype, "o4", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(mm) {
        const Tm = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        mm <= (Tm ? Tm.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = mm)
      },
      enumerable: !0,
      configurable: !0
    }), xm.d.prototype._thinInstanceCreateMatrixBuffer = function(mm, Tm) {
      let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const hm = new wm.c(this.dO(), Tm, !fm, 16, !1, !0);
      for (let Am = 0; Am < 4; Am++) this.setVerticesBuffer(hm.createVertexBuffer(mm + Am, 4 * Am, 4));
      return hm
    }, xm.d.prototype.I3 = function(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (fm = fm || 16, "matrix" === mm) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Tm ? Tm.length : 32 * fm, this._thinInstanceDataStorage.matrixData = Tm, this._thinInstanceDataStorage.worldMatrices = null, null !== Tm ? (this._thinInstanceDataStorage.instancesCount = Tm.length / fm, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Tm, hm), this.mY || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.mY || this.refreshBoundingInfo());
      else if ("previousMatrix" === mm) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Tm, null !== Tm && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Tm, hm));
      else if ("splatIndex" === mm && Tm) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Tm.length / fm, this._userThinInstanceBuffersStorage.data[mm] = Tm, this._userThinInstanceBuffersStorage.strides[mm] = fm, this._userThinInstanceBuffersStorage.sizes[mm] = Tm.length;
        const hm = new wm.c(this.dO(), Tm, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = hm;
        for (let Tm = 0; Tm < 4; Tm++) this.setVerticesBuffer(hm.createVertexBuffer(mm + Tm, 4 * Tm, 4))
      } else mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), null === Tm ? this._userThinInstanceBuffersStorage?.data[mm] && (this.removeVerticesData(mm), delete this._userThinInstanceBuffersStorage.data[mm], delete this._userThinInstanceBuffersStorage.strides[mm], delete this._userThinInstanceBuffersStorage.sizes[mm], delete this._userThinInstanceBuffersStorage.vertexBuffers[mm]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[mm] = Tm, this._userThinInstanceBuffersStorage.strides[mm] = fm, this._userThinInstanceBuffersStorage.sizes[mm] = Tm.length, this._userThinInstanceBuffersStorage.vertexBuffers[mm] = new wm.m(this.dO(), Tm, mm, !hm, !1, fm, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[mm]))
    }, xm.d.prototype.u9 = function(mm) {
      "matrix" === mm ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(mm), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === mm ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(mm), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === mm ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[mm], 0, this._thinInstanceDataStorage.instancesCount) : (mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[mm] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[mm].isUpdatable() && this._thinInstanceRecreateBuffer(mm), this._userThinInstanceBuffersStorage.vertexBuffers[mm].updateDirectly(this._userThinInstanceBuffersStorage.data[mm], 0)))
    }, xm.d.prototype.thinInstancePartialBufferUpdate = function(mm, Tm, fm) {
      if ("matrix" === mm) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Tm ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * fm * Float32Array.BYTES_PER_ELEMENT, 16 * Tm), 16 * fm) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Tm, fm));
      else if (mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[mm]) {
        const hm = this._userThinInstanceBuffersStorage.vertexBuffers[mm];
        if ("number" === typeof Tm) {
          const hm = new Float32Array(this._userThinInstanceBuffersStorage.data[mm].buffer, this._userThinInstanceBuffersStorage.data[mm].byteOffset + fm * this._userThinInstanceBuffersStorage.strides[mm] * Float32Array.BYTES_PER_ELEMENT, Tm * this._userThinInstanceBuffersStorage.strides[mm]);
          this._userThinInstanceBuffersStorage.vertexBuffers[mm].updateDirectly(hm, fm * this._userThinInstanceBuffersStorage.strides[mm])
        } else hm.updateDirectly(Tm, fm)
      }
    }, xm.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const mm = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Tm = 0; Tm < this._thinInstanceDataStorage.instancesCount; ++Tm) this._thinInstanceDataStorage.worldMatrices[Tm] = hm.e.FromArray(mm, 16 * Tm)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, xm.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const xm = this._thinInstanceDataStorage.boundingVectors;
      if (mm || !this.rawBoundingInfo) {
        if (xm.length = 0, Am && function(mm, Tm, fm) {
            const Am = mm._userThinInstanceBuffersStorage,
              xm = Am?.data[Dm],
              Om = Am?.strides[Dm];
            if (!xm || !Om || Om < 4 || !im(mm)) return !1;
            const Ym = mm._thinInstanceDataStorage.matrixData;
            if (!Ym) return !1;
            const qm = {},
              jm = hm.j.Vector4[0],
              Vm = hm.j.WO[1],
              Im = hm.j.WO[2],
              Km = hm.j.WO[3],
              Qm = hm.j.WO[4],
              nm = hm.j.WO[5],
              Jm = hm.j.WO[6],
              cm = hm.j.Matrix[2],
              zm = mm.geometry ? mm.geometry.boundingBias : null,
              Zm = mm.getTotalVertices();
            Vm.Y5(Number.POSITIVE_INFINITY), Im.Y5(Number.NEGATIVE_INFINITY), Km.Y5(Number.POSITIVE_INFINITY), Qm.Y5(Number.NEGATIVE_INFINITY);
            for (let am = 0; am < mm._thinInstanceDataStorage.instancesCount; ++am) {
              const Tm = am * Om;
              jm.set(xm[Tm], xm[Tm + 1], xm[Tm + 2], xm[Tm + 3]);
              const Am = mm._getData({
                applyMorph: fm,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: jm,
                updatePositionsArray: !1,
                cache: qm
              }, null, wm.m.PositionKind);
              if (!Am) return !1;
              Rm(Am, Zm, nm, Jm), pm(nm, Jm, zm), Vm.minimizeInPlace(nm), Im.maximizeInPlace(Jm), hm.e.FromArrayToRef(Ym, 16 * am, cm), zm ? Em(nm, Jm, cm, Km, Qm) : om(Am, Zm, cm, Km, Qm)
            }
            return !(!isFinite(Vm.x) || !isFinite(Km.x)) && (mm.DH().reConstruct(Km, Qm), mm.rawBoundingInfo = new am.b(Vm, Im), function(mm, Tm) {
              mm.length = 0;
              for (let fm = 0; fm < Tm.boundingBox.vectors.length; ++fm) mm.push(Tm.boundingBox.vectors[fm].clone())
            }(Tm, mm.rawBoundingInfo), mm._updateBoundingInfo(), !0)
          }(this, xm, fm)) return;
        Am && this.bakedVertexAnimationManager?.isEnabled && im(this) ? this.refreshBoundingInfo({
          applySkeleton: Tm,
          applyMorph: fm,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Tm, fm);
        const mm = this.DH();
        this.rawBoundingInfo = new am.b(mm.minimum, mm.maximum)
      }
      const Om = this.DH(),
        Ym = this._thinInstanceDataStorage.matrixData;
      if (0 === xm.length)
        for (let hm = 0; hm < Om.boundingBox.vectors.length; ++hm) xm.push(Om.boundingBox.vectors[hm].clone());
      hm.j.WO[0].Y5(Number.POSITIVE_INFINITY), hm.j.WO[1].Y5(Number.NEGATIVE_INFINITY);
      for (let am = 0; am < this._thinInstanceDataStorage.instancesCount; ++am) {
        hm.e.FromArrayToRef(Ym, 16 * am, hm.j.Matrix[0]);
        for (let mm = 0; mm < xm.length; ++mm) hm.p.TransformCoordinatesToRef(xm[mm], hm.j.Matrix[0], hm.j.WO[2]), hm.j.WO[0].minimizeInPlace(hm.j.WO[2]), hm.j.WO[1].maximizeInPlace(hm.j.WO[2])
      }
      Om.reConstruct(hm.j.WO[0], hm.j.WO[1]), this._updateBoundingInfo()
    }, xm.d.prototype._thinInstanceRecreateBuffer = function(mm) {
      let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === mm ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Tm)) : "previousMatrix" === mm ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Tm)) : (mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[mm]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[mm] = new wm.m(this.dO(), this._userThinInstanceBuffersStorage.data[mm], mm, !Tm, !1, this._userThinInstanceBuffersStorage.strides[mm], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[mm]))
    }, xm.d.prototype._thinInstanceUpdateBufferSize = function(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      mm === wm.m.ColorKind && (mm = wm.m.ColorInstanceKind);
      const fm = "matrix" === mm;
      if (!fm && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[mm])) return;
      const hm = fm ? 16 : this._userThinInstanceBuffersStorage.strides[mm],
        Am = fm ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[mm];
      let am = fm ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[mm];
      const xm = (this._thinInstanceDataStorage.instancesCount + Tm) * hm;
      let Dm = Am;
      for (; Dm < xm;) Dm *= 2;
      if (!am || Am != Dm) {
        if (am) {
          const mm = new Float32Array(Dm);
          mm.set(am, 0), am = mm
        } else am = new Float32Array(Dm);
        fm ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", am, !1), this._thinInstanceDataStorage.matrixData = am, this._thinInstanceDataStorage.matrixBufferSize = Dm, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", am, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[mm]?.dispose(), this._userThinInstanceBuffersStorage.data[mm] = am, this._userThinInstanceBuffersStorage.sizes[mm] = Dm, this._userThinInstanceBuffersStorage.vertexBuffers[mm] = new wm.m(this.dO(), am, mm, !0, !1, hm, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[mm]))
      }
    }, xm.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, xm.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40546: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Vm,
      e: () => Ym
    });
    var hm, Am, am, xm, wm = fm(40113),
      Dm = fm(40119),
      im = fm(40129),
      Rm = fm(37203),
      pm = fm(37185),
      Em = fm(40326),
      om = fm(37224),
      Om = fm(39993);
    let Ym = (() => {
      var mm;
      let Tm, fm, hm, Am, am, xm, om, Om, Ym, qm = Em.c,
        jm = [],
        Vm = [],
        Im = [],
        Km = [],
        Qm = [],
        nm = [],
        Jm = [],
        cm = [],
        zm = [],
        Zm = [],
        km = [],
        bm = [],
        Sm = [],
        em = [],
        Nm = [],
        Gm = [],
        Xm = [],
        Pm = [];
      return mm = class extends qm {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(Tm) {
          this._billboardMode !== Tm && (this._billboardMode = Tm, this._cache.useBillboardPosition = 0 !== (this._billboardMode & mm.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(mm) {
          this._infiniteDistance !== mm && (this._infiniteDistance = mm)
        }
        constructor(Tm) {
          let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Tm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new pm.p(0, 0, 1), this._up = new pm.p(0, 1, 0), this._right = new pm.p(1, 0, 0), this._position = (0, wm.i)(this, jm, pm.p.Zero()), this._rotation = ((0, wm.i)(this, Vm), (0, wm.i)(this, Im, pm.p.Zero())), this._rotationQuaternion = ((0, wm.i)(this, Km), (0, wm.i)(this, Qm, null)), this._scaling = ((0, wm.i)(this, nm), (0, wm.i)(this, Jm, pm.p.One())), this._transformToBoneReferal = ((0, wm.i)(this, cm), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, wm.i)(this, zm, mm.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, wm.i)(this, Zm), (0, wm.i)(this, km, 1)), this._infiniteDistance = ((0, wm.i)(this, bm), (0, wm.i)(this, Sm, !1)), this.ignoreNonUniformScaling = ((0, wm.i)(this, em), (0, wm.i)(this, Nm, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, wm.i)(this, Gm), (0, wm.i)(this, Xm, !1)), this._poseMatrix = ((0, wm.i)(this, Pm), null), this._localMatrix = pm.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = pm.p.Zero(), this._absoluteScaling = pm.p.Zero(), this._absoluteRotationQuaternion = pm.h.Identity(), this._pivotMatrix = pm.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Rm.c, this._nonUniformScaling = !1, fm && this.wG().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(mm) {
          this._position = mm, this._markAsDirtyInternal()
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
        set rotation(mm) {
          this._rotation = mm, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get fi() {
          return this._scaling
        }
        set fi(mm) {
          this._scaling = mm, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(mm) {
          this._rotationQuaternion = mm, mm && this._rotation.Y5(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return pm.p.TransformNormalFromFloatsToRef(0, 0, this.wG().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return pm.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return pm.p.TransformNormalFromFloatsToRef(this.wG().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(mm) {
          return this._poseMatrix ? (this._poseMatrix.ZZ(mm), this) : (this._poseMatrix = mm.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = pm.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const Tm = this._cache;
          return this._billboardMode === Tm.billboardMode && this._billboardMode === mm.BILLBOARDMODE_NONE && (!Tm.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const mm = this._cache;
          mm.localMatrixUpdated = !1, mm.billboardMode = -1, mm.infiniteDistance = !1, mm.useBillboardPosition = !1
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
        setPreTransformMatrix(mm) {
          return this.setPivotMatrix(mm, !1)
        }
        setPivotMatrix(mm) {
          let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.ZZ(mm), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Tm, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = pm.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Tm = arguments.length > 1 ? arguments[1] : void 0,
            fm = arguments.length > 2 ? arguments[2] : void 0;
          const hm = this.clone("Clone of " + (this.name || this.id), mm || this.parent, !0);
          hm && fm && fm(this, hm);
          for (const Am of this.getChildTransformNodes(!0)) Am.instantiateHierarchy(hm, Tm, fm);
          return hm
        }
        nG() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return mm ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Y5(0), this._rotationQuaternion = this._rotationQuaternion || pm.h.Identity(), mm.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = mm, this._absolutePosition.Z8(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get Lxm() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(mm) {
          if (!mm) return this;
          let Tm, fm, hm;
          if (void 0 === mm.x) {
            if (arguments.length < 3) return this;
            Tm = arguments[0], fm = arguments[1], hm = arguments[2]
          } else Tm = mm.x, fm = mm.y, hm = mm.z;
          if (this.parent) {
            const mm = pm.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(mm), pm.p.TransformCoordinatesFromFloatsToRef(Tm, fm, hm, mm, this.position)
          } else this.position.x = Tm, this.position.y = fm, this.position.z = hm;
          return this._absolutePosition.ZZ(mm), this
        }
        setPositionWithLocalVector(mm) {
          return this.computeWorldMatrix(), this.position = pm.p.TransformNormal(mm, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const mm = pm.j.Matrix[0];
          return this._localMatrix.invertToRef(mm), pm.p.TransformNormal(this.position, mm)
        }
        locallyTranslate(mm) {
          return this.computeWorldMatrix(!0), this.position = pm.p.TransformCoordinates(mm, this._localMatrix), this
        }
        lookAt(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const xm = mm._LookAtVectorCache,
            wm = 0 === am ? this.position : this.getAbsolutePosition();
          if (Tm.subtractToRef(wm, xm), this.setDirection(xm, fm, hm, Am), 1 === am && this.parent)
            if (this.rotationQuaternion) {
              const mm = pm.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(mm);
              const Tm = pm.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Tm), Tm.invert(), mm.multiplyToRef(Tm, mm), this.rotationQuaternion.fromRotationMatrix(mm)
            } else {
              const mm = pm.j.Quaternion[0];
              pm.h.FromEulerVectorToRef(this.rotation, mm);
              const Tm = pm.j.Matrix[0];
              mm.toRotationMatrix(Tm);
              const fm = pm.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(fm), fm.invert(), Tm.multiplyToRef(fm, Tm), mm.fromRotationMatrix(Tm), mm.toEulerAnglesToRef(this.rotation)
            } return this
        }
        dU(mm) {
          const Tm = pm.p.Zero();
          return this.getDirectionToRef(mm, Tm), Tm
        }
        getDirectionToRef(mm, Tm) {
          return pm.p.TransformNormalToRef(mm, this.getWorldMatrix(), Tm), this
        }
        setDirection(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Am = -Math.atan2(mm.z, mm.x) + Math.PI / 2,
            am = Math.sqrt(mm.x * mm.x + mm.z * mm.z),
            xm = -Math.atan2(mm.y, am);
          return this.rotationQuaternion ? pm.h.RotationYawPitchRollToRef(Am + Tm, xm + fm, hm, this.rotationQuaternion) : (this.rotation.x = xm + fm, this.rotation.y = Am + Tm, this.rotation.z = hm), this
        }
        setPivotPoint(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.wG().getRenderId() && this.computeWorldMatrix(!0);
          const fm = this.getWorldMatrix();
          if (1 == Tm) {
            const Tm = pm.j.Matrix[0];
            fm.invertToRef(Tm), mm = pm.p.TransformCoordinates(mm, Tm)
          }
          return this.setPivotMatrix(pm.e.Translation(-mm.x, -mm.y, -mm.z), !0)
        }
        getPivotPoint() {
          const mm = pm.p.Zero();
          return this.getPivotPointToRef(mm), mm
        }
        getPivotPointToRef(mm) {
          return mm.x = -this._pivotMatrix.m[12], mm.y = -this._pivotMatrix.m[13], mm.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const mm = pm.p.Zero();
          return this.getAbsolutePivotPointToRef(mm), mm
        }
        getAbsolutePivotPointToRef(mm) {
          return this.getPivotPointToRef(mm), pm.p.TransformCoordinatesToRef(mm, this.getWorldMatrix(), mm), this
        }
        HTm(mm) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Tm of this._children) Tm.HTm(mm);
          return super.HTm(mm)
        }
        setParent(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            hm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Tm && !this.parent) return this;
          const Am = pm.j.Quaternion[0],
            am = pm.j.WO[0],
            xm = pm.j.WO[1],
            wm = pm.j.Matrix[1];
          pm.e.IdentityToRef(wm);
          const Dm = pm.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let im = this.rotationQuaternion;
          return im || (im = mm._TmpRotation, pm.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, im)), pm.e.ComposeToRef(this.fi, im, this.position, Dm), this.parent && Dm.multiplyToRef(this.parent.computeWorldMatrix(!0), Dm), Tm && (Tm.computeWorldMatrix(!0).invertToRef(wm), Dm.multiplyToRef(wm, Dm)), Dm.decompose(xm, Am, am, fm ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.ZZ(Am) : Am.toEulerAnglesToRef(this.rotation), this.fi.ZZ(xm), this.position.ZZ(am), this.parent = Tm, hm && this.setPivotMatrix(pm.e.Identity()), this
        }
        addChild(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return mm.setParent(this, Tm), this
        }
        removeChild(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return mm.parent !== this || mm.setParent(null, Tm), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(mm) {
          return this._nonUniformScaling !== mm && (this._nonUniformScaling = mm, !0)
        }
        attachToBone(mm, Tm) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = Tm, this.parent = mm, mm.getSkeleton().prepare(!0), mm.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = mm ? this._currentParentWhenAttachingToBone : null, this) : (mm && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(Tm, fm, hm) {
          let Am;
          if (Tm.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Y5(0)), hm && 0 !== hm) {
            if (this.parent) {
              const mm = this.parent.getWorldMatrix(),
                hm = pm.j.Matrix[0];
              mm.invertToRef(hm), Tm = pm.p.TransformNormal(Tm, hm), mm.determinant() < 0 && (fm *= -1)
            }
            Am = pm.h.RotationAxisToRef(Tm, fm, mm._RotationAxisCache), Am.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Am = pm.h.RotationAxisToRef(Tm, fm, mm._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Am, this.rotationQuaternion);
          return this
        }
        rotateAround(mm, Tm, fm) {
          Tm.normalize(), this.rotationQuaternion || (this.rotationQuaternion = pm.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Y5(0));
          const hm = pm.j.WO[0],
            Am = pm.j.WO[1],
            am = pm.j.WO[2],
            xm = pm.j.Quaternion[0],
            wm = pm.j.Matrix[0],
            Dm = pm.j.Matrix[1],
            im = pm.j.Matrix[2],
            Rm = pm.j.Matrix[3];
          return mm.subtractToRef(this.position, hm), pm.e.TranslationToRef(hm.x, hm.y, hm.z, wm), pm.e.TranslationToRef(-hm.x, -hm.y, -hm.z, Dm), pm.e.RotationAxisToRef(Tm, fm, im), Dm.multiplyToRef(im, Rm), Rm.multiplyToRef(wm, Rm), Rm.decompose(Am, xm, am), this.position.addInPlace(am), xm.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(mm, Tm, fm) {
          const hm = mm.scale(Tm);
          if (fm && 0 !== fm) this.setAbsolutePosition(this.getAbsolutePosition().add(hm));
          else {
            const mm = this.getPositionExpressedInLocalSpace().add(hm);
            this.setPositionWithLocalVector(mm)
          }
          return this
        }
        addRotation(mm, Tm, fm) {
          let hm;
          this.rotationQuaternion ? hm = this.rotationQuaternion : (hm = pm.j.Quaternion[1], pm.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, hm));
          const Am = pm.j.Quaternion[0];
          return pm.h.RotationYawPitchRollToRef(Tm, mm, fm, Am), hm.multiplyInPlace(Am), this.rotationQuaternion || hm.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== mm.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Tm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const hm = this.wG().getRenderId();
          if (!this._isDirty && !Tm && (this._currentRenderId === hm || this.isSynchronized())) return this._currentRenderId = hm, this._worldMatrix;
          fm = fm || this.wG().activeCamera, this._updateCache();
          const Am = this._cache;
          Am.pivotMatrixUpdated = !1, Am.billboardMode = this.billboardMode, Am.infiniteDistance = this.infiniteDistance, Am.parent = this._parentNode, this._currentRenderId = hm, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const am = this._getEffectiveParent(),
            xm = mm._TmpScaling;
          let wm, Dm = this._position;
          if (this._infiniteDistance && !this.parent && fm) {
            const Tm = fm.getWorldMatrix().m;
            Dm = mm._TmpTranslation, Dm.Z8(this._position.x + Tm[12], this._position.y + Tm[13], this._position.z + Tm[14])
          }
          if (xm.Z8(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, wm = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(pm.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.Z8(0, 0, 0))
            }
          } else wm = mm._TmpRotation, pm.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, wm);
          if (this._usePivotMatrix) {
            const mm = pm.j.Matrix[1];
            pm.e.ScalingToRef(xm.x, xm.y, xm.z, mm);
            const Tm = pm.j.Matrix[0];
            wm.toRotationMatrix(Tm), this._pivotMatrix.multiplyToRef(mm, pm.j.Matrix[4]), pm.j.Matrix[4].multiplyToRef(Tm, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Dm.x, Dm.y, Dm.z)
          } else pm.e.ComposeToRef(xm, wm, Dm, this._localMatrix);
          if (am && am.getWorldMatrix) {
            if (Tm && am.computeWorldMatrix(Tm), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const mm = this.parent;
                mm.getSkeleton().prepare(), mm.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), pm.j.Matrix[7])
              } else pm.j.Matrix[7].ZZ(am.getWorldMatrix());
              const Tm = pm.j.WO[5],
                fm = pm.j.WO[6],
                hm = pm.j.Quaternion[0];
              pm.j.Matrix[7].decompose(fm, hm, Tm), pm.e.ScalingToRef(fm.x, fm.y, fm.z, pm.j.Matrix[7]), pm.j.Matrix[7].setTranslation(Tm), mm.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(hm, Tm), this._localMatrix.setTranslation(Tm)), this._localMatrix.multiplyToRef(pm.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const mm = this.parent;
              mm.getSkeleton().prepare(), this._localMatrix.multiplyToRef(mm.getFinalMatrix(), pm.j.Matrix[6]), pm.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(am.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.ZZ(this._localMatrix);
          if (fm && this.billboardMode)
            if (Am.useBillboardPosition) {
              const Tm = pm.j.WO[0];
              this._worldMatrix.getTranslationToRef(Tm);
              const hm = fm.globalPosition;
              this._worldMatrix.invertToRef(pm.j.Matrix[1]);
              const Am = pm.j.WO[1];
              pm.p.TransformCoordinatesToRef(hm, pm.j.Matrix[1], Am), Am.normalize();
              const am = -Math.atan2(Am.z, Am.x) + Math.PI / 2,
                xm = Math.sqrt(Am.x * Am.x + Am.z * Am.z),
                wm = -Math.atan2(Am.y, xm);
              if (pm.h.RotationYawPitchRollToRef(am, wm, 0, pm.j.Quaternion[0]), (this.billboardMode & mm.BILLBOARDMODE_ALL) !== mm.BILLBOARDMODE_ALL) {
                const Tm = pm.j.WO[1];
                pm.j.Quaternion[0].toEulerAnglesToRef(Tm), (this.billboardMode & mm.BILLBOARDMODE_X) !== mm.BILLBOARDMODE_X && (Tm.x = 0), (this.billboardMode & mm.BILLBOARDMODE_Y) !== mm.BILLBOARDMODE_Y && (Tm.y = 0), (this.billboardMode & mm.BILLBOARDMODE_Z) !== mm.BILLBOARDMODE_Z && (Tm.z = 0), pm.e.RotationYawPitchRollToRef(Tm.y, Tm.x, Tm.z, pm.j.Matrix[0])
              } else pm.e.FromQuaternionToRef(pm.j.Quaternion[0], pm.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pm.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pm.j.WO[0])
            } else {
              const Tm = pm.j.WO[0];
              this._worldMatrix.getTranslationToRef(Tm), pm.j.Matrix[1].ZZ(fm.getViewMatrix());
              const hm = this.wG().useRightHandedSystem;
              if (hm && pm.j.Matrix[1].multiplyToRef(mm._TmpRHRestore, pm.j.Matrix[1]), pm.j.Matrix[1].setTranslationFromFloats(0, 0, 0), pm.j.Matrix[1].invertToRef(pm.j.Matrix[0]), (this.billboardMode & mm.BILLBOARDMODE_ALL) !== mm.BILLBOARDMODE_ALL) {
                pm.j.Matrix[0].decompose(void 0, pm.j.Quaternion[0], void 0);
                const Tm = pm.j.WO[1];
                pm.j.Quaternion[0].toEulerAnglesToRef(Tm), (this.billboardMode & mm.BILLBOARDMODE_X) !== mm.BILLBOARDMODE_X && (Tm.x = 0), (this.billboardMode & mm.BILLBOARDMODE_Y) !== mm.BILLBOARDMODE_Y && (Tm.y = 0), (this.billboardMode & mm.BILLBOARDMODE_Z) !== mm.BILLBOARDMODE_Z && (Tm.z = 0), hm && (Tm.y += Math.PI), pm.e.RotationYawPitchRollToRef(Tm.y, Tm.x, Tm.z, pm.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pm.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pm.j.WO[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : am && am._nonUniformScaling ? this._updateNonUniformScalingState(am._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.Z8(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = pm.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), mm) {
            const mm = this.getChildren();
            for (let Tm = 0; Tm < mm.length; ++Tm) {
              const fm = mm[Tm];
              if (fm) {
                fm.computeWorldMatrix();
                const mm = pm.j.Matrix[0];
                fm._localMatrix.multiplyToRef(this._localMatrix, mm);
                const Tm = pm.j.Quaternion[0];
                mm.decompose(fm.fi, Tm, fm.position), fm.rotationQuaternion ? fm.rotationQuaternion.ZZ(Tm) : Tm.toEulerAnglesToRef(fm.rotation)
              }
            }
          }
          this.fi.Z8(1, 1, 1), this.position.Z8(0, 0, 0), this.rotation.Z8(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = pm.h.Identity()), this._worldMatrix = pm.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(mm) {
          return this.onAfterWorldMatrixUpdateObservable.add(mm), this
        }
        unregisterAfterWorldMatrixUpdate(mm) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(mm), this
        }
        getPositionInCameraSpace() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return mm || (mm = this.wG().activeCamera), pm.p.TransformCoordinates(this.getAbsolutePosition(), mm.getViewMatrix())
        }
        getDistanceToCamera() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return mm || (mm = this.wG().activeCamera), this.getAbsolutePosition().subtract(mm.globalPosition).length()
        }
        clone(Tm, fm, hm) {
          const Am = im.d.Clone((() => new mm(Tm, this.wG())), this);
          if (Am.name = Tm, Am.id = Tm, fm && (Am.parent = fm), !hm) {
            const mm = this.getDescendants(!0);
            for (let fm = 0; fm < mm.length; fm++) {
              const hm = mm[fm];
              hm.clone && hm.clone(Tm + "." + hm.name, Am)
            }
          }
          return Am
        }
        serialize(mm) {
          const Tm = im.d.Serialize(this, mm);
          return Tm.type = this.getClassName(), Tm.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Tm), Tm.localMatrix = this.getPivotMatrix().ahm(), Tm.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Tm.nG = !0), im.d.AppendSerializedAnimations(this, Tm), Tm.mo = this.serializeAnimationRanges(), Tm
        }
        getChildTransformNodes(Tm, fm) {
          const hm = [];
          return this._getDescendants(hm, Tm, (Tm => (!fm || fm(Tm)) && Tm instanceof mm)), hm
        }
        dispose(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.wG().stopAnimation(this), this.wG().removeTransformNode(this), this._parentContainer) {
            const mm = this._parentContainer.transformNodes.indexOf(this);
            mm > -1 && this._parentContainer.transformNodes.splice(mm, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), mm) {
            const mm = this.getChildTransformNodes(!0);
            for (const Tm of mm) Tm.parent = null, Tm.computeWorldMatrix(!0)
          }
          super.dispose(mm, Tm)
        }
        normalizeToUnitCube() {
          let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            fm = arguments.length > 2 ? arguments[2] : void 0,
            hm = null,
            Am = null;
          Tm && (this.rotationQuaternion ? (Am = this.rotationQuaternion.clone(), this.rotationQuaternion.Z8(0, 0, 0, 1)) : this.rotation && (hm = this.rotation.clone(), this.rotation.Z8(0, 0, 0)));
          const am = this.getHierarchyBoundingVectors(mm, fm),
            xm = am.max.subtract(am.min),
            wm = Math.max(xm.x, xm.y, xm.z);
          if (0 === wm) return this;
          const Dm = 1 / wm;
          return this.fi.scaleInPlace(Dm), Tm && (this.rotationQuaternion && Am ? this.rotationQuaternion.ZZ(Am) : this.rotation && hm && this.rotation.ZZ(hm)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const im = "function" === typeof Symbol && Symbol.metadata ? Object.create(qm[Symbol.metadata] ?? null) : void 0;
        Tm = [(0, Dm.F)("position")], fm = [(0, Dm.F)("rotation")], hm = [(0, Dm.y)("rotationQuaternion")], Am = [(0, Dm.F)("fi")], am = [(0, Dm.J)("billboardMode")], xm = [(0, Dm.J)()], om = [(0, Dm.J)("infiniteDistance")], Om = [(0, Dm.J)()], Ym = [(0, Dm.J)()], (0, wm.g)(null, null, Tm, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: mm => "_position" in mm,
            get: mm => mm._position,
            set: (mm, Tm) => {
              mm._position = Tm
            }
          },
          metadata: im
        }, jm, Vm), (0, wm.g)(null, null, fm, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: mm => "_rotation" in mm,
            get: mm => mm._rotation,
            set: (mm, Tm) => {
              mm._rotation = Tm
            }
          },
          metadata: im
        }, Im, Km), (0, wm.g)(null, null, hm, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: mm => "_rotationQuaternion" in mm,
            get: mm => mm._rotationQuaternion,
            set: (mm, Tm) => {
              mm._rotationQuaternion = Tm
            }
          },
          metadata: im
        }, Qm, nm), (0, wm.g)(null, null, Am, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: mm => "_scaling" in mm,
            get: mm => mm._scaling,
            set: (mm, Tm) => {
              mm._scaling = Tm
            }
          },
          metadata: im
        }, Jm, cm), (0, wm.g)(null, null, am, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "_billboardMode" in mm,
            get: mm => mm._billboardMode,
            set: (mm, Tm) => {
              mm._billboardMode = Tm
            }
          },
          metadata: im
        }, zm, Zm), (0, wm.g)(null, null, xm, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: mm => "scalingDeterminant" in mm,
            get: mm => mm.scalingDeterminant,
            set: (mm, Tm) => {
              mm.scalingDeterminant = Tm
            }
          },
          metadata: im
        }, km, bm), (0, wm.g)(null, null, om, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: mm => "_infiniteDistance" in mm,
            get: mm => mm._infiniteDistance,
            set: (mm, Tm) => {
              mm._infiniteDistance = Tm
            }
          },
          metadata: im
        }, Sm, em), (0, wm.g)(null, null, Om, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: mm => "ignoreNonUniformScaling" in mm,
            get: mm => mm.ignoreNonUniformScaling,
            set: (mm, Tm) => {
              mm.ignoreNonUniformScaling = Tm
            }
          },
          metadata: im
        }, Nm, Gm), (0, wm.g)(null, null, Ym, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: mm => "reIntegrateRotationIntoRotationQuaternion" in mm,
            get: mm => mm.reIntegrateRotationIntoRotationQuaternion,
            set: (mm, Tm) => {
              mm.reIntegrateRotationIntoRotationQuaternion = Tm
            }
          },
          metadata: im
        }, Xm, Pm), im && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: im
        })
      })(), mm.BILLBOARDMODE_NONE = 0, mm.BILLBOARDMODE_X = 1, mm.BILLBOARDMODE_Y = 2, mm.BILLBOARDMODE_Z = 4, mm.BILLBOARDMODE_ALL = 7, mm.BILLBOARDMODE_USE_POSITION = 128, mm.BillboardUseParentOrientation = !1, mm._TmpRotation = pm.h.Zero(), mm._TmpScaling = pm.p.Zero(), mm._TmpTranslation = pm.p.Zero(), mm._TmpRHRestore = pm.e.Scaling(1, 1, -1), mm._LookAtVectorCache = new pm.p(0, 0, 0), mm._RotationAxisCache = new pm.h, mm
    })();

    function qm(mm, Tm, fm) {
      const hm = im.d.Parse((() => new Ym(mm.name, Tm)), mm, Tm, fm);
      if (mm.localMatrix ? hm.setPreTransformMatrix(pm.e.FromArray(mm.localMatrix)) : mm.pivotMatrix && hm.setPivotMatrix(pm.e.FromArray(mm.pivotMatrix)), hm.Dk(mm.isEnabled), hm._waitingParsedUniqueId = mm.uniqueId, void 0 !== mm.parentId && (hm._waitingParentId = mm.parentId), void 0 !== mm.parentInstanceIndex && (hm._waitingParentInstanceIndex = mm.parentInstanceIndex), mm.nG && (hm._waitingFreezeWorldMatrix = mm.nG), mm.animations) {
        for (let Tm = 0; Tm < mm.animations.length; Tm++) {
          const fm = mm.animations[Tm],
            Am = (0, om.c)("BABYLON.Animation");
          Am && hm.animations.push(Am.Parse(fm))
        }
        Em.c.ParseAnimationRanges(hm, mm, Tm)
      }
      return mm.autoAnimate && Tm.beginAnimation(hm, mm.autoAnimateFrom, mm.autoAnimateTo, mm.autoAnimateLoop, mm.autoAnimateSpeed || 1), hm
    }
    let jm = !1;

    function Vm() {
      jm || (jm = !0, Ym.Parse = qm)
    }(hm = Ym.prototype).WC ?? (hm.WC = (0, Om.f)("TransformNode", "WC")), (Am = Ym.prototype).applyImpulse ?? (Am.applyImpulse = (0, Om.f)("TransformNode", "applyImpulse")), (am = Ym.prototype).applyAngularImpulse ?? (am.applyAngularImpulse = (0, Om.f)("TransformNode", "applyAngularImpulse")), (xm = Ym.prototype).applyTorque ?? (xm.applyTorque = (0, Om.f)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Ym.prototype, "physicsBody") || Object.defineProperty(Ym.prototype, "physicsBody", (0, Om.e)("TransformNode", "physicsBody"))
  },
  40518: (mm, Tm, fm) => {
    function hm(mm, Tm, fm) {
      try {
        const hm = mm.next();
        hm.done ? Tm(hm) : hm.value ? hm.value.then((() => {
          hm.value = void 0, Tm(hm)
        }), fm) : Tm(hm)
      } catch (hm) {
        fm(hm)
      }
    }

    function Am() {
      let mm, Tm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (fm, Am, am) => {
        const xm = performance.now();
        void 0 === mm || xm - mm > Tm ? (mm = xm, setTimeout((() => {
          hm(fm, Am, am)
        }), 0)) : hm(fm, Am, am)
      }
    }

    function am(mm, Tm, fm, hm, Am) {
      const am = () => {
        let xm;
        const wm = mm => {
          mm.done ? fm(mm.value) : void 0 === xm ? xm = !0 : am()
        };
        do {
          xm = void 0, Am && Am.aborted ? hm(new Error("Aborted")) : Tm(mm, wm, hm), void 0 === xm && (xm = !1)
        } while (xm)
      };
      am()
    }

    function xm(mm, Tm) {
      let fm;
      return am(mm, hm, (mm => fm = mm), (mm => {
        throw mm
      }), Tm), fm
    }
    async function wm(mm, Tm, fm) {
      return await new Promise(((hm, Am) => {
        am(mm, Tm, hm, Am, fm)
      }))
    }

    function Dm(mm, Tm) {
      return function() {
        return xm(mm(...arguments), Tm)
      }
    }
    fm.d(Tm, {
      b: () => Am,
      d: () => Dm,
      f: () => wm,
      h: () => xm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);