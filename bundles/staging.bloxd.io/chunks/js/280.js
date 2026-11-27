export const id = 280;
export const ids = [280];
export const modules = {
  41320: (ee, ie, He) => {
    He.d(ie, {
      d: () => pe,
      f: () => Be
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(41216),
      Ke = He(37931),
      Ue = He(37917),
      Fe = He(41323),
      Je = He(39467),
      oe = He(37949),
      Re = He(40985),
      ke = He(38919),
      qe = He(38581),
      fe = He(41072),
      Te = He(41141);
    let pe = (() => {
      var ee;
      let ie, He, oe, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye = Fe.d,
        Ve = [],
        ae = [],
        ce = [],
        xe = [],
        Le = [],
        Ce = [],
        ve = [],
        ue = [],
        me = [],
        le = [],
        Se = [],
        ne = [],
        je = [],
        se = [],
        Ie = [],
        he = [],
        Ne = [],
        Ge = [],
        re = [],
        Qe = [],
        ei = [],
        ii = [],
        Hi = [],
        yi = [],
        bi = [];
      return ee = class extends Ye {
        get position() {
          return this._position
        }
        set position(ee) {
          this._position = ee
        }
        set upVector(ee) {
          this._upVector = ee
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let ie, He;
          if (this.mode === ee.PERSPECTIVE_CAMERA) this.fovMode === ee.FOVMODE_VERTICAL_FIXED ? (He = 2 * this.minZ * Math.tan(this.fov / 2), ie = this.Nf().getAspectRatio(this) * He) : (ie = 2 * this.minZ * Math.tan(this.fov / 2), He = ie / this.Nf().getAspectRatio(this));
          else {
            const ee = this.Nf().getRenderWidth() / 2,
              ye = this.Nf().getRenderHeight() / 2;
            ie = (this.orthoRight ?? ee) - (this.orthoLeft ?? -ee), He = (this.orthoTop ?? ye) - (this.orthoBottom ?? -ye)
          }
          return ie * He
        }
        set orthoLeft(ee) {
          this._orthoLeft = ee;
          for (const ie of this._rigCameras) ie.orthoLeft = ee
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(ee) {
          this._orthoRight = ee;
          for (const ie of this._rigCameras) ie.orthoRight = ee
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(ee) {
          this._orthoBottom = ee;
          for (const ie of this._rigCameras) ie.orthoBottom = ee
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(ee) {
          this._orthoTop = ee;
          for (const ie of this._rigCameras) ie.orthoTop = ee
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(ie / (2 * ee))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(ee) {
          this._baseInertia = ee
        }
        set mode(ee) {
          this._mode = ee;
          for (const ie of this._rigCameras) ie.mode = ee
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(ie, He, be) {
          let Fe = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, fe.e)(), super(ie, be, !1), this.inputs = (0, ye.l)(this, Ve), this._position = (0, ye.l)(this, ae, Ue.p.Zero()), this._upVector = ((0, ye.l)(this, ce), (0, ye.l)(this, xe, Ue.p.Up())), this.oblique = ((0, ye.l)(this, Le), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, ye.l)(this, Ce, .8), this.projectionPlaneTilt = ((0, ye.l)(this, ve), (0, ye.l)(this, ue, 0)), this.minZ = ((0, ye.l)(this, me), (0, ye.l)(this, le, 1)), this.maxZ = ((0, ye.l)(this, Se), (0, ye.l)(this, ne, 1e4)), this._baseInertia = ((0, ye.l)(this, je), .9), this._mode = ee.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new ke.d(0, 0, 1, 1), this.layerMask = (0, ye.l)(this, se, 268435455), this.fovMode = ((0, ye.l)(this, Ie), (0, ye.l)(this, he, ee.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, ye.l)(this, Ne), (0, ye.l)(this, Ge, ee.RIG_MODE_NONE)), this.interaxialDistance = ((0, ye.l)(this, re), (0, ye.l)(this, Qe, void 0)), this.isStereoscopicSideBySide = ((0, ye.l)(this, ei), (0, ye.l)(this, ii, void 0)), this.ignoreCameraMaxZ = ((0, ye.l)(this, Hi), (0, ye.l)(this, yi, !1)), this.customRenderTargets = ((0, ye.l)(this, bi), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Ke.d, this.onProjectionMatrixChangedObservable = new Ke.d, this.onAfterCheckInputsObservable = new Ke.d, this.onRestoreStateObservable = new Ke.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new Ue.b, this._postProcesses = new Array, this._activeMeshes = new Me.f(256), this._globalPosition = Ue.p.Zero(), this._computedViewMatrix = Ue.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = Ue.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = Ue.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.Xx().defaultCameraLayerMask, this.Xx().addCamera(this), Fe && !this.Xx().activeCamera && (this.Xx().activeCamera = this), this.position = He, this.renderPassId = this.Xx().Nf().createRenderPassId(`Camera ${ie}`)
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
          return "iX"
        }
        toString(ee) {
          let ie = "Name: " + this.name;
          if (ie += ", type: " + this.getClassName(), this.animations)
            for (let He = 0; He < this.animations.length; He++) ie += ", animation[0]: " + this.animations[He].toString(ee);
          return ie
        }
        applyVerticalCorrection() {
          const ee = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -ee.x : ee.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(ee) {
          return -1 !== this._activeMeshes.indexOf(ee)
        }
        isReady() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (ee)
            for (const ie of this._postProcesses)
              if (ie && !ie.isReady()) return !1;
          return super.isReady(ee)
        }
        _initCache() {
          super._initCache(), this._cache.position = new Ue.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new Ue.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(ee) {
          ee || super._updateCache(), this._cache.position.jD(this.position), this._cache.upVector.jD(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const ie = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let He = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === ie;
          if (!He) return !1;
          const ye = this.Nf();
          return this.mode === ee.PERSPECTIVE_CAMERA ? He = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === ye.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (He = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === ye.getRenderWidth() && this._cache.renderHeight === ye.getRenderHeight(), this.oblique && (He = He && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), He
        }
        attachControl(ee, ie) {}
        detachControl(ee) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== ee.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let ee = 0; ee < this._postProcesses.length; ee++)
            if (null !== this._postProcesses[ee]) return this._postProcesses[ee];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const ee = this._getFirstPostProcess();
          ee && ee.markTextureDirty();
          for (let ie = 0, He = this._rigCameras.length; ie < He; ie++) {
            const ee = this._rigCameras[ie],
              He = ee._rigPostProcess;
            if (He) {
              "pass" === He.getEffectName() && (ee.isIntermediate = 0 === this._postProcesses.length), ee._postProcesses = this._postProcesses.slice(0).concat(He), He.markTextureDirty()
            } else ee._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !ee.isReusable() && this._postProcesses.indexOf(ee) > -1 ? (Je.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == ie || ie < 0 ? this._postProcesses.push(ee) : null === this._postProcesses[ie] ? this._postProcesses[ie] = ee : this._postProcesses.splice(ie, 0, ee), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.tye(), this._postProcesses.indexOf(ee))
        }
        detachPostProcess(ee) {
          const ie = this._postProcesses.indexOf(ee); - 1 !== ie && (this._postProcesses[ie] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.tye(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return Ue.b.Identity()
        }
        getViewMatrix(ee) {
          return !ee && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Xx().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(ee) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== ee && (this._projectionMatrix = ee)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(ie) {
          if (this._doNotComputeProjectionMatrix || !ie && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const He = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = He, this._refreshFrustumPlanes = !0;
          const ye = this.Nf(),
            be = this.Xx(),
            Me = ye.Gbe;
          if (this.mode === ee.PERSPECTIVE_CAMERA) {
            let ie;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = ye.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), ie = be.useRightHandedSystem ? Ue.b.PerspectiveFovRHToRef : Ue.b.PerspectiveFovLHToRef, ie(this.fov, ye.getAspectRatio(this), Me ? He : this.minZ, Me ? this.minZ : He, this._projectionMatrix, this.fovMode === ee.FOVMODE_VERTICAL_FIXED, ye.isNDCHalfZRange, this.projectionPlaneTilt, Me)
          } else {
            const ee = ye.getRenderWidth() / 2,
              ie = ye.getRenderHeight() / 2;
            be.useRightHandedSystem ? this.oblique ? Ue.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -ee, this.orthoRight ?? ee, this.orthoBottom ?? -ie, this.orthoTop ?? ie, Me ? He : this.minZ, Me ? this.minZ : He, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, ye.isNDCHalfZRange) : Ue.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -ee, this.orthoRight ?? ee, this.orthoBottom ?? -ie, this.orthoTop ?? ie, Me ? He : this.minZ, Me ? this.minZ : He, this._projectionMatrix, ye.isNDCHalfZRange) : this.oblique ? Ue.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -ee, this.orthoRight ?? ee, this.orthoBottom ?? -ie, this.orthoTop ?? ie, Me ? He : this.minZ, Me ? this.minZ : He, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, ye.isNDCHalfZRange) : Ue.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -ee, this.orthoRight ?? ee, this.orthoBottom ?? -ie, this.orthoTop ?? ie, Me ? He : this.minZ, Me ? this.minZ : He, this._projectionMatrix, ye.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = ye.getRenderWidth(), this._cache.renderHeight = ye.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(ee) {
          return (this.radius || (this.target ? Ue.p.Distance(this.position, this.target) : this.position.length())) + ee
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? qe.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = qe.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), ie && this.rigCameras.length > 0) {
            let ie = !1;
            for (const He of this.rigCameras) He._updateFrustumPlanes(), ie = ie || ee.isInFrustum(He._frustumPlanes);
            return ie
          }
          return ee.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(ee) {
          return this._updateFrustumPlanes(), ee.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Re.l)("Ray")
        }
        getForwardRayToRef(ee) {
          throw (0, Re.l)("Ray")
        }
        dispose(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.Xx().stopAnimation(this), this.Xx().removeCamera(this); this._rigCameras.length > 0;) {
            const ee = this._rigCameras.pop();
            ee && ee.dispose()
          }
          if (this._parentContainer) {
            const ee = this._parentContainer.cameras.indexOf(this);
            ee > -1 && this._parentContainer.cameras.splice(ee, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== ee.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let ee = this._postProcesses.length;
            for (; --ee >= 0;) {
              const ie = this._postProcesses[ee];
              ie && ie.dispose(this)
            }
          }
          let ye = this.customRenderTargets.length;
          for (; --ye >= 0;) this.customRenderTargets[ye].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.Xx().Nf().releaseRenderPassId(this.renderPassId), super.dispose(ie, He)
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
        setCameraRigMode(ie, He) {
          if (this.cameraRigMode !== ie) {
            for (; this._rigCameras.length > 0;) {
              const ee = this._rigCameras.pop();
              ee && ee.dispose()
            }
            if (this.cameraRigMode = ie, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = He.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== ee.RIG_MODE_NONE) {
              const ee = this.createRigCamera(this.name + "_L", 0);
              ee && (ee._isLeftCamera = !0);
              const ie = this.createRigCamera(this.name + "_R", 1);
              ie && (ie._isRightCamera = !0), ee && ie && (this._rigCameras.push(ee), this._rigCameras.push(ie))
            }
            this._setRigMode(He), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(ee) {}
        _getVRProjectionMatrix() {
          return Ue.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Nf().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(ee, ie) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[ee] = ie, "interaxialDistance" === ee && (this._cameraRigParams.stereoHalfAngle = ie / .0637 * (Math.PI / 180))
        }
        createRigCamera(ee, ie) {
          return null
        }
        _updateRigCameras() {
          for (let ee = 0; ee < this._rigCameras.length; ee++) this._rigCameras[ee].minZ = this.minZ, this._rigCameras[ee].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[ee].fov = this.fov, this._rigCameras[ee].upVector.jD(this.upVector);
          this.cameraRigMode === ee.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const ee = Te.c.Serialize(this);
          return ee.uniqueId = this.uniqueId, ee.type = this.getClassName(), this.parent && this.parent._serializeAsParent(ee), this.inputs && this.inputs.serialize(ee), Te.c.AppendSerializedAnimations(this, ee), ee.zp = this.serializeAnimationRanges(), ee.isEnabled = this.isEnabled(), ee
        }
        clone(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const ye = Te.c.Clone(ee.GetConstructorFromName(this.getClassName(), ie, this.Xx(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return ye.name = ie, ye.parent = He, this.onClonedObservable.notifyObservers(ye), ye
        }
        N_(ee) {
          const ie = Ue.p.Zero();
          return this.getDirectionToRef(ee, ie), ie
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(ee, ie) {
          Ue.p.TransformNormalToRef(ee, this.getWorldMatrix(), ie)
        }
        static GetConstructorFromName(ie, He, ye) {
          let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Me = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Ke = Fe.d.Construct(ie, He, ye, {
            interaxial_distance: be,
            isStereoscopicSideBySide: Me
          });
          return Ke || (() => ee._CreateDefaultParsedCamera(He, ye))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let ee = this.Xx().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (ee *= -1), ee
        }
      }, (() => {
        const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ye[Symbol.metadata] ?? null) : void 0;
        ie = [(0, be.P)("position")], He = [(0, be.P)("upVector")], oe = [(0, be.R)()], pe = [(0, be.R)()], Xe = [(0, be.R)()], ze = [(0, be.R)()], Be = [(0, be.R)()], Ee = [(0, be.R)()], ge = [(0, be.R)()], Oe = [(0, be.R)()], de = [(0, be.R)()], We = [(0, be.R)()], te = [(0, be.R)()], Ze = [(0, be.R)()], we = [(0, be.R)()], De = [(0, be.R)()], Pe = [(0, be.R)()], Ae = [(0, be.R)()], (0, ye.i)(ee, null, oe, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: ee => "orthoLeft" in ee,
            get: ee => ee.orthoLeft
          },
          metadata: Me
        }, null, Ve), (0, ye.i)(ee, null, pe, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: ee => "orthoRight" in ee,
            get: ee => ee.orthoRight
          },
          metadata: Me
        }, null, Ve), (0, ye.i)(ee, null, Xe, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: ee => "orthoBottom" in ee,
            get: ee => ee.orthoBottom
          },
          metadata: Me
        }, null, Ve), (0, ye.i)(ee, null, ze, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: ee => "orthoTop" in ee,
            get: ee => ee.orthoTop
          },
          metadata: Me
        }, null, Ve), (0, ye.i)(ee, null, de, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: ee => "inertia" in ee,
            get: ee => ee.inertia
          },
          metadata: Me
        }, null, Ve), (0, ye.i)(ee, null, We, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: ee => "mode" in ee,
            get: ee => ee.mode
          },
          metadata: Me
        }, null, Ve), (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: ee => "_position" in ee,
            get: ee => ee._position,
            set: (ee, ie) => {
              ee._position = ie
            }
          },
          metadata: Me
        }, ae, ce), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: ee => "_upVector" in ee,
            get: ee => ee._upVector,
            set: (ee, ie) => {
              ee._upVector = ie
            }
          },
          metadata: Me
        }, xe, Le), (0, ye.i)(null, null, Be, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: ee => "fov" in ee,
            get: ee => ee.fov,
            set: (ee, ie) => {
              ee.fov = ie
            }
          },
          metadata: Me
        }, Ce, ve), (0, ye.i)(null, null, Ee, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: ee => "projectionPlaneTilt" in ee,
            get: ee => ee.projectionPlaneTilt,
            set: (ee, ie) => {
              ee.projectionPlaneTilt = ie
            }
          },
          metadata: Me
        }, ue, me), (0, ye.i)(null, null, ge, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: ee => "minZ" in ee,
            get: ee => ee.minZ,
            set: (ee, ie) => {
              ee.minZ = ie
            }
          },
          metadata: Me
        }, le, Se), (0, ye.i)(null, null, Oe, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: ee => "maxZ" in ee,
            get: ee => ee.maxZ,
            set: (ee, ie) => {
              ee.maxZ = ie
            }
          },
          metadata: Me
        }, ne, je), (0, ye.i)(null, null, te, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: ee => "layerMask" in ee,
            get: ee => ee.layerMask,
            set: (ee, ie) => {
              ee.layerMask = ie
            }
          },
          metadata: Me
        }, se, Ie), (0, ye.i)(null, null, Ze, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "fovMode" in ee,
            get: ee => ee.fovMode,
            set: (ee, ie) => {
              ee.fovMode = ie
            }
          },
          metadata: Me
        }, he, Ne), (0, ye.i)(null, null, we, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "cameraRigMode" in ee,
            get: ee => ee.cameraRigMode,
            set: (ee, ie) => {
              ee.cameraRigMode = ie
            }
          },
          metadata: Me
        }, Ge, re), (0, ye.i)(null, null, De, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: ee => "interaxialDistance" in ee,
            get: ee => ee.interaxialDistance,
            set: (ee, ie) => {
              ee.interaxialDistance = ie
            }
          },
          metadata: Me
        }, Qe, ei), (0, ye.i)(null, null, Pe, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: ee => "isStereoscopicSideBySide" in ee,
            get: ee => ee.isStereoscopicSideBySide,
            set: (ee, ie) => {
              ee.isStereoscopicSideBySide = ie
            }
          },
          metadata: Me
        }, ii, Hi), (0, ye.i)(null, null, Ae, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: ee => "ignoreCameraMaxZ" in ee,
            get: ee => ee.ignoreCameraMaxZ,
            set: (ee, ie) => {
              ee.ignoreCameraMaxZ = ie
            }
          },
          metadata: Me
        }, yi, bi), Me && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Me
        })
      })(), ee._CreateDefaultParsedCamera = (ee, ie) => {
        throw (0, Re.l)("UniversalCamera")
      }, ee.PERSPECTIVE_CAMERA = 0, ee.ORTHOGRAPHIC_CAMERA = 1, ee.FOVMODE_VERTICAL_FIXED = 0, ee.FOVMODE_HORIZONTAL_FIXED = 1, ee.RIG_MODE_NONE = 0, ee.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, ee.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, ee.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, ee.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, ee.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, ee.RIG_MODE_VR = 20, ee.RIG_MODE_CUSTOM = 22, ee.ForceAttachControlToAlwaysPreventDefault = !1, ee
    })();

    function Xe(ee, ie) {
      const He = ee.type,
        ye = pe.GetConstructorFromName(He, ee.name, ie, ee.interaxial_distance, ee.isStereoscopicSideBySide),
        be = Te.c.Parse(ye, ee, ie);
      if (void 0 !== ee.parentId && (be._waitingParentId = ee.parentId), void 0 !== ee.parentInstanceIndex && (be._waitingParentInstanceIndex = ee.parentInstanceIndex), be.inputs && (be.inputs.parse(ee), be._setupInputs()), ee.upVector && (be.upVector = Ue.p.FromArray(ee.upVector)), be.setPosition && (be.position.wie(0, 0, 0), be.setPosition(Ue.p.FromArray(ee.position))), ee.target && be.setTarget && be.setTarget(Ue.p.FromArray(ee.target)), ee.cameraRigMode) {
        const ie = ee.interaxial_distance ? {
          interaxialDistance: ee.interaxial_distance
        } : {};
        be.setCameraRigMode(ee.cameraRigMode, ie)
      }
      if (ee.animations) {
        for (let ie = 0; ie < ee.animations.length; ie++) {
          const He = ee.animations[ie],
            ye = (0, oe.c)("BABYLON.Animation");
          ye && be.animations.push(ye.Parse(He))
        }
        Fe.d.ParseAnimationRanges(be, ee, ie)
      }
      return ee.autoAnimate && ie.beginAnimation(be, ee.autoAnimateFrom, ee.autoAnimateTo, ee.autoAnimateLoop, ee.autoAnimateSpeed || 1), void 0 !== ee.isEnabled && be.JY(ee.isEnabled), be
    }
    let ze = !1;

    function Be() {
      ze || (ze = !0, pe.Parse = Xe)
    }
  },
  41339: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(37917);
    class be {
      constructor(ee, ie, He) {
        this._cameraPosition = ie, this._behavior = He, this.activeInput = !1, this.speed = 1, this.i_ = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new ye.p, this.rotationAccumulatedPixels = new ye.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = ye.p.Zero(), this.rotationDeltaCurrentFrame = ye.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new ye.p, this.referenceFrameRate = 60, this._rotationVelocity = new ye.p, this._prevFrameTimeMs = 0, this._scene = ee
      }
      computeCurrentFrameDeltas() {
        const ee = this._scene.Nf().getDeltaTime(),
          ie = this._getEffectiveDeltaMs(ee);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Iee(0), this.rotationDeltaCurrentFrame.Iee(0), this.zoomDeltaCurrentFrame = 0, void(ee > 0 && (this._prevFrameTimeMs = ee));
        this.panDeltaCurrentFrame.Iee(0), this.rotationDeltaCurrentFrame.Iee(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.wie(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * ie, this.panDeltaCurrentFrame), this._rotationVelocity.wie(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.wie(this._rotationVelocity.x * this.speed * this.rotationXSpeed * ie, this._rotationVelocity.y * this.speed * this.rotationYSpeed * ie, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.i_ * this._zoomSpeedMultiplier) * ie, ee > 0 && (this._prevFrameTimeMs = ee), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Iee(0), this.rotationAccumulatedPixels.Iee(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Iee(0), this.rotationAccumulatedPixels.Iee(0)
      }
      resetPanVelocity() {
        this._panVelocity.Iee(0), this.panAccumulatedPixels.Iee(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(ee) {
        const ie = this._scene.Nf().getDeltaTime(),
          He = this._getEffectiveDeltaMs(ie),
          ye = 1e3 / this.referenceFrameRate;
        return Math.pow(ee, He / ye)
      }
      getFrameIndependentInputScale(ee) {
        const ie = 1 - ee;
        if (ie <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(ee)) / ie
      }
      _getEffectiveDeltaMs(ee) {
        return ee > 0 ? ee : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(ee, ie, He) {
        let ye = ee;
        const be = this._scene.Nf().getDeltaTime(),
          Me = this._getEffectiveDeltaMs(be);
        if (0 === Me) return ye;
        const Ke = this.getFrameIndependentDecay(He);
        if (ye *= Ke, 0 !== ie || this.activeInput) {
          const ee = 1 - He;
          ye += ie / Me * (ee > 0 ? (1 - Ke) / ee : 1)
        } else Math.abs(ye) < 1e-6 && (ye = 0);
        return ye
      }
    }
  },
  41345: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor(ee, ie) {
        this.inputMap = [], this.handlers = ee, this._createDefaultEntries = ie, this.resetInputMap()
      }
      resolveInteraction(ee, ie) {
        for (const He of this.inputMap)
          if (He.source === ee && this._entryMatches(He, ie)) return He;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(ee, ie, He) {
        const ye = this.inputMap;
        for (let be = 0; be < ye.length; be++) {
          const Me = ye[be];
          if (Me.source === ee && Me.interaction === ie && this._entryConditionsMatch(Me, He)) return Me
        }
      }
      getEntries(ee, ie, He) {
        const ye = [],
          be = this.inputMap;
        for (let Me = 0; Me < be.length; Me++) {
          const Ke = be[Me];
          Ke.source === ee && Ke.interaction === ie && this._entryConditionsMatch(Ke, He) && ye.push(Ke)
        }
        return ye
      }
      addEntry(ee) {
        const ie = this._entrySpecificity(ee);
        let He = this.inputMap.length;
        for (let ye = 0; ye < this.inputMap.length; ye++)
          if (this._entrySpecificity(this.inputMap[ye]) < ie) {
            He = ye;
            break
          } this.inputMap.splice(He, 0, ee)
      }
      setInteraction(ee, ie, He) {
        const ye = this.resolveInteraction(ee, ie);
        return ye && this._entryCoversAllConditionsOf(ye, ie) ? (ye.interaction = He, !0) : (this.addEntry({
          source: ee,
          ...ie ?? {},
          interaction: He
        }), !0)
      }
      _entryCoversAllConditionsOf(ee, ie) {
        if (!ie) return !0;
        const He = ee;
        for (const ye of Object.keys(ie)) {
          const ee = ie[ye];
          if (void 0 !== ee)
            if ("modifiers" === ye) {
              const ie = He.modifiers ?? {};
              for (const He of Object.keys(ee))
                if (void 0 !== ee[He] && void 0 === ie[He]) return !1
            } else if (void 0 === He[ye]) return !1
        }
        return !0
      }
      setInteractions(ee, ie, He) {
        let ye = 0;
        const be = this.inputMap;
        for (let Me = 0; Me < be.length; Me++) {
          const Ke = be[Me];
          Ke.source === ee && this._entryMatches(Ke, ie) && (Ke.interaction = He, ye++)
        }
        return ye
      }
      _entryMatches(ee, ie) {
        switch (ee.source) {
          case "pointer":
            return (void 0 === ee.button || ee.button === ie?.button) && this._matchModifiers(ee.modifiers, ie?.modifiers);
          case "wheel":
            return this._matchModifiers(ee.modifiers, ie?.modifiers);
          case "touch":
            return void 0 === ee.touchCount || ee.touchCount === ie?.touchCount;
          case "keyboard":
            return (void 0 === ee.key || (Array.isArray(ee.key) ? -1 !== ee.key.indexOf(ie?.key ?? -1) : ee.key === ie?.key)) && this._matchModifiers(ee.modifiers, ie?.modifiers)
        }
      }
      _entryConditionsMatch(ee, ie) {
        if (!ie) return !0;
        switch (ee.source) {
          case "pointer":
            return (!("button" in ie) || ee.button === ie.button) && (!("modifiers" in ie) || this._entryModifiersMatch(ee.modifiers, ie.modifiers));
          case "wheel":
            return !("modifiers" in ie) || this._entryModifiersMatch(ee.modifiers, ie.modifiers);
          case "touch":
            return !("touchCount" in ie) || ee.touchCount === ie.touchCount;
          case "keyboard":
            if ("key" in ie) {
              if (void 0 === ee.key) return void 0 === ie.key;
              if (void 0 === ie.key || (Array.isArray(ee.key) ? -1 === ee.key.indexOf(ie.key) : ee.key !== ie.key)) return !1
            }
            return !("modifiers" in ie) || this._entryModifiersMatch(ee.modifiers, ie.modifiers)
        }
      }
      _entrySpecificity(ee) {
        let ie = 0;
        return "button" in ee && void 0 !== ee.button && ie++, "key" in ee && void 0 !== ee.key && ie++, "touchCount" in ee && void 0 !== ee.touchCount && ie++, "modifiers" in ee && ee.modifiers && ie++, ie
      }
      _matchModifiers(ee, ie) {
        return !ee || (void 0 === ee.ctrl || ee.ctrl === (ie?.ctrl ?? !1)) && ((void 0 === ee.shift || ee.shift === (ie?.shift ?? !1)) && (void 0 === ee.alt || ee.alt === (ie?.alt ?? !1)))
      }
      _entryModifiersMatch(ee, ie) {
        if (!ie) return !ee;
        return void 0 !== ie.ctrl || void 0 !== ie.shift || void 0 !== ie.alt ? (void 0 === ie.ctrl || ee?.ctrl === ie.ctrl) && ((void 0 === ie.shift || ee?.shift === ie.shift) && (void 0 === ie.alt || ee?.alt === ie.alt)) : !ee || void 0 === ee.ctrl && void 0 === ee.shift && void 0 === ee.alt
      }
    }
  },
  41311: (ee, ie, He) => {
    He.d(ie, {
      b: () => Xe,
      c: () => Te
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(41320),
      Ke = He(37917),
      Ue = He(37920),
      Fe = He(41330),
      Je = He(41323),
      oe = He(41339),
      Re = He(41345);
    class ke extends oe.c {
      constructor(ee, ie, He) {
        super(ee, ie, He), this.input = new Re.d({
          translate: (ee, ie, He) => {
            this.panAccumulatedPixels.x += ee, this.panAccumulatedPixels.y += ie, this.panAccumulatedPixels.z += He
          },
          rotate: (ee, ie) => {
            this.rotationAccumulatedPixels.x += ee, this.rotationAccumulatedPixels.y += ie
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
    const qe = Ke.b.Zero(),
      fe = Ke.f.Identity();
    let Te = (() => {
        var ee;
        let ie, He, Je, oe, Re = Me.d,
          Te = [],
          pe = [],
          Xe = [],
          ze = [],
          Be = [],
          Ee = [],
          ge = [],
          Oe = [];
        return ee = class extends Re {
          get inertia() {
            return this._targetInertia
          }
          set inertia(ee) {
            this._targetInertia = ee, this.movement && (this.movement.panInertia = ee, this.movement.rotationInertia = ee)
          }
          constructor(ee, ie, He) {
            super(ee, ie, He, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Ke.p(0, 0, 0), this.cameraRotation = new Ke.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, ye.l)(this, Te, !1), this.rotation = ((0, ye.l)(this, pe), (0, ye.l)(this, Xe, void 0)), this.rotationQuaternion = (0, ye.l)(this, ze), this.speed = (0, ye.l)(this, Be, 2), this.noRotationConstraint = ((0, ye.l)(this, Ee), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = Ue.b, this._rotationEpsilon = Ue.b, this.lockedTarget = (0, ye.l)(this, ge, null), this._currentTarget = ((0, ye.l)(this, Oe), Ke.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Ke.b.Zero(), this._cameraTransformMatrix = Ke.b.Zero(), this._cameraRotationMatrix = Ke.b.Zero(), this._transformedReferencePoint = Ke.p.Zero(), this._deferredPositionUpdate = new Ke.p, this._deferredRotationQuaternionUpdate = new Ke.f, this._deferredRotationUpdate = new Ke.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Ke.p.Forward(this.Xx().useRightHandedSystem), this.rotation = new Ke.p(0, this.Xx().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new ke(this.Xx(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(ee) {
            this.getWorldMatrix();
            const ie = Ke.j.rf[0],
              He = Ke.j.rf[1];
            return He.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(He, ie), ie.scaleInPlace(ee), this.globalPosition.add(ie)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const ee = this.lockedTarget;
              ee.computeWorldMatrix().getTranslationToRef(ee.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.wie(0, 0, 0), this.cameraRotation.wie(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Ke.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Ke.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Ke.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(ee) {
            ee || super._updateCache();
            const ie = this._getLockedTargetPosition();
            ie ? this._cache.lockedTarget ? this._cache.lockedTarget.jD(ie) : this._cache.lockedTarget = ie.clone() : this._cache.lockedTarget = null, this._cache.rotation.jD(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.jD(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const ee = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(ee) : !ee) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const ee = this.Nf();
            return this.speed * Math.sqrt(ee.getDeltaTime() / (100 * ee.getFps()))
          }
          setTarget(ee) {
            this.upVector.normalize(), this._initialFocalDistance = ee.subtract(this.position).length(), this.position.z === ee.z && (this.position.z += Ue.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.Xx().useRightHandedSystem ? Ke.b.LookAtRHToRef(this.position, ee, Ke.p.UpReadOnly, qe) : Ke.b.LookAtLHToRef(this.position, ee, Ke.p.UpReadOnly, qe), qe.invert();
            const ie = this.rotationQuaternion || fe;
            Ke.f.FromRotationMatrixToRef(qe, ie), ie.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(ee) {
            this.setTarget(ee)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Ke.j.Matrix[0]), Ke.p.TransformNormalToRef(this.cameraDirection, Ke.j.Matrix[0], Ke.j.rf[0]), this._deferredPositionUpdate.addInPlace(Ke.j.rf[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.jD(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.jD(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const ee = this.movement,
              ie = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            ee.panAccumulatedPixels.addInPlace(this.cameraDirection), ee.rotationAccumulatedPixels.x += this.cameraRotation.x, ee.rotationAccumulatedPixels.y += this.cameraRotation.y, ee.computeCurrentFrameDeltas(), this.cameraDirection.jD(ee.panDeltaCurrentFrame), this.cameraRotation.set(ee.rotationDeltaCurrentFrame.x, ee.rotationDeltaCurrentFrame.y);
            const He = this.speed * this._panningEpsilon;
            !ie && Math.abs(this.cameraDirection.x) < He && Math.abs(this.cameraDirection.y) < He && Math.abs(this.cameraDirection.z) < He && (this.cameraDirection.Iee(0), ee.resetPanVelocity());
            const ye = this.invertRotation ? -this.inverseRotationSpeed : 1,
              be = this._decideIfNeedsToMove(),
              Me = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.jD(this.rotation), this._deferredPositionUpdate.jD(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.jD(this.rotationQuaternion), be && this._updatePosition(), Me) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * ye, this._deferredRotationUpdate.y += this.cameraRotation.y * ye, !this.noRotationConstraint) {
                const ee = 1.570796;
                this._deferredRotationUpdate.x > ee && (this._deferredRotationUpdate.x = ee), this._deferredRotationUpdate.x < -ee && (this._deferredRotationUpdate.x = -ee)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.jD(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Ke.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.jD(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Iee(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Ke.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Ke.p.TransformNormalToRef(Ke.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Ke.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Fe.d.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Ke.f.FromEulerVectorToRef(this.rotation, fe), Fe.d.Y.rotateByQuaternionToRef(fe, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(ee, ie, He) {
            if (this.Xx().useRightHandedSystem ? Ke.b.LookAtRHToRef(ee, ie, He, this._viewMatrix) : Ke.b.LookAtLHToRef(ee, ie, He, this._viewMatrix), this.parent) {
              const ee = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(ee, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(ie, He) {
            if (this.cameraRigMode !== Me.d.RIG_MODE_NONE) {
              const He = new ee(ie, this.position.clone(), this.Xx());
              return He.isRigCamera = !0, He.rigParent = this, this.cameraRigMode === Me.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Ke.f), He._cameraRigParams = {}, He.rotationQuaternion = new Ke.f), He.mode = this.mode, He.orthoLeft = this.orthoLeft, He.orthoRight = this.orthoRight, He.orthoTop = this.orthoTop, He.orthoBottom = this.orthoBottom, He
            }
            return null
          }
          _updateRigCameras() {
            const ee = this._rigCameras[0],
              ie = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Me.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Me.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Me.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Me.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Me.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const He = this.cameraRigMode === Me.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  ye = this.cameraRigMode === Me.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * He, ee), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * ye, ie);
                break
              }
              case Me.d.RIG_MODE_VR:
                ee.rotationQuaternion && ie.rotationQuaternion && this.rotationQuaternion ? (ee.rotationQuaternion.jD(this.rotationQuaternion), ie.rotationQuaternion.jD(this.rotationQuaternion)) : (ee.rotation.jD(this.rotation), ie.rotation.jD(this.rotation)), ee.position.jD(this.position), ie.position.jD(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(ie, He) {
            this.getTarget().subtractToRef(this.position, ee._TargetFocalPoint), ee._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const ye = ee._TargetFocalPoint.addInPlace(this.position);
            Ke.b.TranslationToRef(-ye.x, -ye.y, -ye.z, ee._TargetTransformMatrix), ee._TargetTransformMatrix.multiplyToRef(Ke.b.RotationAxis(He.upVector, ie), ee._RigCamTransformMatrix), Ke.b.TranslationToRef(ye.x, ye.y, ye.z, ee._TargetTransformMatrix), ee._RigCamTransformMatrix.multiplyToRef(ee._TargetTransformMatrix, ee._RigCamTransformMatrix), Ke.p.TransformCoordinatesToRef(this.position, ee._RigCamTransformMatrix, He.position), He.setTarget(ye)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(Re[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.R)()], He = [(0, be.P)()], Je = [(0, be.R)()], oe = [(0, be.C)("lockedTargetId")], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: ee => "updateUpVectorFromRotation" in ee,
              get: ee => ee.updateUpVectorFromRotation,
              set: (ee, ie) => {
                ee.updateUpVectorFromRotation = ie
              }
            },
            metadata: Me
          }, Te, pe), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: ee => "rotation" in ee,
              get: ee => ee.rotation,
              set: (ee, ie) => {
                ee.rotation = ie
              }
            },
            metadata: Me
          }, Xe, ze), (0, ye.i)(null, null, Je, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: ee => "speed" in ee,
              get: ee => ee.speed,
              set: (ee, ie) => {
                ee.speed = ie
              }
            },
            metadata: Me
          }, Be, Ee), (0, ye.i)(null, null, oe, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: ee => "lockedTarget" in ee,
              get: ee => ee.lockedTarget,
              set: (ee, ie) => {
                ee.lockedTarget = ie
              }
            },
            metadata: Me
          }, ge, Oe), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee._RigCamTransformMatrix = new Ke.b, ee._TargetTransformMatrix = new Ke.b, ee._TargetFocalPoint = new Ke.p, ee
      })(),
      pe = !1;

    function Xe() {
      pe || (pe = !0, Je.d.AddNodeConstructor("TargetCamera", ((ee, ie) => () => new Te(ee, Ke.p.Zero(), ie))))
    }
  },
  41070: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(41e3);
    let be = !1;

    function Me() {
      be || (be = !0, ye.e.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, ye.e.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, ye.e.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, ye.e.prototype.getAspectRatio = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = ee.viewport;
        return this.getRenderWidth(ie) * He.width / (this.getRenderHeight(ie) * He.height)
      }, ye.e.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, ye.e.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41153: (ee, ie, He) => {
    var ye = He(41e3),
      be = He(41159);
    let Me = !1;
    Me || (Me = !0, (0, be.u)(), ye.e.prototype._loadFileAsync = async function(ee, ie, He) {
      return await new Promise(((ye, be) => {
        this._loadFile(ee, (ee => {
          ye(ee)
        }), void 0, ie, He, ((ee, ie) => {
          be(ie)
        }))
      }))
    })
  },
  41147: (ee, ie, He) => {
    (0, He(41072).e)()
  },
  41072: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(41e3);
    let be = !1;

    function Me() {
      be || (be = !0, ye.e.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, ye.e.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, ye.e.prototype.createRenderPassId = function(ee) {
        const ie = ++ye.e._RenderPassIdCounter;
        return this._renderPassNames[ie] = ee ?? "NONAME", ie
      }, ye.e.prototype.releaseRenderPassId = function(ee) {
        this._renderPassNames[ee] = void 0;
        for (let ie = 0; ie < this.scenes.length; ++ie) {
          const He = this.scenes[ie];
          for (let ie = 0; ie < He.meshes.length; ++ie) {
            const ye = He.meshes[ie];
            if (ye._releaseRenderPassId(ee), ye.pW)
              for (let ie = 0; ie < ye.pW.length; ++ie) {
                ye.pW[ie]._removeDrawWrapper(ee)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(ee)
      })
    }
  },
  41185: (ee, ie, He) => {
    var ye = He(41191),
      be = He(41e3);
    let Me = !1;
    Me || (Me = !0, be.e.GetCompatibleTextureLoader = ye.c)
  },
  41080: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me
    });
    var ye = He(40936);
    let be = !1;

    function Me() {
      be || (be = !0, ye.ThinEngine.prototype.setAlphaMode = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[He] === ee) {
          if (!ie) {
            const ie = 0 === ee;
            this.depthCullingState.depthMask !== ie && (this.depthCullingState.depthMask = ie)
          }
          return
        }
        const ye = 0 === ee;
        this._alphaState.setAlphaBlend(!ye, He), this._alphaState.setAlphaMode(ee, He), ie || (this.depthCullingState.depthMask = ye), this._alphaMode[He] = ee
      })
    }
  },
  41092: (ee, ie, He) => {
    var ye = He(40924),
      be = He(39467),
      Me = He(40936),
      Ke = He(41098),
      Ue = He(41059);
    class Fe extends Ke.b {
      setDepthStencilTexture(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(ee, ie), !ee) return;
        const He = this._engine,
          ye = this._context,
          be = ee._hardwareTexture;
        if (be && ee._autoMSAAManagement && this._MSAAFramebuffer) {
          const ie = He._currentFramebuffer;
          He._bindUnboundFramebuffer(this._MSAAFramebuffer), ye.framebufferRenderbuffer(ye.FRAMEBUFFER, (0, Ue.e)(ee.format) ? ye.DEPTH_STENCIL_ATTACHMENT : ye.DEPTH_ATTACHMENT, ye.RENDERBUFFER, be.getMSAARenderBuffer()), He._bindUnboundFramebuffer(ie)
        }
      }
      constructor(ee, ie, He, ye, be) {
        super(ee, ie, He, ye), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = be
      }
      _cloneRenderTargetWrapper() {
        let ee;
        return this._colorTextureArray && this._depthStencilTextureArray ? (ee = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), ee.texture.isReady = !0) : ee = super._cloneRenderTargetWrapper(), ee
      }
      _swapRenderTargetWrapper(ee) {
        super._swapRenderTargetWrapper(ee), ee._framebuffer = this._framebuffer, ee._depthStencilBuffer = this._depthStencilBuffer, ee._MSAAFramebuffer = this._MSAAFramebuffer, ee._colorTextureArray = this._colorTextureArray, ee._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Me = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const ee = this._engine,
            ie = ee._currentFramebuffer,
            He = this._context;
          ee._bindUnboundFramebuffer(this._framebuffer), He.framebufferRenderbuffer(He.FRAMEBUFFER, He.DEPTH_STENCIL_ATTACHMENT, He.RENDERBUFFER, null), He.framebufferRenderbuffer(He.FRAMEBUFFER, He.DEPTH_ATTACHMENT, He.RENDERBUFFER, null), He.framebufferRenderbuffer(He.FRAMEBUFFER, He.STENCIL_ATTACHMENT, He.RENDERBUFFER, null), ee._bindUnboundFramebuffer(ie), He.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(ee, ie, He, ye, be, Me)
      }
      shareDepth(ee) {
        super.shareDepth(ee);
        const ie = this._context,
          He = this._depthStencilBuffer,
          ye = ee._MSAAFramebuffer || ee._framebuffer,
          be = this._engine;
        ee._depthStencilBuffer && ee._depthStencilBuffer !== He && ie.deleteRenderbuffer(ee._depthStencilBuffer), ee._depthStencilBuffer = He;
        const Me = ee._generateStencilBuffer ? ie.DEPTH_STENCIL_ATTACHMENT : ie.DEPTH_ATTACHMENT;
        be._bindUnboundFramebuffer(ye), ie.framebufferRenderbuffer(ie.FRAMEBUFFER, Me, ie.RENDERBUFFER, He), be._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const be = ee._hardwareTexture;
        if (!be) return;
        const Me = this._framebuffer,
          Ke = this._engine,
          Ue = Ke._currentFramebuffer;
        let Fe;
        if (Ke._bindUnboundFramebuffer(Me), Ke.dT > 1) {
          const Me = this._context;
          Fe = Me["COLOR_ATTACHMENT" + ie], ee.is2DArray || ee.is3D ? (He = He ?? this.layerIndices?.[ie] ?? 0, Me.framebufferTextureLayer(Me.FRAMEBUFFER, Fe, be.underlyingResource, ye, He)) : ee.isCube ? (He = He ?? this.faceIndices?.[ie] ?? 0, Me.framebufferTexture2D(Me.FRAMEBUFFER, Fe, Me.TEXTURE_CUBE_MAP_POSITIVE_X + He, be.underlyingResource, ye)) : Me.framebufferTexture2D(Me.FRAMEBUFFER, Fe, Me.TEXTURE_2D, be.underlyingResource, ye)
        } else {
          const ee = this._context;
          Fe = ee["COLOR_ATTACHMENT" + ie + "_WEBGL"];
          const Me = void 0 !== He ? ee.TEXTURE_CUBE_MAP_POSITIVE_X + He : ee.TEXTURE_2D;
          ee.framebufferTexture2D(ee.FRAMEBUFFER, Fe, Me, be.underlyingResource, ye)
        }
        if (ee._autoMSAAManagement && this._MSAAFramebuffer) {
          const ee = this._context;
          Ke._bindUnboundFramebuffer(this._MSAAFramebuffer), ee.framebufferRenderbuffer(ee.FRAMEBUFFER, Fe, ee.RENDERBUFFER, be.getMSAARenderBuffer())
        }
        Ke._bindUnboundFramebuffer(Ue)
      }
      setTexture(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(ee, ie, He), this._bindTextureRenderTarget(ee, ie)
      }
      setLayerAndFaceIndices(ee, ie) {
        if (super.setLayerAndFaceIndices(ee, ie), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const He = this._attachments?.length ?? this.textures.length;
        for (let ye = 0; ye < He; ye++) {
          const ee = this.textures[ye];
          ee && (ee.is2DArray || ee.is3D ? this._bindTextureRenderTarget(ee, ye, this.layerIndices[ye]) : ee.isCube ? this._bindTextureRenderTarget(ee, ye, this.faceIndices[ye]) : this._bindTextureRenderTarget(ee, ye))
        }
      }
      setLayerAndFaceIndex() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(ee, ie, He), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const ye = this.textures[ee];
        ye.is2DArray || ye.is3D ? this._bindTextureRenderTarget(this.textures[ee], ee, this.layerIndices[ee]) : ye.isCube && this._bindTextureRenderTarget(this.textures[ee], ee, this.faceIndices[ee])
      }
      resolveMSAATextures() {
        const ee = this._engine,
          ie = ee._currentFramebuffer;
        ee._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), ee._bindUnboundFramebuffer(ie)
      }
      dispose() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const ie = this._context;
        ee || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (ie.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (ie.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (ie.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(ee)
      }
    }
    let Je = !1;
    Je || (Je = !0, Me.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(ee, ie, He) {
      const ye = new Fe(ee, ie, He, this, this._gl);
      return this._renderTargetWrapperCache.push(ye), ye
    }, Me.ThinEngine.prototype.createRenderTargetTexture = function(ee, ie) {
      const He = this._createHardwareRenderTargetWrapper(!1, !1, ee);
      let ye, be, Me = !0,
        Ke = !1,
        Ue = !1,
        Fe = 1;
      void 0 !== ie && "object" === typeof ie && (Me = ie.generateDepthBuffer ?? !0, Ke = !!ie.generateStencilBuffer, Ue = !!ie.noColorAttachment, ye = ie.colorAttachment, Fe = ie.samples ?? 1, be = ie.label);
      const Je = ye || (Ue ? null : this._createInternalTexture(ee, ie, !0, 5)),
        oe = ee.width || ee,
        Re = ee.height || ee,
        ke = this._currentFramebuffer,
        qe = this._gl,
        fe = qe.createFramebuffer();
      if (this._bindUnboundFramebuffer(fe), He._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ke, Me, oe, Re), !Je || Je.is2DArray || Je.is3D || qe.framebufferTexture2D(qe.FRAMEBUFFER, qe.COLOR_ATTACHMENT0, qe.TEXTURE_2D, Je._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(ke), He.label = be ?? "RenderTargetWrapper", He._framebuffer = fe, He._generateDepthBuffer = Me, He._generateStencilBuffer = Ke, He.setTextures(Je), ye) {
        if (He._samples = ye.samples, ye.samples > 1) {
          const ee = ye._hardwareTexture.getMSAARenderBuffer(0);
          He._MSAAFramebuffer = qe.createFramebuffer(), this._bindUnboundFramebuffer(He._MSAAFramebuffer), qe.framebufferRenderbuffer(qe.FRAMEBUFFER, qe.COLOR_ATTACHMENT0, qe.RENDERBUFFER, ee), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(He, Fe);
      return He
    }, Me.ThinEngine.prototype._createDepthStencilTexture = function(ee, ie, He) {
      const Me = this._gl,
        Ke = ee.layers || 0,
        Fe = ee.depth || 0;
      let Je = Me.TEXTURE_2D;
      0 !== Ke ? Je = Me.TEXTURE_2D_ARRAY : 0 !== Fe && (Je = Me.TEXTURE_3D);
      const oe = new ye.b(this, 12);
      if (oe.label = ie.label, !this._caps.depthTextureExtension) return be.e.Error("Depth texture is not supported by your browser or hardware."), oe;
      const Re = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...ie
      };
      if (this._bindTextureDirectly(Je, oe, !0), this._setupDepthStencilTexture(oe, ee, 0 !== Re.comparisonFunction && Re.bilinearFiltering, Re.comparisonFunction, Re.samples), void 0 !== Re.depthTextureFormat) {
        if (15 !== Re.depthTextureFormat && 16 !== Re.depthTextureFormat && 17 !== Re.depthTextureFormat && 13 !== Re.depthTextureFormat && 14 !== Re.depthTextureFormat && 18 !== Re.depthTextureFormat) return be.e.Error(`Depth texture ${Re.depthTextureFormat} format is not supported.`), oe;
        oe.format = Re.depthTextureFormat
      } else oe.format = Re.generateStencil ? 13 : 16;
      const ke = (0, Ue.e)(oe.format),
        qe = this._getWebGLTextureTypeFromDepthTextureFormat(oe.format),
        fe = ke ? Me.DEPTH_STENCIL : Me.DEPTH_COMPONENT,
        Te = this._getInternalFormatFromDepthTextureFormat(oe.format, !0, ke);
      return oe.is2DArray ? Me.texImage3D(Je, 0, Te, oe.width, oe.height, Ke, 0, fe, qe, null) : oe.is3D ? Me.texImage3D(Je, 0, Te, oe.width, oe.height, Fe, 0, fe, qe, null) : Me.texImage2D(Je, 0, Te, oe.width, oe.height, 0, fe, qe, null), this._bindTextureDirectly(Je, null), this._internalTexturesCache.push(oe), He._depthStencilBuffer && (Me.deleteRenderbuffer(He._depthStencilBuffer), He._depthStencilBuffer = null), this._bindUnboundFramebuffer(He._MSAAFramebuffer ?? He._framebuffer), He._generateStencilBuffer = ke, He._depthStencilTextureWithStencil = ke, He._depthStencilBuffer = this._setupFramebufferDepthAttachments(He._generateStencilBuffer, He._generateDepthBuffer, He.width, He.height, He.samples, oe.format), this._bindUnboundFramebuffer(null), oe
    }, Me.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(ee, ie) {
      if (this.dT < 2 || !ee) return 1;
      if (ee.samples === ie) return ie;
      const He = this._gl;
      ie = Math.min(ie, this.getCaps().maxMSAASamples), ee._depthStencilBuffer && (He.deleteRenderbuffer(ee._depthStencilBuffer), ee._depthStencilBuffer = null), ee._MSAAFramebuffer && (He.deleteFramebuffer(ee._MSAAFramebuffer), ee._MSAAFramebuffer = null);
      const ye = ee.texture?._hardwareTexture;
      if (ye?.releaseMSAARenderBuffers(), ee.texture && ie > 1 && "function" === typeof He.renderbufferStorageMultisample) {
        const be = He.createFramebuffer();
        if (!be) throw new Error("Unable to create multi sampled framebuffer");
        ee._MSAAFramebuffer = be, this._bindUnboundFramebuffer(ee._MSAAFramebuffer);
        const Me = this._createRenderBuffer(ee.texture.width, ee.texture.height, ie, -1, this._getRGBABufferInternalSizedFormat(ee.texture.type, ee.texture.format, ee.texture._useSRGBBuffer), He.COLOR_ATTACHMENT0, !1);
        if (!Me) throw new Error("Unable to create multi sampled framebuffer");
        ye?.addMSAARenderBuffer(Me)
      }
      this._bindUnboundFramebuffer(ee._MSAAFramebuffer ?? ee._framebuffer), ee.texture && (ee.texture.samples = ie), ee._samples = ie;
      const be = ee._depthStencilTexture ? ee._depthStencilTexture.format : void 0;
      return ee._depthStencilBuffer = this._setupFramebufferDepthAttachments(ee._generateStencilBuffer, ee._generateDepthBuffer, ee.width, ee.height, ie, be), this._bindUnboundFramebuffer(null), ie
    }, Me.ThinEngine.prototype._setupDepthStencilTexture = function(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Me = ie.width ?? ie,
        Ke = ie.height ?? ie,
        Ue = ie.layers || 0,
        Fe = ie.depth || 0;
      ee.baseWidth = Me, ee.baseHeight = Ke, ee.width = Me, ee.height = Ke, ee.is2DArray = Ue > 0, ee.depth = Ue || Fe, ee.isReady = !0, ee.samples = be, ee.generateMipMaps = !1, ee.samplingMode = He ? 2 : 1, ee.type = 0, ee._comparisonFunction = ye;
      const Je = this._gl,
        oe = this._getTextureTarget(ee),
        Re = this._getSamplingParameters(ee.samplingMode, !1);
      Je.texParameteri(oe, Je.TEXTURE_MAG_FILTER, Re.mag), Je.texParameteri(oe, Je.TEXTURE_MIN_FILTER, Re.min), Je.texParameteri(oe, Je.TEXTURE_WRAP_S, Je.CLAMP_TO_EDGE), Je.texParameteri(oe, Je.TEXTURE_WRAP_T, Je.CLAMP_TO_EDGE), this.dT > 1 && (0 === ye ? (Je.texParameteri(oe, Je.TEXTURE_COMPARE_FUNC, 515), Je.texParameteri(oe, Je.TEXTURE_COMPARE_MODE, Je.NONE)) : (Je.texParameteri(oe, Je.TEXTURE_COMPARE_FUNC, ye), Je.texParameteri(oe, Je.TEXTURE_COMPARE_MODE, Je.COMPARE_REF_TO_TEXTURE)))
    })
  },
  40913: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye.b
    });
    var ye = He(40922);
    (0, He(41080).d)();
    var be = He(40936);
    let Me = !1;
    ! function() {
      if (Me) return;
      Me = !0;
      const ee = new WeakMap,
        ie = new WeakMap,
        He = new WeakMap,
        ye = new WeakMap;
      be.ThinEngine.prototype.getAlphaToCoverage = function() {
        return ee.get(this) ?? !1
      }, be.ThinEngine.prototype.setAlphaToCoverage = function(He) {
        (ee.get(this) !== He || this._gl && ie.get(this) !== this._gl) && (ee.set(this, He), this._gl && (He ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), ie.set(this, this._gl)))
      }, Object.defineProperty(be.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (ye.get(this) !== this._gl && (He.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), ye.set(this, this._gl)), He.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Ke = He(40924),
      Ue = He(39467),
      Fe = He(41044);
    let Je = !1;
    ! function() {
      function ee(ee, ie, He, ye) {
        let be, Me = 1;
        1 === ye ? be = new Float32Array(ie * He * 4) : 2 === ye ? (be = new Uint16Array(ie * He * 4), Me = 15360) : be = 7 === ye ? new Uint32Array(ie * He * 4) : new Uint8Array(ie * He * 4);
        for (let Ke = 0; Ke < ie; Ke++)
          for (let ye = 0; ye < He; ye++) {
            const He = 3 * (ye * ie + Ke),
              Ue = 4 * (ye * ie + Ke);
            be[Ue + 0] = ee[He + 0], be[Ue + 1] = ee[He + 1], be[Ue + 2] = ee[He + 2], be[Ue + 3] = Me
          }
        return be
      }

      function ie(ee) {
        return function(ie, He, ye, be, Me, Ue, Fe, Je) {
          let oe = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Re = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const ke = ee ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            qe = ee ? 10 : 11,
            fe = new Ke.b(this, qe);
          fe.baseWidth = He, fe.baseHeight = ye, fe.baseDepth = be, fe.width = He, fe.height = ye, fe.depth = be, fe.format = Me, fe.type = Re, fe.generateMipMaps = Ue, fe.samplingMode = Je, ee ? fe.is3D = !0 : fe.is2DArray = !0, this._doNotHandleContextLost || (fe._bufferView = ie), ee ? this.updateRawTexture3D(fe, ie, Me, Fe, oe, Re) : this.updateRawTexture2DArray(fe, ie, Me, Fe, oe, Re), this._bindTextureDirectly(ke, fe, !0);
          const Te = this._getSamplingParameters(Je, Ue);
          return this._gl.texParameteri(ke, this._gl.TEXTURE_MAG_FILTER, Te.mag), this._gl.texParameteri(ke, this._gl.TEXTURE_MIN_FILTER, Te.min), Ue && this._gl.generateMipmap(ke), this._bindTextureDirectly(ke, null), this._internalTexturesCache.push(fe), fe
        }
      }

      function He(ee) {
        return function(ie, He, ye, be) {
          let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Ue = ee ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Fe = this._getWebGLTextureType(Ke),
            Je = this._getInternalFormat(ye),
            oe = this._getRGBABufferInternalSizedFormat(Ke, ye);
          this._bindTextureDirectly(Ue, ie, !0), this._unpackFlipY(void 0 === be || !!be), this._doNotHandleContextLost || (ie._bufferView = He, ie.format = ye, ie.invertY = be, ie._compression = Me), ie.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Me && He ? this._gl.compressedTexImage3D(Ue, 0, this.getCaps().s3tc[Me], ie.width, ie.height, ie.depth, 0, He) : this._gl.texImage3D(Ue, 0, oe, ie.width, ie.height, ie.depth, 0, Je, Fe, He), ie.generateMipMaps && this._gl.generateMipmap(Ue), this._bindTextureDirectly(Ue, null), ie.isReady = !0
        }
      }
      Je || (Je = !0, be.ThinEngine.prototype.updateRawTexture = function(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!ee) return;
        const Ue = this._getRGBABufferInternalSizedFormat(Me, He, Ke),
          Fe = this._getInternalFormat(He),
          Je = this._getWebGLTextureType(Me);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, ee, !0), this._unpackFlipY(void 0 === ye || !!ye), this._doNotHandleContextLost || (ee._bufferView = ie, ee.format = He, ee.type = Me, ee.invertY = ye, ee._compression = be), ee.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), be && ie ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[be], ee.width, ee.height, 0, ie) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, Ue, ee.width, ee.height, 0, Fe, Je, ie), ee.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), ee.isReady = !0
      }, be.ThinEngine.prototype.createRawTexture = function(ee, ie, He, ye, be, Me, Ue) {
        let Fe = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Je = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          oe = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Re = new Ke.b(this, 3);
        Re.baseWidth = ie, Re.baseHeight = He, Re.width = ie, Re.height = He, Re.format = ye, Re.generateMipMaps = be, Re.samplingMode = Ue, Re.invertY = Me, Re._compression = Fe, Re.type = Je, Re._useSRGBBuffer = this._getUseSRGBBuffer(oe, !be), this._doNotHandleContextLost || (Re._bufferView = ee), this.updateRawTexture(Re, ee, ye, Me, Fe, Je, Re._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Re, !0);
        const ke = this._getSamplingParameters(Ue, be);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, ke.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, ke.min), be && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Re), Re
      }, be.ThinEngine.prototype.createRawCubeTexture = function(ee, ie, He, ye, be, Me, Je) {
        let oe = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Re = this._gl,
          ke = new Ke.b(this, 8);
        ke.isCube = !0, ke.format = He, ke.type = ye, this._doNotHandleContextLost || (ke._bufferViewArray = ee);
        const qe = this._getWebGLTextureType(ye);
        let fe = this._getInternalFormat(He);
        fe === Re.RGB && (fe = Re.RGBA), qe !== Re.FLOAT || this._caps.textureFloatLinearFiltering ? qe !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? qe !== Re.FLOAT || this._caps.textureFloatRender ? qe !== Re.HALF_FLOAT || this._caps.colorBufferFloat || (be = !1, Ue.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (be = !1, Ue.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (be = !1, Je = 1, Ue.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (be = !1, Je = 1, Ue.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Te = ie,
          pe = Te;
        ke.width = Te, ke.height = pe, ke.invertY = Me, ke._compression = oe;
        if (!this.needPOTTextures || (0, Fe.l)(ke.width) && (0, Fe.l)(ke.height) || (be = !1), ee) this.updateRawCubeTexture(ke, ee, He, ye, Me, oe);
        else {
          const ee = this._getRGBABufferInternalSizedFormat(ye),
            ie = 0;
          this._bindTextureDirectly(Re.TEXTURE_CUBE_MAP, ke, !0);
          for (let He = 0; He < 6; He++) oe ? Re.compressedTexImage2D(Re.TEXTURE_CUBE_MAP_POSITIVE_X + He, ie, this.getCaps().s3tc[oe], ke.width, ke.height, 0, void 0) : Re.texImage2D(Re.TEXTURE_CUBE_MAP_POSITIVE_X + He, ie, ee, ke.width, ke.height, 0, fe, qe, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, ke, !0), ee && be && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Xe = this._getSamplingParameters(Je, be);
        return Re.texParameteri(Re.TEXTURE_CUBE_MAP, Re.TEXTURE_MAG_FILTER, Xe.mag), Re.texParameteri(Re.TEXTURE_CUBE_MAP, Re.TEXTURE_MIN_FILTER, Xe.min), Re.texParameteri(Re.TEXTURE_CUBE_MAP, Re.TEXTURE_WRAP_S, Re.CLAMP_TO_EDGE), Re.texParameteri(Re.TEXTURE_CUBE_MAP, Re.TEXTURE_WRAP_T, Re.CLAMP_TO_EDGE), this._bindTextureDirectly(Re.TEXTURE_CUBE_MAP, null), ke.generateMipMaps = be, ke.samplingMode = Je, ke.isReady = !0, ke
      }, be.ThinEngine.prototype.updateRawCubeTexture = function(ie, He, ye, be, Me) {
        let Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ue = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        ie._bufferViewArray = He, ie.format = ye, ie.type = be, ie.invertY = Me, ie._compression = Ke;
        const Je = this._gl,
          oe = this._getWebGLTextureType(be);
        let Re = this._getInternalFormat(ye);
        const ke = this._getRGBABufferInternalSizedFormat(be);
        let qe = !1;
        Re === Je.RGB && (Re = Je.RGBA, qe = !0), this._bindTextureDirectly(Je.TEXTURE_CUBE_MAP, ie, !0), this._unpackFlipY(void 0 === Me || !!Me), ie.width % 4 !== 0 && Je.pixelStorei(Je.UNPACK_ALIGNMENT, 1);
        for (let Fe = 0; Fe < 6; Fe++) {
          let ye = He[Fe];
          Ke ? Je.compressedTexImage2D(Je.TEXTURE_CUBE_MAP_POSITIVE_X + Fe, Ue, this.getCaps().s3tc[Ke], ie.width, ie.height, 0, ye) : (qe && (ye = ee(ye, ie.width, ie.height, be)), Je.texImage2D(Je.TEXTURE_CUBE_MAP_POSITIVE_X + Fe, Ue, ke, ie.width, ie.height, 0, Re, oe, ye))
        }(!this.needPOTTextures || (0, Fe.l)(ie.width) && (0, Fe.l)(ie.height)) && ie.generateMipMaps && 0 === Ue && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), ie.isReady = !0
      }, be.ThinEngine.prototype.createRawCubeTextureFromUrl = function(ie, He, ye, be, Me, Ke, Ue, Fe) {
        let Je = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          oe = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Re = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          ke = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const qe = this._gl,
          fe = this.createRawCubeTexture(null, ye, be, Me, !Ke, ke, Re, null);
        He?.addPendingData(fe), fe.url = ie, fe.isReady = !1, this._internalTexturesCache.push(fe);
        const Te = (ee, ie) => {
            He?.removePendingData(fe), oe && oe(ee ? ee.status + " " + ee.statusText : "Failed to parse texture data", ie)
          },
          pe = async ie => {
            if (!fe._hardwareTexture) return;
            const ye = Ue(ie);
            if (!ye) return;
            const Ke = ye instanceof Promise ? await ye : ye,
              oe = fe.width;
            if (Fe) {
              const ie = this._getWebGLTextureType(Me);
              let He = this._getInternalFormat(be);
              const ye = this._getRGBABufferInternalSizedFormat(Me);
              let Ue = !1;
              He === qe.RGB && (He = qe.RGBA, Ue = !0), this._bindTextureDirectly(qe.TEXTURE_CUBE_MAP, fe, !0), this._unpackFlipY(!1);
              const Je = Fe(Ke);
              for (let be = 0; be < Je.length; be++) {
                const Ke = oe >> be;
                for (let Fe = 0; Fe < 6; Fe++) {
                  let oe = Je[be][Fe];
                  Ue && (oe = ee(oe, Ke, Ke, Me)), qe.texImage2D(Fe, be, ye, Ke, Ke, 0, He, ie, oe)
                }
              }
              this._bindTextureDirectly(qe.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(fe, Ke, be, Me, ke);
            fe.isReady = !0, He?.removePendingData(fe), fe.onLoadedObservable.notifyObservers(fe), fe.onLoadedObservable.clear(), Je && Je()
          };
        return this._loadFile(ie, (ee => {
          pe(ee).catch((ee => {
            Te(void 0, ee)
          }))
        }), void 0, He?.offlineProvider, !0, Te), fe
      }, be.ThinEngine.prototype.createRawTexture2DArray = ie(!1), be.ThinEngine.prototype.createRawTexture3D = ie(!0), be.ThinEngine.prototype.updateRawTexture2DArray = He(!1), be.ThinEngine.prototype.updateRawTexture3D = He(!0))
    }();
    var oe = He(40979);
    let Re = !1;
    Re || (Re = !0, be.ThinEngine.prototype._readTexturePixelsSync = function(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ke = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Ue = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Fe = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Je = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Re = this._gl;
      if (!Re) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const ee = Re.createFramebuffer();
        if (!ee) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = ee
      }
      Re.bindFramebuffer(Re.FRAMEBUFFER, this._dummyFramebuffer), ye > -1 && (ee.is2DArray || ee.is3D) ? Re.framebufferTextureLayer(Re.FRAMEBUFFER, Re.COLOR_ATTACHMENT0, ee._hardwareTexture?.underlyingResource, be, ye) : ye > -1 ? Re.framebufferTexture2D(Re.FRAMEBUFFER, Re.COLOR_ATTACHMENT0, Re.TEXTURE_CUBE_MAP_POSITIVE_X + ye, ee._hardwareTexture?.underlyingResource, be) : Re.framebufferTexture2D(Re.FRAMEBUFFER, Re.COLOR_ATTACHMENT0, Re.TEXTURE_2D, ee._hardwareTexture?.underlyingResource, be);
      let ke = void 0 !== ee.type ? this._getWebGLTextureType(ee.type) : Re.UNSIGNED_BYTE;
      return Ue ? Me || (Me = (0, oe.k)(ee.type, 4 * ie * He)) : ke === Re.UNSIGNED_BYTE ? (Me || (Me = new Uint8Array(4 * ie * He)), ke = Re.UNSIGNED_BYTE) : (Me || (Me = new Float32Array(4 * ie * He)), ke = Re.FLOAT), Ke && this.flushFramebuffer(), Re.readPixels(Fe, Je, ie, He, Re.RGBA, ke, Me), Re.bindFramebuffer(Re.FRAMEBUFFER, this._currentFramebuffer), Me
    }, be.ThinEngine.prototype._readTexturePixels = function(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ke = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Ue = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Fe = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Je = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je))
    }), (0, He(41084).c)();
    let ke = !1;
    ke || (ke = !0, be.ThinEngine.prototype._createDepthStencilCubeTexture = function(ee, ie) {
      const He = new Ke.b(this, 12);
      if (He.isCube = !0, 1 === this.dT) return Ue.e.Error("Depth cube texture is not supported by WebGL 1."), He;
      const ye = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...ie
        },
        be = this._gl;
      this._bindTextureDirectly(be.TEXTURE_CUBE_MAP, He, !0), this._setupDepthStencilTexture(He, ee, ye.bilinearFiltering, ye.comparisonFunction);
      for (let Me = 0; Me < 6; Me++) ye.generateStencil ? be.texImage2D(be.TEXTURE_CUBE_MAP_POSITIVE_X + Me, 0, be.DEPTH24_STENCIL8, ee, ee, 0, be.DEPTH_STENCIL, be.UNSIGNED_INT_24_8, null) : be.texImage2D(be.TEXTURE_CUBE_MAP_POSITIVE_X + Me, 0, be.DEPTH_COMPONENT24, ee, ee, 0, be.DEPTH_COMPONENT, be.UNSIGNED_INT, null);
      return this._bindTextureDirectly(be.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(He), He
    }, be.ThinEngine.prototype._setCubeMapTextureParams = function(ee, ie, He) {
      const ye = this._gl;
      ye.texParameteri(ye.TEXTURE_CUBE_MAP, ye.TEXTURE_MAG_FILTER, ye.LINEAR), ye.texParameteri(ye.TEXTURE_CUBE_MAP, ye.TEXTURE_MIN_FILTER, ie ? ye.LINEAR_MIPMAP_LINEAR : ye.LINEAR), ye.texParameteri(ye.TEXTURE_CUBE_MAP, ye.TEXTURE_WRAP_S, ye.CLAMP_TO_EDGE), ye.texParameteri(ye.TEXTURE_CUBE_MAP, ye.TEXTURE_WRAP_T, ye.CLAMP_TO_EDGE), ee.samplingMode = ie ? 3 : 2, ie && this.getCaps().textureMaxLevel && void 0 !== He && He > 0 && (ye.texParameteri(ye.TEXTURE_CUBE_MAP, ye.TEXTURE_MAX_LEVEL, He), ee._maxLodLevel = He), this._bindTextureDirectly(ye.TEXTURE_CUBE_MAP, null)
    }, be.ThinEngine.prototype.createCubeTexture = function(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ke = arguments.length > 6 ? arguments[6] : void 0,
        Je = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        oe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Re = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        ke = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        qe = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        fe = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Te = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const pe = this._gl;
      return this.createCubeTextureBase(ee, ie, He, !!ye, be, Me, Ke, Je, oe, Re, ke, qe, (ee => this._bindTextureDirectly(pe.TEXTURE_CUBE_MAP, ee, !0)), ((ee, ie) => {
        const He = this.needPOTTextures ? (0, Fe.h)(ie[0].width, this._caps.maxCubemapTextureSize) : ie[0].width,
          Me = He,
          Je = [pe.TEXTURE_CUBE_MAP_POSITIVE_X, pe.TEXTURE_CUBE_MAP_POSITIVE_Y, pe.TEXTURE_CUBE_MAP_POSITIVE_Z, pe.TEXTURE_CUBE_MAP_NEGATIVE_X, pe.TEXTURE_CUBE_MAP_NEGATIVE_Y, pe.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(pe.TEXTURE_CUBE_MAP, ee, !0), this._unpackFlipY(!1);
        const oe = Ke ? this._getInternalFormat(Ke, ee._useSRGBBuffer) : ee._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : pe.RGBA;
        let Re = Ke ? this._getInternalFormat(Ke) : pe.RGBA;
        ee._useSRGBBuffer && 1 === this.dT && (Re = oe);
        for (let ye = 0; ye < Je.length; ye++)
          if (ie[ye].width !== He || ie[ye].height !== Me) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void Ue.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = He, this._workingCanvas.height = Me, this._workingContext.drawImage(ie[ye], 0, 0, ie[ye].width, ie[ye].height, 0, 0, He, Me), pe.texImage2D(Je[ye], 0, oe, Re, pe.UNSIGNED_BYTE, this._workingCanvas)
          } else pe.texImage2D(Je[ye], 0, oe, Re, pe.UNSIGNED_BYTE, ie[ye]);
        ye || pe.generateMipmap(pe.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(ee, !ye), ee.width = He, ee.height = Me, ee.isReady = !0, Ke && (ee.format = Ke), ee.onLoadedObservable.notifyObservers(ee), ee.onLoadedObservable.clear(), be && be()
      }), !!fe, Te)
    }, be.ThinEngine.prototype.generateMipMapsForCubemap = function(ee) {
      let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (ee.generateMipMaps) {
        const He = this._gl;
        this._bindTextureDirectly(He.TEXTURE_CUBE_MAP, ee, !0), He.generateMipmap(He.TEXTURE_CUBE_MAP), ie && this._bindTextureDirectly(He.TEXTURE_CUBE_MAP, null)
      }
    });
    He(41092);
    let qe = !1;
    qe || (qe = !0, be.ThinEngine.prototype.setDepthStencilTexture = function(ee, ie, He, ye) {
      void 0 !== ee && (ie && (this._boundUniforms[ee] = ie), He && He.depthStencilTexture ? this._setTexture(ee, He, !1, !0, ye) : this._setTexture(ee, null, void 0, void 0, ye))
    });
    let fe = !1;
    fe || (fe = !0, be.ThinEngine.prototype.createRenderTargetCubeTexture = function(ee, ie) {
      const He = this._createHardwareRenderTargetWrapper(!1, !0, ee),
        ye = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...ie
        };
      ye.generateStencilBuffer = ye.generateDepthBuffer && ye.generateStencilBuffer, (1 !== ye.type || this._caps.textureFloatLinearFiltering) && (2 !== ye.type || this._caps.textureHalfFloatLinearFiltering) || (ye.samplingMode = 1);
      const be = this._gl,
        Me = new Ke.b(this, 5);
      this._bindTextureDirectly(be.TEXTURE_CUBE_MAP, Me, !0);
      const Fe = this._getSamplingParameters(ye.samplingMode, ye.generateMipMaps);
      1 !== ye.type || this._caps.textureFloat || (ye.type = 0, Ue.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), be.texParameteri(be.TEXTURE_CUBE_MAP, be.TEXTURE_MAG_FILTER, Fe.mag), be.texParameteri(be.TEXTURE_CUBE_MAP, be.TEXTURE_MIN_FILTER, Fe.min), be.texParameteri(be.TEXTURE_CUBE_MAP, be.TEXTURE_WRAP_S, be.CLAMP_TO_EDGE), be.texParameteri(be.TEXTURE_CUBE_MAP, be.TEXTURE_WRAP_T, be.CLAMP_TO_EDGE);
      for (let Ke = 0; Ke < 6; Ke++) be.texImage2D(be.TEXTURE_CUBE_MAP_POSITIVE_X + Ke, 0, this._getRGBABufferInternalSizedFormat(ye.type, ye.format), ee, ee, 0, this._getInternalFormat(ye.format), this._getWebGLTextureType(ye.type), null);
      const Je = be.createFramebuffer();
      return this._bindUnboundFramebuffer(Je), He._depthStencilBuffer = this._setupFramebufferDepthAttachments(ye.generateStencilBuffer, ye.generateDepthBuffer, ee, ee), ye.generateMipMaps && be.generateMipmap(be.TEXTURE_CUBE_MAP), this._bindTextureDirectly(be.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), He._framebuffer = Je, He._generateDepthBuffer = ye.generateDepthBuffer, He._generateStencilBuffer = ye.generateStencilBuffer, Me.width = ee, Me.height = ee, Me.isReady = !0, Me.isCube = !0, Me.samples = 1, Me.generateMipMaps = ye.generateMipMaps, Me.samplingMode = ye.samplingMode, Me.type = ye.type, Me.format = ye.format, this._internalTexturesCache.push(Me), He.setTextures(Me), He
    });
    var Te = He(41104),
      pe = He(41111);
    let Xe = !1;
    Xe || (Xe = !0, be.ThinEngine.prototype.createPrefilteredCubeTexture = function(ee, ie, ye, be) {
      let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Fe = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Je = arguments.length > 6 ? arguments[6] : void 0,
        oe = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Re = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        ke = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(ee, ie, null, !1, (async ee => {
        if (!ee) return void(Me && Me(null));
        const Fe = ee.texture;
        if (Re ? ee.info.sphericalPolynomial && (Fe._sphericalPolynomial = ee.info.sphericalPolynomial) : Fe._sphericalPolynomial = Fe._sphericalPolynomial ?? new Te.e, Fe._source = 9, this.getCaps().textureLOD) return void(Me && Me(Fe));
        const Je = this._gl,
          oe = ee.width;
        if (!oe) return;
        const {
          DDSTools: ke
        } = await He.e(615).then((() => He(44954))), qe = [];
        for (let He = 0; He < 3; He++) {
          const Me = 1 - He / 2,
            Re = be,
            fe = Math.log2(oe) * ye + be,
            Te = Re + (fe - Re) * Me,
            Xe = Math.round(Math.min(Math.max(Te, 0), fe)),
            ze = new Ke.b(this, 2);
          if (ze.type = Fe.type, ze.format = Fe.format, ze.width = Math.pow(2, Math.max(Math.log2(oe) - Xe, 0)), ze.height = ze.width, ze.isCube = !0, ze._cachedWrapU = 0, ze._cachedWrapV = 0, this._bindTextureDirectly(Je.TEXTURE_CUBE_MAP, ze, !0), ze.samplingMode = 2, Je.texParameteri(Je.TEXTURE_CUBE_MAP, Je.TEXTURE_MAG_FILTER, Je.LINEAR), Je.texParameteri(Je.TEXTURE_CUBE_MAP, Je.TEXTURE_MIN_FILTER, Je.LINEAR), Je.texParameteri(Je.TEXTURE_CUBE_MAP, Je.TEXTURE_WRAP_S, Je.CLAMP_TO_EDGE), Je.texParameteri(Je.TEXTURE_CUBE_MAP, Je.TEXTURE_WRAP_T, Je.CLAMP_TO_EDGE), ee.isDDS) {
            const ie = ee.info,
              He = ee.data;
            this._unpackFlipY(ie.isCompressed), ke.UploadDDSLevels(this, ze, He, ie, !0, 6, Xe)
          } else Ue.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Je.TEXTURE_CUBE_MAP, null);
          const Be = new pe.c(ie);
          Be._isCube = !0, Be._texture = ze, ze.isReady = !0, qe.push(Be)
        }
        Fe._lodTextureHigh = qe[2], Fe._lodTextureMid = qe[1], Fe._lodTextureLow = qe[0], Me && Me(Fe)
      }), Fe, Je, oe, Re, ye, be, null, void 0, !1, ke)
    });
    var ze = He(41030);
    let Be = !1;
    Be || (Be = !0, be.ThinEngine.prototype.createUniformBuffer = function(ee, ie) {
      const He = this._gl.createBuffer();
      if (!He) throw new Error("Unable to create uniform buffer");
      const ye = new ze.d(He);
      return this.bindUniformBuffer(ye), ee instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, ee, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(ee), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), ye.references = 1, ye
    }, be.ThinEngine.prototype.createDynamicUniformBuffer = function(ee, ie) {
      const He = this._gl.createBuffer();
      if (!He) throw new Error("Unable to create dynamic uniform buffer");
      const ye = new ze.d(He);
      return this.bindUniformBuffer(ye), ee instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, ee, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(ee), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), ye.references = 1, ye
    }, be.ThinEngine.prototype.updateUniformBuffer = function(ee, ie, He, ye) {
      this.bindUniformBuffer(ee), void 0 === He && (He = 0), void 0 === ye ? ie instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, He, ie) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, He, new Float32Array(ie)) : ie instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, ie.subarray(He, He + ye)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(ie).subarray(He, He + ye)), this.bindUniformBuffer(null)
    }, be.ThinEngine.prototype.bindUniformBuffer = function(ee) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, ee ? ee.underlyingResource : null)
    }, be.ThinEngine.prototype.bindUniformBufferBase = function(ee, ie, He) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, ie, ee ? ee.underlyingResource : null)
    }, be.ThinEngine.prototype.bindUniformBlock = function(ee, ie, He) {
      const ye = ee.program,
        be = this._gl.getUniformBlockIndex(ye, ie);
      4294967295 !== be && this._gl.uniformBlockBinding(ye, be, He)
    });
    var Ee = He(40968),
      ge = He(41e3);
    let Oe = !1;
    Oe || (Oe = !0, ge.e.prototype.displayLoadingUI = function() {
      if (!(0, Ee.m)()) return;
      const ee = this.loadingScreen;
      ee && ee.displayLoadingUI()
    }, ge.e.prototype.hideLoadingUI = function() {
      if (!(0, Ee.m)()) return;
      const ee = this._loadingScreen;
      ee && ee.hideLoadingUI()
    }, Object.defineProperty(ge.e.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = ge.e.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(ee) {
        this._loadingScreen = ee
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(ge.e.prototype, "loadingUIText", {
      set: function(ee) {
        this.loadingScreen.loadingUIText = ee
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(ge.e.prototype, "loadingUIBackgroundColor", {
      set: function(ee) {
        this.loadingScreen.loadingUIBackgroundColor = ee
      },
      enumerable: !0,
      configurable: !0
    })), (0, He(41070).e)();
    let de = !1;
    de || (de = !0, ge.e.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, ge.e.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, ge.e.prototype.setDepthFunction = function(ee) {
      this._depthCullingState.depthFunc = ee
    }, ge.e.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, ge.e.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, ge.e.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, ge.e.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, ge.e.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, ge.e.prototype.setDepthWrite = function(ee) {
      this._depthCullingState.depthMask = ee
    }, ge.e.prototype.setAlphaConstants = function(ee, ie, He, ye) {
      this._alphaState.setAlphaBlendConstants(ee, ie, He, ye)
    }, ge.e.prototype.getAlphaMode = function() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[ee]
    }, ge.e.prototype.getAlphaEquation = function() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[ee]
    });
    let We = !1;
    We || (We = !0, ge.e.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, ge.e.prototype.setStencilBuffer = function(ee) {
      this._stencilState.stencilTest = ee
    }, ge.e.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, ge.e.prototype.setStencilMask = function(ee) {
      this._stencilState.stencilMask = ee
    }, ge.e.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, ge.e.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, ge.e.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, ge.e.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, ge.e.prototype.setStencilFunction = function(ee) {
      this._stencilState.stencilFunc = ee
    }, ge.e.prototype.setStencilBackFunction = function(ee) {
      this._stencilState.stencilBackFunc = ee
    }, ge.e.prototype.setStencilFunctionReference = function(ee) {
      this._stencilState.stencilFuncRef = ee
    }, ge.e.prototype.setStencilFunctionMask = function(ee) {
      this._stencilState.stencilFuncMask = ee
    }, ge.e.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, ge.e.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, ge.e.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, ge.e.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, ge.e.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, ge.e.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, ge.e.prototype.setStencilOperationFail = function(ee) {
      this._stencilState.stencilOpStencilFail = ee
    }, ge.e.prototype.setStencilBackOperationFail = function(ee) {
      this._stencilState.stencilBackOpStencilFail = ee
    }, ge.e.prototype.setStencilOperationDepthFail = function(ee) {
      this._stencilState.stencilOpDepthFail = ee
    }, ge.e.prototype.setStencilBackOperationDepthFail = function(ee) {
      this._stencilState.stencilBackOpDepthFail = ee
    }, ge.e.prototype.setStencilOperationPass = function(ee) {
      this._stencilState.stencilOpStencilDepthPass = ee
    }, ge.e.prototype.setStencilBackOperationPass = function(ee) {
      this._stencilState.stencilBackOpStencilDepthPass = ee
    }, ge.e.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, ge.e.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    He(41147);
    let te = !1;
    te || (te = !0, ge.e.prototype.createDepthStencilTexture = function(ee, ie, He) {
      if (ie.isCube) {
        const He = ee.width || ee;
        return this._createDepthStencilCubeTexture(He, ie)
      }
      return this._createDepthStencilTexture(ee, ie, He)
    });
    He(41153), He(41185);
    let Ze = !1;
    Ze || (Ze = !0, be.ThinEngine.prototype.enableScissor = function(ee, ie, He, ye) {
      const be = this._gl;
      be.enable(be.SCISSOR_TEST), be.scissor(ee, ie, He, ye)
    }, be.ThinEngine.prototype.disableScissor = function() {
      const ee = this._gl;
      ee.disable(ee.SCISSOR_TEST)
    })
  },
  40922: (ee, ie, He) => {
    He.d(ie, {
      b: () => ge
    });
    var ye = He(40924),
      be = He(37929),
      Me = He(40936),
      Ke = He(41005);
    class Ue {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Fe(ee)
      }
      sampleFrame() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const ie = ee - this._lastFrameTimeMs;
            this._rollingFrameTime.add(ie)
          }
          this._lastFrameTimeMs = ee
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
        const ee = this._rollingFrameTime.history(0);
        return 0 === ee ? 0 : 1e3 / ee
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
    class Fe {
      constructor(ee) {
        this._samples = new Array(ee), this.reset()
      }
      add(ee) {
        let ie;
        if (this.isSaturated()) {
          const ee = this._samples[this._pos];
          ie = ee - this.average, this.average -= ie / (this._sampleCount - 1), this._m2 -= ie * (ee - this.average)
        } else this._sampleCount++;
        ie = ee - this.average, this.average += ie / this._sampleCount, this._m2 += ie * (ee - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = ee, this._pos++, this._pos %= this._samples.length
      }
      history(ee) {
        if (ee >= this._sampleCount || ee >= this._samples.length) return 0;
        const ie = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(ie - ee)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(ee) {
        const ie = this._samples.length;
        return (ee % ie + ie) % ie
      }
    }
    var Je = He(41030),
      oe = He(39467),
      Re = He(41051),
      ke = He(41e3),
      qe = He(40968);

    function fe(ee) {
      const ie = function(ee) {
        if (!(0, qe.h)() || !document.body) return null;
        const ie = document.createElement("span");
        ie.textContent = "Hg", ie.style.font = ee;
        const He = document.createElement("div");
        He.style.display = "inline-block", He.style.width = "1px", He.style.height = "0px", He.style.verticalAlign = "bottom";
        const ye = document.createElement("div");
        let be, Me;
        ye.style.whiteSpace = "nowrap", ye.appendChild(ie), ye.appendChild(He), document.body.appendChild(ye);
        try {
          Me = He.getBoundingClientRect().top - ie.getBoundingClientRect().top, He.style.verticalAlign = "baseline", be = He.getBoundingClientRect().top - ie.getBoundingClientRect().top
        } finally {
          document.body.removeChild(ye)
        }
        const Ke = {
          ascent: be,
          height: Me,
          descent: Me - be
        };
        return Te(Ke) ? Ke : null
      }(ee);
      if (ie) return ie;
      const He = function(ee) {
        let ie = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? ie = new OffscreenCanvas(64, 64) : (0, qe.h)() && "function" === typeof document.createElement && (ie = document.createElement("canvas"), ie.width = 64, ie.height = 64);
          const He = ie?.getContext("2d");
          if (!He) return null;
          He.font = ee;
          const ye = He.measureText("Hg"),
            be = Number(ye.actualBoundingBoxAscent ?? ye.fontBoundingBoxAscent),
            Me = Number(ye.actualBoundingBoxDescent ?? ye.fontBoundingBoxDescent),
            Ke = {
              ascent: be,
              height: be + Me,
              descent: Me
            };
          return Te(Ke) ? Ke : null
        } catch {
          return null
        } finally {
          const ee = ie;
          "function" === typeof ee?.dispose && ee.dispose()
        }
      }(ee);
      return He || function(ee) {
        const ie = Math.max(1, function(ee) {
            const ie = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(ee || ""));
            return ie ? Number(ie[1]) : 16
          }(ee)),
          He = .8 * ie,
          ye = .2 * ie;
        return {
          ascent: He,
          height: He + ye,
          descent: ye
        }
      }(ee)
    }

    function Te(ee) {
      return Number.isFinite(ee.ascent) && Number.isFinite(ee.height) && Number.isFinite(ee.descent) && ee.height > 0
    }

    function pe(ee) {
      if (ee.requestPointerLock) {
        const ie = ee.requestPointerLock();
        ie instanceof Promise ? ie.then((() => {
          ee.focus()
        })).catch((() => {})) : ee.focus()
      }
    }
    var Xe = He(41067),
      ze = He(40995),
      Be = He(41070),
      Ee = He(41072);
    class ge extends Me.ThinEngine {
      static get NpmPackage() {
        return ke.e.NpmPackage
      }
      static get Version() {
        return ke.e.Version
      }
      static get Instances() {
        return be.b.Instances
      }
      static get LastCreatedEngine() {
        return be.b.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return be.b.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(ee) {
        return ke.e.DefaultLoadingScreenFactory(ee)
      }
      get _supportsHardwareTextureRescaling() {
        return !!ge._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Be.e)(), (0, Ee.e)(), super(ee, ie, He, ye), this._performanceMonitor = new Ue, this._drawCalls = new Xe.e, ee && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(ee) {
        super._sharedInit(ee),
          function(ee, ie, He) {
            ee._onCanvasFocus = () => {
              ee.onCanvasFocusObservable.notifyObservers(ee)
            }, ee._onCanvasBlur = () => {
              ee.onCanvasBlurObservable.notifyObservers(ee)
            }, ee._onCanvasContextMenu = ie => {
              ee.disableContextMenu && ie.preventDefault()
            }, ie.addEventListener("focus", ee._onCanvasFocus), ie.addEventListener("blur", ee._onCanvasBlur), ie.addEventListener("contextmenu", ee._onCanvasContextMenu), ee._onBlur = () => {
              ee.disablePerformanceMonitorInBackground && ee.performanceMonitor.disable(), ee._windowIsBackground = !0
            }, ee._onFocus = () => {
              ee.disablePerformanceMonitorInBackground && ee.performanceMonitor.enable(), ee._windowIsBackground = !1
            }, ee._onCanvasPointerOut = He => {
              document.elementFromPoint(He.clientX, He.clientY) !== ie && ee.onCanvasPointerOutObservable.notifyObservers(He)
            };
            const ye = ee.getHostWindow();
            ye && "function" === typeof ye.addEventListener && (ye.addEventListener("blur", ee._onBlur), ye.addEventListener("focus", ee._onFocus)), ie.addEventListener("pointerout", ee._onCanvasPointerOut), He.doNotHandleTouchAction || function(ee) {
              ee && ee.setAttribute && (ee.setAttribute("touch-action", "none"), ee.style.touchAction = "none", ee.style.webkitTapHighlightColor = "transparent")
            }(ie), !ke.e.audioEngine && He.audioEngine && ke.e.AudioEngineFactory && (ke.e.audioEngine = ke.e.AudioEngineFactory(ee.getRenderingCanvas(), ee.getAudioContext(), ee.getAudioDestination())), (0, qe.h)() && (ee._onFullscreenChange = () => {
              ee.isFullscreen = !!document.fullscreenElement, ee.isFullscreen && ee._pointerLockRequested && ie && pe(ie)
            }, document.addEventListener("fullscreenchange", ee._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", ee._onFullscreenChange, !1), ee._onPointerLockChange = () => {
              ee.isPointerLock = document.pointerLockElement === ie
            }, document.addEventListener("pointerlockchange", ee._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", ee._onPointerLockChange, !1)), ee.enableOfflineSupport = void 0 !== ke.e.OfflineProviderFactory, ee._deterministicLockstep = !!He.deterministicLockstep, ee._lockstepMaxSteps = He.lockstepMaxSteps || 0, ee._timeStep = He.timeStep || 1 / 60
          }(this, ee, this._creationOptions)
      }
      resizeImageBitmap(ee, ie, He) {
        return function(ee, ie, He, ye) {
          const be = ee.createCanvas(He, ye).getContext("2d");
          if (!be) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return be.drawImage(ie, 0, 0), be.getImageData(0, 0, He, ye).data
        }(this, ee, ie, He)
      }
      async _createImageBitmapFromSource(ee, ie) {
        return await async function(ee, ie, He) {
          return await new Promise(((ye, be) => {
            const Me = new Image;
            Me.onload = () => {
              Me.decode().then((() => {
                ee.createImageBitmap(Me, He).then((ee => {
                  ye(ee)
                }))
              }))
            }, Me.onerror = () => {
              be(`Error loading image ${Me.src}`)
            }, Me.src = ie
          }))
        }(this, ee, ie)
      }
      switchFullscreen(ee) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(ee)
      }
      enterFullscreen(ee) {
        this.isFullscreen || (this._pointerLockRequested = ee, this._renderingCanvas && function(ee) {
          const ie = ee.requestFullscreen || ee.webkitRequestFullscreen;
          ie && ie.call(ee)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const ee = document;
          document.exitFullscreen ? document.exitFullscreen() : ee.webkitCancelFullScreen && ee.webkitCancelFullScreen()
        }()
      }
      setDitheringState(ee) {
        ee ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(ee) {
        ee ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(ee, ie, He, ye) {
        const be = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(ee, ie, He, ye), be
      }
      scissorClear(ee, ie, He, ye, be) {
        this.enableScissor(ee, ie, He, ye), this.clear(be, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(ee) {
        const ie = this._gl.getAttachedShaders(ee);
        return ie ? this._gl.getShaderSource(ie[0]) : null
      }
      getFragmentShaderSource(ee) {
        const ie = this._gl.getAttachedShaders(ee);
        return ie ? this._gl.getShaderSource(ie[1]) : null
      }
      set framebufferDimensionsObject(ee) {
        this._framebufferDimensionsObject = ee, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const ee of this.scenes) ee.resetCachedMaterial(), ee._rebuildGeometries();
        for (const ee of this._virtualScenes) ee.resetCachedMaterial(), ee._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(ee) {
        return fe(ee)
      }
      enterPointerlock() {
        this._renderingCanvas && pe(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      LO() {
        this._measureFps(), super.LO()
      }
      _deletePipelineContext(ee) {
        const ie = ee;
        ie && ie.program && ie.transformFeedback && (this.deleteTransformFeedback(ie.transformFeedback), ie.transformFeedback = null), super._deletePipelineContext(ee)
      }
      createShaderProgram(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        be = be || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Ke = super.createShaderProgram(ee, ie, He, ye, be, Me);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Ke
      }
      _createShaderProgram(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Me = ye.createProgram();
        if (ee.program = Me, !Me) throw new Error("Unable to create program");
        if (ye.attachShader(Me, ie), ye.attachShader(Me, He), this.dT > 1 && be) {
          const ie = this.createTransformFeedback();
          this.bindTransformFeedback(ie), this.setTranformFeedbackVaryings(Me, be), ee.transformFeedback = ie
        }
        return ye.linkProgram(Me), this.dT > 1 && be && this.bindTransformFeedback(null), ee.context = ye, ee.vertexShader = ie, ee.fragmentShader = He, ee.isParallelCompiled || this._finalizePipelineContext(ee), Me
      }
      _releaseTexture(ee) {
        super._releaseTexture(ee)
      }
      _releaseRenderTargetWrapper(ee) {
        super._releaseRenderTargetWrapper(ee);
        for (const ie of this.scenes) {
          for (const He of ie.postProcesses) He._outputTexture === ee && (He._outputTexture = null);
          for (const He of ie.cameras)
            for (const ie of He._postProcesses) ie && ie._outputTexture === ee && (ie._outputTexture = null)
        }
      }
      _rescaleTexture(ee, ie, He, ye, be) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Me = this.createRenderTargetTexture({
          width: ie.width,
          height: ie.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && ge._RescalePostProcessFactory && (this._rescalePostProcess = ge._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Ke = () => {
              this._rescalePostProcess.onApply = function(ie) {
                ie._bindTexture("textureSampler", ee)
              };
              let Ke = He;
              Ke || (Ke = this.scenes[this.scenes.length - 1]), Ke.postProcessManager.directRender([this._rescalePostProcess], Me, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, ie, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, ye, 0, 0, ie.width, ie.height, 0), this.unBindFramebuffer(Me), Me.dispose(), be && be()
            },
            Ue = this._rescalePostProcess.getEffect();
          Ue ? Ue.executeWhenCompiled(Ke) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((ee => {
            ee.executeWhenCompiled(Ke)
          }))
        }
      }
      wrapWebGLTexture(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Ke = new Re.b(ee, this._gl),
          Ue = new ye.b(this, 15, !0);
        return Ue._hardwareTexture = Ke, Ue.baseWidth = be, Ue.baseHeight = Me, Ue.width = be, Ue.height = Me, Ue.isReady = !0, Ue.useMipMaps = ie, this.updateTextureSamplingMode(He, Ue), Ue
      }
      updateWrappedWebGLTexture(ee, ie) {
        if (15 !== ee.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const ye of this._renderTargetWrapperCache)
          if (ye.textures?.includes(ee)) {
            if (ye.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (ye._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } ee._hardwareTexture = new Re.b(ie, this._gl), ee.isReady = !0, ee._cachedCoordinatesMode = null, ee._cachedWrapU = null, ee._cachedWrapV = null, ee._cachedWrapR = null, ee._cachedAnisotropicFilteringLevel = null;
        for (const ye in this._boundTexturesCache) this._boundTexturesCache[ye] === ee && (this._boundTexturesCache[ye] = null);
        this.updateTextureSamplingMode(ee.samplingMode, ee);
        const He = this._gl;
        for (const ye of this._renderTargetWrapperCache) {
          if (ye.texture !== ee) continue;
          const be = ye,
            Me = ye.samples,
            Ke = Me > 1;
          be._framebuffer && He.deleteFramebuffer(be._framebuffer), !Ke && be._depthStencilBuffer && (He.deleteRenderbuffer(be._depthStencilBuffer), be._depthStencilBuffer = null);
          const Ue = this._currentFramebuffer,
            Fe = He.createFramebuffer();
          this._bindUnboundFramebuffer(Fe), He.framebufferTexture2D(He.FRAMEBUFFER, He.COLOR_ATTACHMENT0, He.TEXTURE_2D, ie, 0), Ke || (be._depthStencilBuffer = this._setupFramebufferDepthAttachments(ye._generateStencilBuffer, ye._generateDepthBuffer, ye.width, ye.height)), this._bindUnboundFramebuffer(Ue), be._framebuffer = Fe, Ke && (ye._samples = 1, this.updateRenderTargetTextureSampleCount(be, Me))
        }
      }
      _uploadImageToTexture(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const be = this._gl,
          Me = this._getWebGLTextureType(ee.type),
          Ke = this._getInternalFormat(ee.format),
          Ue = this._getRGBABufferInternalSizedFormat(ee.type, Ke),
          Fe = ee.isCube ? be.TEXTURE_CUBE_MAP : be.TEXTURE_2D;
        this._bindTextureDirectly(Fe, ee, !0), this._unpackFlipY(ee.invertY);
        let Je = be.TEXTURE_2D;
        ee.isCube && (Je = be.TEXTURE_CUBE_MAP_POSITIVE_X + He), be.texImage2D(Je, ye, Ue, Ke, Me, ie), this._bindTextureDirectly(Fe, null, !0)
      }
      updateTextureComparisonFunction(ee, ie) {
        if (1 === this.dT) return void oe.e.Error("WebGL 1 does not support texture comparison.");
        const He = this._gl;
        ee.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, ee, !0), 0 === ie ? (He.texParameteri(He.TEXTURE_CUBE_MAP, He.TEXTURE_COMPARE_FUNC, 515), He.texParameteri(He.TEXTURE_CUBE_MAP, He.TEXTURE_COMPARE_MODE, He.NONE)) : (He.texParameteri(He.TEXTURE_CUBE_MAP, He.TEXTURE_COMPARE_FUNC, ie), He.texParameteri(He.TEXTURE_CUBE_MAP, He.TEXTURE_COMPARE_MODE, He.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, ee, !0), 0 === ie ? (He.texParameteri(He.TEXTURE_2D, He.TEXTURE_COMPARE_FUNC, 515), He.texParameteri(He.TEXTURE_2D, He.TEXTURE_COMPARE_MODE, He.NONE)) : (He.texParameteri(He.TEXTURE_2D, He.TEXTURE_COMPARE_FUNC, ie), He.texParameteri(He.TEXTURE_2D, He.TEXTURE_COMPARE_MODE, He.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), ee._comparisonFunction = ie
      }
      createInstancesBuffer(ee) {
        const ie = this._gl.createBuffer();
        if (!ie) throw new Error("Unable to create instance buffer");
        const He = new Je.d(ie);
        return He.bk = ee, this.bindArrayBuffer(He), this._gl.bufferData(this._gl.ARRAY_BUFFER, ee, this._gl.DYNAMIC_DRAW), He.references = 1, He
      }
      deleteInstancesBuffer(ee) {
        this._gl.deleteBuffer(ee)
      }
      async _clientWaitAsync(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const ye = this._gl;
        return await new Promise(((be, Me) => {
          (0, ze.f)((() => {
            const He = ye.clientWaitSync(ee, ie, 0);
            if (He == ye.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return He != ye.TIMEOUT_EXPIRED
          }), be, Me, He)
        }))
      }
      _readPixelsAsync(ee, ie, He, ye, be, Me, Ke) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const Ue = this._gl,
          Fe = Ue.createBuffer();
        Ue.bindBuffer(Ue.PIXEL_PACK_BUFFER, Fe), Ue.bufferData(Ue.PIXEL_PACK_BUFFER, Ke.byteLength, Ue.STREAM_READ), Ue.readPixels(ee, ie, He, ye, be, Me, 0), Ue.bindBuffer(Ue.PIXEL_PACK_BUFFER, null);
        const Je = Ue.fenceSync(Ue.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Je ? (Ue.flush(), this._clientWaitAsync(Je, 0, 10).then((() => (Ue.deleteSync(Je), Ue.bindBuffer(Ue.PIXEL_PACK_BUFFER, Fe), Ue.getBufferSubData(Ue.PIXEL_PACK_BUFFER, 0, Ke), Ue.bindBuffer(Ue.PIXEL_PACK_BUFFER, null), Ue.deleteBuffer(Fe), Ke)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(ee, ie) {
            1 === be.b.Instances.length && ke.e.audioEngine && (ke.e.audioEngine.dispose(), ke.e.audioEngine = null);
            const He = ee.getHostWindow();
            He && "function" === typeof He.removeEventListener && (He.removeEventListener("blur", ee._onBlur), He.removeEventListener("focus", ee._onFocus)), ie && (ie.removeEventListener("focus", ee._onCanvasFocus), ie.removeEventListener("blur", ee._onCanvasBlur), ie.removeEventListener("pointerout", ee._onCanvasPointerOut), ie.removeEventListener("contextmenu", ee._onCanvasContextMenu)), (0, qe.h)() && (document.removeEventListener("fullscreenchange", ee._onFullscreenChange), document.removeEventListener("mozfullscreenchange", ee._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", ee._onFullscreenChange), document.removeEventListener("msfullscreenchange", ee._onFullscreenChange), document.removeEventListener("pointerlockchange", ee._onPointerLockChange), document.removeEventListener("mspointerlockchange", ee._onPointerLockChange), document.removeEventListener("mozpointerlockchange", ee._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", ee._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    ge.ALPHA_DISABLE = 0, ge.ALPHA_ADD = 1, ge.ALPHA_COMBINE = 2, ge.ALPHA_SUBTRACT = 3, ge.ALPHA_MULTIPLY = 4, ge.ALPHA_MAXIMIZED = 5, ge.ALPHA_ONEONE = 6, ge.ALPHA_PREMULTIPLIED = 7, ge.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, ge.ALPHA_INTERPOLATE = 9, ge.ALPHA_SCREENMODE = 10, ge.DELAYLOADSTATE_NONE = 0, ge.DELAYLOADSTATE_LOADED = 1, ge.DELAYLOADSTATE_LOADING = 2, ge.DELAYLOADSTATE_NOTLOADED = 4, ge.NEVER = 512, ge.ALWAYS = 519, ge.LESS = 513, ge.EQUAL = 514, ge.LEQUAL = 515, ge.GREATER = 516, ge.GEQUAL = 518, ge.NOTEQUAL = 517, ge.KEEP = 7680, ge.REPLACE = 7681, ge.INCR = 7682, ge.DECR = 7683, ge.INVERT = 5386, ge.INCR_WRAP = 34055, ge.DECR_WRAP = 34056, ge.TEXTURE_CLAMP_ADDRESSMODE = 0, ge.TEXTURE_WRAP_ADDRESSMODE = 1, ge.TEXTURE_MIRROR_ADDRESSMODE = 2, ge.TEXTUREFORMAT_ALPHA = 0, ge.TEXTUREFORMAT_LUMINANCE = 1, ge.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, ge.TEXTUREFORMAT_RGB = 4, ge.TEXTUREFORMAT_RGBA = 5, ge.TEXTUREFORMAT_RED = 6, ge.TEXTUREFORMAT_R = 6, ge.TEXTUREFORMAT_R16_UNORM = 33322, ge.TEXTUREFORMAT_RG16_UNORM = 33324, ge.TEXTUREFORMAT_RGB16_UNORM = 32852, ge.TEXTUREFORMAT_RGBA16_UNORM = 32859, ge.TEXTUREFORMAT_R16_SNORM = 36760, ge.TEXTUREFORMAT_RG16_SNORM = 36761, ge.TEXTUREFORMAT_RGB16_SNORM = 36762, ge.TEXTUREFORMAT_RGBA16_SNORM = 36763, ge.TEXTUREFORMAT_RG = 7, ge.TEXTUREFORMAT_RED_INTEGER = 8, ge.TEXTUREFORMAT_R_INTEGER = 8, ge.TEXTUREFORMAT_RG_INTEGER = 9, ge.TEXTUREFORMAT_RGB_INTEGER = 10, ge.TEXTUREFORMAT_RGBA_INTEGER = 11, ge.TEXTURETYPE_UNSIGNED_BYTE = 0, ge.TEXTURETYPE_UNSIGNED_INT = 0, ge.TEXTURETYPE_FLOAT = 1, ge.TEXTURETYPE_HALF_FLOAT = 2, ge.TEXTURETYPE_BYTE = 3, ge.TEXTURETYPE_SHORT = 4, ge.TEXTURETYPE_UNSIGNED_SHORT = 5, ge.TEXTURETYPE_INT = 6, ge.TEXTURETYPE_UNSIGNED_INTEGER = 7, ge.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, ge.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, ge.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, ge.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, ge.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, ge.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, ge.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, ge.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, ge.TEXTURE_NEAREST_SAMPLINGMODE = 1, ge.TEXTURE_BILINEAR_SAMPLINGMODE = 2, ge.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, ge.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, ge.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, ge.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, ge.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, ge.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, ge.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, ge.TEXTURE_NEAREST_LINEAR = 7, ge.TEXTURE_NEAREST_NEAREST = 1, ge.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, ge.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, ge.TEXTURE_LINEAR_LINEAR = 2, ge.TEXTURE_LINEAR_NEAREST = 12, ge.TEXTURE_EXPLICIT_MODE = 0, ge.TEXTURE_SPHERICAL_MODE = 1, ge.TEXTURE_PLANAR_MODE = 2, ge.TEXTURE_CUBIC_MODE = 3, ge.TEXTURE_PROJECTION_MODE = 4, ge.TEXTURE_SKYBOX_MODE = 5, ge.TEXTURE_INVCUBIC_MODE = 6, ge.TEXTURE_EQUIRECTANGULAR_MODE = 7, ge.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, ge.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, ge.SCALEMODE_FLOOR = 1, ge.SCALEMODE_NEAREST = 2, ge.SCALEMODE_CEILING = 3
  },
  41098: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(41059);
    class be {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(ee) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = ee, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, ee && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, ye.e)(ee.format))
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
      getBaseArrayLayer(ee) {
        if (!this._textures) return -1;
        const ie = this._textures[ee],
          He = this._layerIndices?.[ee] ?? 0,
          ye = this._faceIndices?.[ee] ?? 0;
        return ie.isCube ? 6 * He + ye : ie.is3D ? 0 : He
      }
      get samples() {
        return this._samples
      }
      setSamples(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === ee && !He) return ee;
        const ye = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, ee, ie) : this._engine.updateRenderTargetTextureSampleCount(this, ee);
        return this._samples = ee, ye
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(ee, ie, He, ye, be) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = ee, this._isCube = ie, this._size = He, this._engine = ye, this._depthStencilTexture = null, this.label = be
      }
      setTextures(ee) {
        Array.isArray(ee) ? this._textures = ee : this._textures = ee ? [ee] : null
      }
      setTexture(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[ie] !== ee && (this._textures[ie] && He && this._textures[ie].dispose(), this._textures[ie] = ee)
      }
      setLayerAndFaceIndices(ee, ie) {
        this._layerIndices = ee, this._faceIndices = ie
      }
      setLayerAndFaceIndex() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== ie && ie >= 0 && (this._layerIndices[ee] = ie), void 0 !== He && He >= 0 && (this._faceIndices[ee] = He)
      }
      createDepthStencilTexture() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Me = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = He, this._depthStencilTextureLabel = Me, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: ie,
          comparisonFunction: ee,
          generateStencil: He,
          isCube: this._isCube,
          samples: ye,
          depthTextureFormat: be,
          label: Me
        }, this), this._depthStencilTexture
      }
      _shareDepth(ee) {
        this.shareDepth(ee)
      }
      shareDepth(ee) {
        this._depthStencilTexture && (ee._depthStencilTexture && ee._depthStencilTexture.dispose(), ee._depthStencilTexture = this._depthStencilTexture, ee._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(ee) {
        this.texture && this.texture._swapAndDie(ee), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let ee = null;
        if (this._isMulti) {
          const ie = this.textures;
          if (ie && ie.length > 0) {
            let He = !1,
              ye = ie.length,
              be = -1;
            const Me = ie[ie.length - 1]._source;
            14 !== Me && 12 !== Me || (He = !0, be = ie[ie.length - 1].format, ye--);
            const Ke = [],
              Ue = [],
              Fe = [],
              Je = [],
              oe = [],
              Re = [],
              ke = [],
              qe = {};
            for (let ee = 0; ee < ye; ++ee) {
              const He = ie[ee];
              Ke.push(He.samplingMode), Ue.push(He.type), Fe.push(He.format);
              void 0 !== qe[He.uniqueId] ? (Je.push(-1), ke.push(0)) : (qe[He.uniqueId] = ee, He.is2DArray ? (Je.push(35866), ke.push(He.depth)) : He.isCube ? (Je.push(34067), ke.push(0)) : He.is3D ? (Je.push(32879), ke.push(He.depth)) : (Je.push(3553), ke.push(0))), this._faceIndices && oe.push(this._faceIndices[ee] ?? 0), this._layerIndices && Re.push(this._layerIndices[ee] ?? 0)
            }
            const fe = {
                samplingModes: Ke,
                generateMipMaps: ie[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: He,
                depthTextureFormat: be,
                types: Ue,
                formats: Fe,
                tFe: ye,
                targetTypes: Je,
                faceIndex: oe,
                layerIndex: Re,
                layerCounts: ke,
                label: this.label
              },
              Te = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            ee = this._engine.createMultipleRenderTarget(Te, fe);
            for (let pe = 0; pe < ye; ++pe) {
              if (-1 !== Je[pe]) continue;
              const He = qe[ie[pe].uniqueId];
              ee.setTexture(ee.textures[He], pe)
            }
          }
        } else {
          const ie = {};
          if (ie.generateDepthBuffer = this._generateDepthBuffer, ie.generateMipMaps = this.texture?.generateMipMaps ?? !1, ie.generateStencilBuffer = this._generateStencilBuffer, ie.samplingMode = this.texture?.samplingMode, ie.type = this.texture?.type, ie.format = this.texture?.format, ie.noColorAttachment = !this._textures, ie.label = this.label, this.isCube) ee = this._engine.createRenderTargetCubeTexture(this.width, ie);
          else {
            const He = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            ee = this._engine.createRenderTargetTexture(He, ie)
          }
          ee.texture && (ee.texture.isReady = !0)
        }
        return ee
      }
      _swapRenderTargetWrapper(ee) {
        if (this._textures && ee._textures)
          for (let ie = 0; ie < this._textures.length; ++ie) this._textures[ie]._swapAndDie(ee._textures[ie], !1), ee._textures[ie].isReady = !0;
        this._depthStencilTexture && ee._depthStencilTexture && (this._depthStencilTexture._swapAndDie(ee._depthStencilTexture), ee._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const ee = this._cloneRenderTargetWrapper();
        if (ee) {
          if (this._depthStencilTexture) {
            const ie = this._depthStencilTexture.samplingMode,
              He = this._depthStencilTexture.format,
              ye = 2 === ie || 3 === ie || 11 === ie;
            ee.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, ye, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, He, this._depthStencilTextureLabel)
          }
          this.samples > 1 && ee.setSamples(this.samples), ee._swapRenderTargetWrapper(this), ee.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let ee = 0; ee < this._textures.length; ++ee) this._textures[ee].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  41542: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      static get ForceFullSceneLoadingForIncremental() {
        return ye._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(ee) {
        ye._ForceFullSceneLoadingForIncremental = ee
      }
      static get ShowLoadingScreen() {
        return ye._ShowLoadingScreen
      }
      static set ShowLoadingScreen(ee) {
        ye._ShowLoadingScreen = ee
      }
      static get loggingLevel() {
        return ye._LoggingLevel
      }
      static set loggingLevel(ee) {
        ye._LoggingLevel = ee
      }
      static get CleanBoneMatrixWeights() {
        return ye._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(ee) {
        ye._CleanBoneMatrixWeights = ee
      }
    }
    ye._ForceFullSceneLoadingForIncremental = !1, ye._ShowLoadingScreen = !0, ye._CleanBoneMatrixWeights = !1, ye._LoggingLevel = 0
  },
  41191: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(39467);
    const be = new Map;

    function Me(ee, ie) {
      (function(ee) {
        return be.delete(ee)
      })(ee) && ye.e.Warn(`Extension with the name '${ee}' already exists`), be.set(ee, ie)
    }

    function Ke(ee, ie) {
      "image/ktx" !== ie && "image/ktx2" !== ie || (ee = ".ktx"), be.has(ee) || (ee.endsWith(".ies") && Me(".ies", (async () => await He.e(618).then((() => He(44972))).then((ee => new ee._IESTextureLoader)))), ee.endsWith(".dds") && Me(".dds", (async () => await He.e(616).then((() => He(44978))).then((ee => new ee._DDSTextureLoader)))), ee.endsWith(".basis") && Me(".basis", (async () => await He.e(619).then((() => He(44986))).then((ee => new ee._BasisTextureLoader)))), ee.endsWith(".env") && Me(".env", (async () => await Promise.all([He.e(620), He.e(617)]).then((() => He(44993))).then((ee => new ee._ENVTextureLoader)))), ee.endsWith(".hdr") && Me(".hdr", (async () => await He.e(621).then((() => He(45043))).then((ee => new ee._HDRTextureLoader)))), (ee.endsWith(".ktx") || ee.endsWith(".ktx2")) && (Me(".ktx", (async () => await He.e(622).then((() => He(45046))).then((ee => new ee._KTXTextureLoader)))), Me(".ktx2", (async () => await He.e(622).then((() => He(45046))).then((ee => new ee._KTXTextureLoader))))), ee.endsWith(".tga") && Me(".tga", (async () => await He.e(623).then((() => He(45058))).then((ee => new ee._TGATextureLoader)))), ee.endsWith(".exr") && Me(".exr", (async () => await He.e(624).then((() => He(45062))).then((ee => new ee._ExrTextureLoader)))));
      const ye = be.get(ee);
      return ye ? Promise.resolve(ye(ie)) : null
    }
  },
  41568: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      i: () => Je
    });
    var ye = He(41414),
      be = He(41144),
      Me = He(37949);
    class Ke extends ye.e {
      get gie() {
        return this._subMaterials
      }
      set gie(ee) {
        this._subMaterials = ee, this._hookArray(ee)
      }
      getChildren() {
        return this.gie
      }
      constructor(ee, ie) {
        super(ee, ie, !0), this._waitingSubMaterialsUniqueIds = [], this.Xx().addMultiMaterial(this), this.gie = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(ee) {
        var ie = this;
        const He = ee.push;
        ee.push = function() {
          for (var ye = arguments.length, be = new Array(ye), Me = 0; Me < ye; Me++) be[Me] = arguments[Me];
          const Ke = He.apply(ee, be);
          return ie._markAllSubMeshesAsTexturesDirty(), Ke
        };
        const ye = ee.splice;
        ee.splice = (ie, He) => {
          const be = ye.call(ee, ie, He ?? ee.length);
          return this._markAllSubMeshesAsTexturesDirty(), be
        }
      }
      getSubMaterial(ee) {
        return ee < 0 || ee >= this.gie.length ? this.Xx().defaultMaterial : this.gie[ee]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.gie.map((ee => ee ? ee.getActiveTextures() : [])))
      }
      hasTexture(ee) {
        if (super.hasTexture(ee)) return !0;
        for (let ie = 0; ie < this.gie.length; ie++)
          if (this.gie[ie]?.hasTexture(ee)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(ee, ie, He) {
        for (let ye = 0; ye < this.gie.length; ye++) {
          const be = this.gie[ye];
          if (be) {
            if (be._storeEffectOnSubMeshes) {
              if (!be.isReadyForSubMesh(ee, ie, He)) return !1;
              continue
            }
            if (!be.isReady(ee)) return !1
          }
        }
        return !0
      }
      clone(ee, ie) {
        const He = new Ke(ee, this.Xx());
        for (let ye = 0; ye < this.gie.length; ye++) {
          let be;
          const Me = this.gie[ye];
          be = ie && Me ? Me.clone(ee + "-" + Me.name) : this.gie[ye], He.gie.push(be)
        }
        return He
      }
      serialize() {
        const ee = {};
        ee.name = this.name, ee.id = this.id, ee.uniqueId = this.uniqueId, be.b && (ee.tags = be.b.GetTags(this)), ee.materialsUniqueIds = [], ee.materials = [];
        for (let ie = 0; ie < this.gie.length; ie++) {
          const He = this.gie[ie];
          He ? (ee.materialsUniqueIds.push(He.uniqueId), ee.materials.push(He.id)) : (ee.materialsUniqueIds.push(null), ee.materials.push(null))
        }
        return ee
      }
      dispose(ee, ie, He) {
        const ye = this.Xx();
        if (!ye) return;
        if (He)
          for (let Me = 0; Me < this.gie.length; Me++) {
            const He = this.gie[Me];
            He && He.dispose(ee, ie)
          }
        const be = ye.multiMaterials.indexOf(this);
        be >= 0 && ye.multiMaterials.splice(be, 1), super.dispose(ee, ie)
      }
    }
    let Ue = !1;

    function Fe(ee, ie) {
      const He = new Ke(ee.name, ie);
      if (He.id = ee.id, He._loadedUniqueId = ee.uniqueId, be.b && be.b.AddTagsTo(He, ee.tags), ee.materialsUniqueIds) He._waitingSubMaterialsUniqueIds = ee.materialsUniqueIds;
      else
        for (const ye of ee.materials) He.gie.push(ie.getLastMaterialById(ye));
      return He
    }

    function Je() {
      Ue || (Ue = !0, Ke.ParseMultiMaterial = Fe, (0, Me.e)("BABYLON.MultiMaterial", Ke))
    }
  },
  41330: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye, be, Me = He(37917);
    ! function(ee) {
      ee[ee.LOCAL = 0] = "LOCAL", ee[ee.WORLD = 1] = "WORLD", ee[ee.BONE = 2] = "BONE"
    }(ye || (ye = {}));
    class Ke {}
    Ke.X = new Me.p(1, 0, 0), Ke.Y = new Me.p(0, 1, 0), Ke.Z = new Me.p(0, 0, 1),
      function(ee) {
        ee[ee.X = 0] = "X", ee[ee.Y = 1] = "Y", ee[ee.Z = 2] = "Z"
      }(be || (be = {}))
  },
  41104: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe,
      e: () => Je
    });
    var ye = He(37917);
    const be = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Me = [() => 1, ee => ee.y, ee => ee.z, ee => ee.x, ee => ee.x * ee.y, ee => ee.y * ee.z, ee => 3 * ee.z * ee.z - 1, ee => ee.x * ee.z, ee => ee.x * ee.x - ee.y * ee.y],
      Ke = (ee, ie) => be[ee] * Me[ee](ie),
      Ue = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Fe {
      constructor() {
        this.preScaled = !1, this.l00 = ye.p.Zero(), this.l1_1 = ye.p.Zero(), this.l10 = ye.p.Zero(), this.l11 = ye.p.Zero(), this.l2_2 = ye.p.Zero(), this.l2_1 = ye.p.Zero(), this.l20 = ye.p.Zero(), this.l21 = ye.p.Zero(), this.l22 = ye.p.Zero()
      }
      addLight(ee, ie, He) {
        ye.j.rf[0].set(ie.r, ie.g, ie.b);
        const be = ye.j.rf[0],
          Me = ye.j.rf[1];
        be.scaleToRef(He, Me), Me.scaleToRef(Ke(0, ee), ye.j.rf[2]), this.l00.addInPlace(ye.j.rf[2]), Me.scaleToRef(Ke(1, ee), ye.j.rf[2]), this.l1_1.addInPlace(ye.j.rf[2]), Me.scaleToRef(Ke(2, ee), ye.j.rf[2]), this.l10.addInPlace(ye.j.rf[2]), Me.scaleToRef(Ke(3, ee), ye.j.rf[2]), this.l11.addInPlace(ye.j.rf[2]), Me.scaleToRef(Ke(4, ee), ye.j.rf[2]), this.l2_2.addInPlace(ye.j.rf[2]), Me.scaleToRef(Ke(5, ee), ye.j.rf[2]), this.l2_1.addInPlace(ye.j.rf[2]), Me.scaleToRef(Ke(6, ee), ye.j.rf[2]), this.l20.addInPlace(ye.j.rf[2]), Me.scaleToRef(Ke(7, ee), ye.j.rf[2]), this.l21.addInPlace(ye.j.rf[2]), Me.scaleToRef(Ke(8, ee), ye.j.rf[2]), this.l22.addInPlace(ye.j.rf[2])
      }
      scaleInPlace(ee) {
        this.l00.scaleInPlace(ee), this.l1_1.scaleInPlace(ee), this.l10.scaleInPlace(ee), this.l11.scaleInPlace(ee), this.l2_2.scaleInPlace(ee), this.l2_1.scaleInPlace(ee), this.l20.scaleInPlace(ee), this.l21.scaleInPlace(ee), this.l22.scaleInPlace(ee)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(Ue[0]), this.l1_1.scaleInPlace(Ue[1]), this.l10.scaleInPlace(Ue[2]), this.l11.scaleInPlace(Ue[3]), this.l2_2.scaleInPlace(Ue[4]), this.l2_1.scaleInPlace(Ue[5]), this.l20.scaleInPlace(Ue[6]), this.l21.scaleInPlace(Ue[7]), this.l22.scaleInPlace(Ue[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(be[0]), this.l1_1.scaleInPlace(be[1]), this.l10.scaleInPlace(be[2]), this.l11.scaleInPlace(be[3]), this.l2_2.scaleInPlace(be[4]), this.l2_1.scaleInPlace(be[5]), this.l20.scaleInPlace(be[6]), this.l21.scaleInPlace(be[7]), this.l22.scaleInPlace(be[8])
      }
      updateFromArray(ee) {
        return ye.p.FromArrayToRef(ee[0], 0, this.l00), ye.p.FromArrayToRef(ee[1], 0, this.l1_1), ye.p.FromArrayToRef(ee[2], 0, this.l10), ye.p.FromArrayToRef(ee[3], 0, this.l11), ye.p.FromArrayToRef(ee[4], 0, this.l2_2), ye.p.FromArrayToRef(ee[5], 0, this.l2_1), ye.p.FromArrayToRef(ee[6], 0, this.l20), ye.p.FromArrayToRef(ee[7], 0, this.l21), ye.p.FromArrayToRef(ee[8], 0, this.l22), this
      }
      updateFromFloatsArray(ee) {
        return ye.p.FromFloatsToRef(ee[0], ee[1], ee[2], this.l00), ye.p.FromFloatsToRef(ee[3], ee[4], ee[5], this.l1_1), ye.p.FromFloatsToRef(ee[6], ee[7], ee[8], this.l10), ye.p.FromFloatsToRef(ee[9], ee[10], ee[11], this.l11), ye.p.FromFloatsToRef(ee[12], ee[13], ee[14], this.l2_2), ye.p.FromFloatsToRef(ee[15], ee[16], ee[17], this.l2_1), ye.p.FromFloatsToRef(ee[18], ee[19], ee[20], this.l20), ye.p.FromFloatsToRef(ee[21], ee[22], ee[23], this.l21), ye.p.FromFloatsToRef(ee[24], ee[25], ee[26], this.l22), this
      }
      static FromArray(ee) {
        return (new Fe).updateFromArray(ee)
      }
      static FromPolynomial(ee) {
        const ie = new Fe;
        return ie.l00 = ee.xx.scale(.376127).add(ee.yy.scale(.376127)).add(ee.zz.scale(.376126)), ie.l1_1 = ee.y.scale(.977204), ie.l10 = ee.z.scale(.977204), ie.l11 = ee.x.scale(.977204), ie.l2_2 = ee.xy.scale(1.16538), ie.l2_1 = ee.yz.scale(1.16538), ie.l20 = ee.zz.scale(1.34567).subtract(ee.xx.scale(.672834)).subtract(ee.yy.scale(.672834)), ie.l21 = ee.zx.scale(1.16538), ie.l22 = ee.xx.scale(1.16538).subtract(ee.yy.scale(1.16538)), ie.l1_1.scaleInPlace(-1), ie.l11.scaleInPlace(-1), ie.l2_1.scaleInPlace(-1), ie.l21.scaleInPlace(-1), ie.scaleInPlace(Math.PI), ie
      }
    }
    class Je {
      constructor() {
        this.x = ye.p.Zero(), this.y = ye.p.Zero(), this.z = ye.p.Zero(), this.xx = ye.p.Zero(), this.yy = ye.p.Zero(), this.zz = ye.p.Zero(), this.xy = ye.p.Zero(), this.yz = ye.p.Zero(), this.zx = ye.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Fe.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(ee) {
        ye.j.rf[0].wie(ee.r, ee.g, ee.b);
        const ie = ye.j.rf[0];
        this.xx.addInPlace(ie), this.yy.addInPlace(ie), this.zz.addInPlace(ie)
      }
      scaleInPlace(ee) {
        this.x.scaleInPlace(ee), this.y.scaleInPlace(ee), this.z.scaleInPlace(ee), this.xx.scaleInPlace(ee), this.yy.scaleInPlace(ee), this.zz.scaleInPlace(ee), this.yz.scaleInPlace(ee), this.zx.scaleInPlace(ee), this.xy.scaleInPlace(ee)
      }
      updateFromHarmonics(ee) {
        return this._harmonics = ee, this.x.jD(ee.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.jD(ee.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.jD(ee.l10), this.z.scaleInPlace(1.02333), this.xx.jD(ee.l00), ye.j.rf[0].jD(ee.l20).scaleInPlace(.247708), ye.j.rf[1].jD(ee.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).XMe(ye.j.rf[0]).addInPlace(ye.j.rf[1]), this.yy.jD(ee.l00), this.yy.scaleInPlace(.886277).XMe(ye.j.rf[0]).XMe(ye.j.rf[1]), this.zz.jD(ee.l00), ye.j.rf[0].jD(ee.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(ye.j.rf[0]), this.yz.jD(ee.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.jD(ee.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.jD(ee.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(ee) {
        return (new Je).updateFromHarmonics(ee)
      }
      static FromArray(ee) {
        const ie = new Je;
        return ye.p.FromArrayToRef(ee[0], 0, ie.x), ye.p.FromArrayToRef(ee[1], 0, ie.y), ye.p.FromArrayToRef(ee[2], 0, ie.z), ye.p.FromArrayToRef(ee[3], 0, ie.xx), ye.p.FromArrayToRef(ee[4], 0, ie.yy), ye.p.FromArrayToRef(ee[5], 0, ie.zz), ye.p.FromArrayToRef(ee[6], 0, ie.yz), ye.p.FromArrayToRef(ee[7], 0, ie.zx), ye.p.FromArrayToRef(ee[8], 0, ie.xy), ie
      }
    }
  },
  41556: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ye,
      c: () => ae
    });
    var ye = He(41113),
      be = He(37931),
      Me = He(37917),
      Ke = He(41247),
      Ue = He(41535),
      Fe = He(41559),
      Je = He(41242),
      oe = He(41429),
      Re = He(41238);
    class ke {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Me.p(0, 0, 0), this._diffPositionForCollisions = new Me.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var qe, fe, Te, pe = He(40985),
      Xe = He(41178),
      ze = He(41439),
      Be = He(38022),
      Ee = He(37920),
      ge = He(41330),
      Oe = He(39467),
      de = He(41121),
      We = He(41e3),
      te = He(37949);

    function Ze(ee, ie) {
      return ee - Math.floor(ee / ie) * ie
    }

    function we(ee, ie, He) {
      ee instanceof Float32Array ? Me.b.FromArrayToRef(ee, ie, He) : He.wie((0, Xe.d)(ee[ie]), (0, Xe.d)(ee[ie + 1]), (0, Xe.d)(ee[ie + 2]), (0, Xe.d)(ee[ie + 3]), (0, Xe.d)(ee[ie + 4]), (0, Xe.d)(ee[ie + 5]), (0, Xe.d)(ee[ie + 6]), (0, Xe.d)(ee[ie + 7]), (0, Xe.d)(ee[ie + 8]), (0, Xe.d)(ee[ie + 9]), (0, Xe.d)(ee[ie + 10]), (0, Xe.d)(ee[ie + 11]), (0, Xe.d)(ee[ie + 12]), (0, Xe.d)(ee[ie + 13]), (0, Xe.d)(ee[ie + 14]), (0, Xe.d)(ee[ie + 15]))
    }

    function De(ee, ie, He, ye, be, Ue, Fe, Je, oe) {
      const Re = He.texture,
        ke = Re?.getInternalTexture(),
        qe = ke?._bufferView;
      if (!(qe instanceof Float32Array) && !(qe instanceof Uint16Array)) return Oe.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const fe = Re.getSize(),
        Te = function(ee, ie) {
          const He = ee.y - ee.x + 1,
            ye = ie * ee.w / He,
            be = ye < 1 ? 0 : 1,
            Me = He - be;
          let Ke = Ze(ye - Math.floor(ye), 1) * Me;
          return Ke = Ze(Ke + ee.z, Me), Math.floor(Ke) + ee.x + be
        }(ye, He.time);
      if (!isFinite(Te) || Te < 0 || Te >= fe.height) return Oe.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const pe = Me.j.rf[0],
        Xe = Me.j.Matrix[0],
        ze = Me.j.Matrix[1],
        Be = Te * fe.width * 4,
        Ee = ie === Ke.h.NormalKind ? Me.p.TransformNormalFromFloatsToRef : Me.p.TransformCoordinatesFromFloatsToRef;
      for (let Me = 0, Ke = 0; Me < ee.length; Me += 3, Ke += 4) {
        let ie, He;
        for (Xe.reset(), ie = 0; ie < 4 && ie < oe; ie++) He = Ue[Ke + ie], He > 0 && (we(qe, Be + 16 * Math.floor(be[Ke + ie]), ze), ze.scaleAndAddToRef(He, Xe));
        if (Fe && Je)
          for (ie = 0; ie < 4 && ie + 4 < oe; ie++) He = Je[Ke + ie], He > 0 && (we(qe, Be + 16 * Math.floor(Fe[Ke + ie]), ze), ze.scaleAndAddToRef(He, Xe));
        Ee(ee[Me], ee[Me + 1], ee[Me + 2], Xe, pe), pe.toArray(ee, Me)
      }
      return !0
    }
    class Pe {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Me.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Ae {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Pe, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new ke, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Ye = (() => {
        var ee;
        let ie, ke = Fe.d,
          qe = [];
        return ee = class extends ke {
          static get BILLBOARDMODE_NONE() {
            return Fe.d.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Fe.d.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Fe.d.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Fe.d.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Fe.d.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Fe.d.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(ee) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = ee
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(ee) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = ee
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(ee) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = ee
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(ee) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = ee
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(ee) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = ee
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(ee) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== ee && (this._internalAbstractMeshDataInfo._morphTargetManager = ee, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(ee) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== ee && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = ee, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(ee) {
            return !!super._updateNonUniformScalingState(ee) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(ee) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = ee
          }
          set jk(ee) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(ee)
          }
          set onCollisionPositionChange(ee) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(ee)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(ee) {
            if (this._internalAbstractMeshDataInfo._visibility === ee) return;
            const ie = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = ee, (1 === ie && 1 !== ee || 1 !== ie && 1 === ee) && this._markSubMeshesAsDirty((ee => {
              ee.markAsMiscDirty(), ee.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(ee) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = ee
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(ee) {
            this._internalAbstractMeshDataInfo._renderingGroupId = ee
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(ee) {
            if (!Number.isInteger(ee) || ee < 0 || ee > 255 || 0 !== ee && 0 === (63 & ee)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = ee
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(ee) {
            this._setMaterial(ee)
          }
          _setMaterial(ee) {
            this._internalAbstractMeshDataInfo._material !== ee && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = ee, ee && ee.meshMap && (ee.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.pW && (this.resetDrawCache(void 0, null == ee), this._unBindEffect()))
          }
          getMaterialForRenderPass(ee) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[ee]
          }
          setMaterialForRenderPass(ee, ie) {
            this.resetDrawCache(ee), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const He = this._internalAbstractMeshDataInfo._materialForRenderPass[ee];
            He?.meshMap?.[this.uniqueId] && (He.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[ee] = ie, ie && ie.meshMap && (ie.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(ee) {
            this._internalAbstractMeshDataInfo._receiveShadows !== ee && (this._internalAbstractMeshDataInfo._receiveShadows = ee, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(ee) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== ee && (this._internalAbstractMeshDataInfo._hasVertexAlpha = ee, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(ee) {
            this._internalAbstractMeshDataInfo._useVertexColors !== ee && (this._internalAbstractMeshDataInfo._useVertexColors = ee, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(ee) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== ee && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = ee, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(ee) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== ee && (this._internalAbstractMeshDataInfo._numBoneInfluencers = ee, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(ee) {
            this._internalAbstractMeshDataInfo._applyFog !== ee && (this._internalAbstractMeshDataInfo._applyFog = ee, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(ee) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = ee
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(ee) {
            ee !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = ee, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(ee) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(ee) ? -1 : ee
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(ee) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = ee
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(ee) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(ee) ? -1 : ee
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(ee) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = ee
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(ee) {
            const ie = this._internalAbstractMeshDataInfo._skeleton;
            ie && ie.needInitialSkinMatrix && ie._unregisterMeshWithPoseMatrix(this), ee && ee.needInitialSkinMatrix && ee._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = ee, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(ie) {
            var He;
            let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(ie, ye, !1), He = this, this._internalAbstractMeshDataInfo = new Ae, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = ee.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new be.d, this.onCollisionPositionChangeObservable = new be.d, this.onMaterialChangedObservable = new be.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Mp = ee.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Be.c.Red(), this.outlineWidth = .02, this.overlayColor = Be.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Gf = !1, this.eT = !1, this.actionManager = null, this.ellipsoid = new Me.p(.5, 1, .5), this.ellipsoidOffset = new Me.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Be.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                RL: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new be.d, this._onCollisionPositionChange = function(ee, ie) {
                let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ie.subtractToRef(He._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, He._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), He._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > We.e.CollisionsEpsilon && He.position.addInPlace(He._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), ye && He.onCollideObservable.notifyObservers(ye), He.onCollisionPositionChangeObservable.notifyObservers(He.position)
              }, ye = this.Xx(), this.layerMask = ye.defaultRenderableLayerMask, ye.Nbe(this), this._resyncLightSources(), this._uniformBuffer = new Re.b(this.Xx().Nf(), void 0, void 0, ie, !this.Xx().Nf().isWebGPU), this._buildUniformLayout(), ye.performancePriority) {
              case 2:
                this.eT = !0;
              case 1:
                this.Gf = !0, this.Mp = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(ee) {
            const ie = this._uniformBuffer;
            ie.oie("world", ee), ie.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), ie.update()
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
          toString(ee) {
            let ie = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            ie += ", # of submeshes: " + (this.pW ? this.pW.length : 0);
            const He = this._internalAbstractMeshDataInfo._skeleton;
            return He && (ie += ", skeleton: " + He.name), ee && (ie += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], ie += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.RL ? "YES" : "NO")), ie
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Fe.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(ee) {
            let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (ie || this.actionManager.isRecursive)) {
              if (!ee) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(ee)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(ee, !1) : null
          }
          _releaseRenderPassId(ee) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.pW) {
              for (const ee of this.pW) ee._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const ee of this.Xx().lights) ee.isEnabled() && ee.canAffectMesh(this) && this._lightSources.push(ee);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(ee) {
            const ie = ee.isEnabled() && ee.canAffectMesh(this),
              He = this._lightSources.indexOf(ee);
            let ye = !1;
            if (-1 === He) {
              if (!ie) return;
              this._lightSources.push(ee)
            } else {
              if (ie) return;
              ye = !0, this._lightSources.splice(He, 1)
            }
            this._markSubMeshesAsLightDirty(ye)
          }
          _unBindEffect() {
            for (const ee of this.pW) ee.setEffect(null)
          }
          _removeLightSource(ee, ie) {
            const He = this._lightSources.indexOf(ee); - 1 !== He && (this._lightSources.splice(He, 1), this._markSubMeshesAsLightDirty(ie))
          }
          _markSubMeshesAsDirty(ee) {
            if (this.pW)
              for (const ie of this.pW)
                for (let He = 0; He < ie._drawWrappers.length; ++He) {
                  const ye = ie._drawWrappers[He];
                  ye && ye.defines && ye.defines.markAllAsDirty && ee(ye.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((ie => ie.markAsLightDirty(ee)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((ee => ee.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((ee => ee.markAsMiscDirty()))
          }
          tye(ee) {
            return this._currentRenderId = Number.MAX_VALUE, super.tye(ee), this._isDirty = !0, this
          }
          resetDrawCache(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.pW)
              for (const He of this.pW) He.resetDrawCache(ee, ie)
          }
          get isBlocked() {
            return !1
          }
          getLOD(ee) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          eMe() {
            return null
          }
          getVerticesData(ee) {
            return null
          }
          setVerticesData(ee, ie, He, ye) {
            return this
          }
          updateVerticesData(ee, ie, He, ye) {
            return this
          }
          setIndices(ee, ie) {
            return this
          }
          isVerticesDataPresent(ee) {
            return !1
          }
          WC() {
            return this._masterMesh ? this._masterMesh.WC() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.WC()
          }
          setBoundingInfo(ee) {
            return this._boundingInfo = ee, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(ee, ie, He) {
            return this._boundingInfo = new oe.c(ee, ie, He), this._boundingInfo
          }
          normalizeToUnitCube() {
            let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              He = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(ee, ie, He)
          }
          get useBones() {
            return this.skeleton && this.Xx().skeletonsEnabled && this.isVerticesDataPresent(Ke.h.MatricesIndicesKind) && this.isVerticesDataPresent(Ke.h.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(ee) {}
          _activate(ee, ie) {
            return this._renderId = ee, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Fe.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get Zx() {
            return !1
          }
          get nMe() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(ee, ie, He) {
            return this.position.addInPlace(this.calcMovePOV(ee, ie, He)), this
          }
          calcMovePOV(ee, ie, He) {
            const ye = new Me.b;
            (this.rotationQuaternion ? this.rotationQuaternion : Me.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(ye);
            const be = Me.p.Zero(),
              Ke = this.definedFacingForward ? -1 : 1;
            return Me.p.TransformCoordinatesFromFloatsToRef(ee * Ke, ie, He * Ke, ye, be), be
          }
          rotatePOV(ee, ie, He) {
            return this.rotation.addInPlace(this.calcRotatePOV(ee, ie, He)), this
          }
          calcRotatePOV(ee, ie, He) {
            const ye = this.definedFacingForward ? 1 : -1;
            return new Me.p(ee * ye, ie, He * ye)
          }
          _refreshBoundingInfo(ee, ie) {
            if (ee) {
              const He = (0, ze.f)(ee, 0, this.getTotalVertices(), ie);
              this._boundingInfo ? this._boundingInfo.reConstruct(He.minimum, He.maximum) : this._boundingInfo = new oe.c(He.minimum, He.maximum)
            }
            if (this.pW)
              for (let He = 0; He < this.pW.length; He++) this.pW[He].refreshBoundingInfo(ee);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(ee) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(ee.minimum, ee.maximum) : this._boundingInfo = new oe.c(ee.minimum, ee.maximum), this.pW)
              for (let ie = 0; ie < this.pW.length; ie++) this.pW[ie].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(ee, ie, He, ye, be, Ue, Fe) {
            ! function(ee, ie, He, ye, be, Ue, Fe) {
              const Je = Me.j.rf[0],
                oe = Me.j.Matrix[0],
                Re = Me.j.Matrix[1],
                ke = ie === Ke.h.NormalKind ? Me.p.TransformNormalFromFloatsToRef : Me.p.TransformCoordinatesFromFloatsToRef;
              for (let Ke = 0, qe = 0; Ke < ee.length; Ke += 3, qe += 4) {
                let ie, fe;
                for (oe.reset(), ie = 0; ie < 4; ie++) fe = be[qe + ie], fe > 0 && (Me.b.FromFloat32ArrayToRefScaled(He, Math.floor(16 * ye[qe + ie]), fe, Re), oe.addToSelf(Re));
                if (Ue && Fe)
                  for (ie = 0; ie < 4; ie++) fe = Fe[qe + ie], fe > 0 && (Me.b.FromFloat32ArrayToRefScaled(He, Math.floor(16 * Ue[qe + ie]), fe, Re), oe.addToSelf(Re));
                ke(ee[Ke], ee[Ke + 1], ee[Ke + 2], oe, Je), Je.toArray(ee, Ke)
              }
            }(ee, ie, He, ye, be, Ue, Fe)
          }
          _getData(ie, He) {
            let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ke.h.PositionKind;
            const be = ie.cache,
              Ue = ee => {
                if (be) {
                  const ie = be._vertexData || (be._vertexData = {});
                  return ie[ee] || this.copyVerticesData(ee, ie), ie[ee]
                }
                return this.getVerticesData(ee)
              };
            if (He || (He = Ue(ye)), !He) return null;
            be ? (be._outputData ? be._outputData.set(He) : be._outputData = new Float32Array(He), He = be._outputData) : (ie.applyMorph && this.morphTargetManager || ie.applySkeleton && this.skeleton || ie.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (He = He.slice()), ie.applyMorph && this.morphTargetManager && function(ee, ie, He) {
              let ye;
              switch (ie) {
                case Ke.h.PositionKind:
                  ye = ee => ee.getPositions();
                  break;
                case Ke.h.NormalKind:
                  ye = ee => ee.getNormals();
                  break;
                case Ke.h.TangentKind:
                  ye = ee => ee.getTangents();
                  break;
                case Ke.h.UVKind:
                  ye = ee => ee.getUVs();
                  break;
                case Ke.h.UV2Kind:
                  ye = ee => ee.getUV2s();
                  break;
                case Ke.h.ColorKind:
                  ye = ee => ee.getColors();
                  break;
                default:
                  return
              }
              for (let be = 0; be < ee.length; be++) {
                let ie = ee[be];
                for (let Me = 0; Me < He.numTargets; Me++) {
                  const Ke = He.getTarget(Me),
                    Ue = Ke.influence;
                  if (0 !== Ue) {
                    const He = ye(Ke);
                    He && (ie += (He[be] - ee[be]) * Ue)
                  }
                }
                ee[be] = ie
              }
            }(He, ye, this.morphTargetManager);
            const Fe = this.bakedVertexAnimationManager;
            let Je = !1;
            if (ie.applyBakedVertexAnimation && Fe?.isEnabled) {
              const ee = Ue(Ke.h.MatricesIndicesKind),
                be = Ue(Ke.h.MatricesWeightsKind);
              if (be && ee) {
                const Me = this.numBoneInfluencers > 4,
                  oe = Me ? Ue(Ke.h.MatricesIndicesExtraKind) : null,
                  Re = Me ? Ue(Ke.h.MatricesWeightsExtraKind) : null;
                Je = De(He, ye, Fe, ie.bakedVertexAnimationSettings ?? Fe.animationParameters, ee, be, oe, Re, this.numBoneInfluencers)
              }
            }
            if (!Je && ie.applySkeleton && this.skeleton) {
              const ie = Ue(Ke.h.MatricesIndicesKind),
                be = Ue(Ke.h.MatricesWeightsKind);
              if (be && ie) {
                const Me = this.numBoneInfluencers > 4,
                  Fe = Me ? Ue(Ke.h.MatricesIndicesExtraKind) : null,
                  Je = Me ? Ue(Ke.h.MatricesWeightsExtraKind) : null,
                  oe = this.skeleton.getTransformMatrices(this);
                ee._ApplySkeleton(He, ye, oe, ie, be, Fe, Je)
              }
            }
            if (!1 !== ie.updatePositionsArray && ye === Ke.h.PositionKind) {
              const ee = this._internalAbstractMeshDataInfo._positions || [],
                ie = ee.length;
              if (ee.length = He.length / 3, ie < ee.length)
                for (let He = ie; He < ee.length; He++) ee[He] = new Me.p;
              for (let ye = 0, be = 0; ye < ee.length; ye++, be += 3) ee[ye].wie(He[be], He[be + 1], He[be + 2]);
              this._internalAbstractMeshDataInfo._positions = ee
            }
            return He
          }
          getNormalsData() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: ee,
              applyMorph: ie,
              updatePositionsArray: !1
            }, null, Ke.h.NormalKind)
          }
          M_() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: ee,
              applyMorph: ie,
              updatePositionsArray: !1
            }, He, Ke.h.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new oe.c(Me.p.Zero(), Me.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(ee) {
            if (!this.pW) return this;
            const ie = this.pW.length;
            for (let He = 0; He < ie; He++) {
              const ye = this.pW[He];
              (ie > 1 || !ye.IsGlobal) && ye.updateBoundingInfo(ee)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.eT || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(ee) {
            return this.WC().isInFrustum(ee, this.cullingStrategy)
          }
          isCompletelyInFrustum(ee) {
            return this.WC().isCompletelyInFrustum(ee)
          }
          CMe(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              He = arguments.length > 2 ? arguments[2] : void 0;
            const ye = this.WC(),
              be = ee.WC();
            if (ye.intersects(be, ie)) return !0;
            if (He)
              for (const Me of this.getChildMeshes())
                if (Me.CMe(ee, ie, !0)) return !0;
            return !1
          }
          intersectsPoint(ee) {
            return this.WC().intersectsPoint(ee)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(ee) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = ee
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(ee) {
            let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const He = this.Xx().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = He.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, He.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, ee, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, ie), this
          }
          _collideForSubMesh(ee, ie, He) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!ee._lastColliderWorldVertices || !ee._lastColliderTransformMatrix.equals(ie)) {
              ee._lastColliderTransformMatrix = ie.clone(), ee._lastColliderWorldVertices = [], ee._trianglePlanes = [];
              const He = ee.verticesStart,
                ye = ee.verticesStart + ee.verticesCount;
              for (let be = He; be < ye; be++) ee._lastColliderWorldVertices.push(Me.p.TransformCoordinates(this._positions[be], ie))
            }
            return He._collide(ee._trianglePlanes, ee._lastColliderWorldVertices, this.eMe(), ee.indexStart, ee.indexStart + ee.indexCount, ee.verticesStart, !!ee.iT(), this, this._shouldConvertRHS(), 7 === ee.iT()?.fillMode), this
          }
          _processCollisionsForSubMeshes(ee, ie) {
            const He = this._scene.getCollidingSubMeshCandidates(this, ee),
              ye = He.length;
            for (let be = 0; be < ye; be++) {
              const Me = He.data[be];
              ye > 1 && !Me._checkCollision(ee) || this._collideForSubMesh(Me, ie, ee)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(ee) {
            if (!this.WC()._checkCollision(ee)) return this;
            const ie = Me.j.Matrix[0],
              He = Me.j.Matrix[1];
            return Me.b.ScalingToRef(1 / ee._radius.x, 1 / ee._radius.y, 1 / ee._radius.z, ie), this.worldMatrixFromCache.multiplyToRef(ie, He), this._processCollisionsForSubMeshes(ee, He), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(ee, ie, He) {
            let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              be = arguments.length > 4 ? arguments[4] : void 0,
              Ke = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const Ue = new Je.e,
              Fe = this.getClassName(),
              oe = "InstancedLinesMesh" === Fe || "LinesMesh" === Fe || "GreasedLineMesh" === Fe ? this.intersectionThreshold : 0,
              Re = this.WC();
            if (!this.pW) return Ue;
            if (!Ke && (!ee.intersectsSphere(Re.OMe, oe) || !ee.intersectsBox(Re.boundingBox, oe))) return Ue;
            if (ye) return Ue.hit = !Ke, Ue.pickedMesh = Ke ? null : this, Ue.distance = Ke ? 0 : Me.p.Distance(ee.origin, Re.OMe.center), Ue.subMeshId = 0, Ue;
            if (!this._generatePointsArray()) return Ue;
            let ke = null;
            const qe = this._scene.getIntersectingSubMeshCandidates(this, ee),
              fe = qe.length;
            let Te = !1;
            for (let Me = 0; Me < fe; Me++) {
              const ee = qe.data[Me].iT();
              if (ee && (7 == ee.fillMode || 0 == ee.fillMode || 1 == ee.fillMode || 2 == ee.fillMode || 4 == ee.fillMode)) {
                Te = !0;
                break
              }
            }
            if (!Te) return Ue.hit = !0, Ue.pickedMesh = this, Ue.distance = Me.p.Distance(ee.origin, Re.OMe.center), Ue.subMeshId = -1, Ue;
            for (let Me = 0; Me < fe; Me++) {
              const ye = qe.data[Me];
              if (fe > 1 && !Ke && !ye.canIntersects(ee)) continue;
              const be = ye.intersects(ee, this._positions, this.eMe(), ie, He);
              if (be && (ie || !ke || be.distance < ke.distance) && (ke = be, ke.subMeshId = ye._id, ke._internalSubMeshId = Me, ie)) break
            }
            if (ke) {
              const ie = be ?? this.getWorldMatrix(),
                He = Me.j.rf[0],
                ye = Me.j.rf[1];
              Me.p.TransformCoordinatesToRef(ee.origin, ie, He), ee.direction.scaleToRef(ke.distance, ye);
              const Ke = Me.p.TransformNormal(ye, ie).addInPlace(He);
              return Ue.hit = !0, Ue.distance = Me.p.Distance(He, Ke), Ue.pickedPoint = Ke, Ue.pickedMesh = this, Ue.bu = ke.bu || 0, Ue.bv = ke.bv || 0, Ue.subMeshFaceId = ke.faceId, Ue.faceId = ke.faceId + qe.data[ke._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), Ue.subMeshId = ke.subMeshId, Ue
            }
            return Ue
          }
          clone(ee, ie, He) {
            return null
          }
          releaseSubMeshes() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.pW)
              for (; this.pW.length;) this.pW[0].dispose(ee);
            else this.pW = [];
            return this
          }
          dispose(ee) {
            let ie, He = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const ye = this.Xx();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), ye.freeActiveMeshes(), ye.freeRenderingGroups(), ye.renderingManager.maintainStateBetweenFrames && ye.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((ee => ee !== this && ee.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), ie = 0; ie < this._intersectionsInProgress.length; ie++) {
              const ee = this._intersectionsInProgress[ie],
                He = ee._intersectionsInProgress.indexOf(this);
              ee._intersectionsInProgress.splice(He, 1)
            }
            this._intersectionsInProgress.length = 0;
            const be = ye.lights;
            for (const Ke of be) {
              let ee = Ke.includedOnlyMeshes.indexOf(this); - 1 !== ee && Ke.includedOnlyMeshes.splice(ee, 1), ee = Ke.excludedMeshes.indexOf(this), -1 !== ee && Ke.excludedMeshes.splice(ee, 1);
              const ie = Ke.getShadowGenerators();
              if (ie) {
                const He = ie.values();
                for (let ie = He.next(); !0 !== ie.done; ie = He.next()) {
                  const He = ie.value.getShadowMap();
                  He && He.renderList && (ee = He.renderList.indexOf(this), -1 !== ee && He.renderList.splice(ee, 1))
                }
              }
            }
            this.releaseSubMeshes(ye._isDisposing);
            const Me = ye.Nf();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Me.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Me.wipeCaches(), ye.gL(this), this._parentContainer) {
              const ee = this._parentContainer.meshes.indexOf(this);
              ee > -1 && this._parentContainer.meshes.splice(ee, 1), this._parentContainer = null
            }
            if (He && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !ee)
              for (ie = 0; ie < ye.zW.length; ie++) ye.zW[ie].emitter === this && (ye.zW[ie].dispose(), ie--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(ee, He)
          }
          _initFacetData() {
            const ee = this._internalAbstractMeshDataInfo._facetData;
            ee.facetNormals || (ee.facetNormals = []), ee.facetPositions || (ee.facetPositions = []), ee.facetPartitioning || (ee.facetPartitioning = new Array), ee.facetNb = this.eMe().length / 3 | 0, ee.partitioningSubdivisions = ee.partitioningSubdivisions ? ee.partitioningSubdivisions : 10, ee.partitioningBBoxRatio = ee.partitioningBBoxRatio ? ee.partitioningBBoxRatio : 1.01;
            for (let ie = 0; ie < ee.facetNb; ie++) ee.facetNormals[ie] = Me.p.Zero(), ee.facetPositions[ie] = Me.p.Zero();
            return ee.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const ee = this._internalAbstractMeshDataInfo._facetData;
            ee.facetDataEnabled || this._initFacetData();
            const ie = this.getVerticesData(Ke.h.PositionKind),
              He = this.eMe(),
              ye = this.getVerticesData(Ke.h.NormalKind)?.slice(),
              be = this.WC();
            if (ee.facetDepthSort && !ee.facetDepthSortEnabled) {
              if (ee.facetDepthSortEnabled = !0, He instanceof Uint16Array) ee.depthSortedIndices = new Uint16Array(He);
              else if (He instanceof Uint32Array) ee.depthSortedIndices = new Uint32Array(He);
              else {
                let ie = !1;
                for (let ee = 0; ee < He.length; ee++)
                  if (He[ee] > 65535) {
                    ie = !0;
                    break
                  } ee.depthSortedIndices = ie ? new Uint32Array(He) : new Uint16Array(He)
              }
              if (ee.facetDepthSortFunction = function(ee, ie) {
                  return ie.sqDistance - ee.sqDistance
                }, !ee.facetDepthSortFrom) {
                const ie = this.Xx().activeCamera;
                ee.facetDepthSortFrom = ie ? ie.position : Me.p.Zero()
              }
              ee.depthSortedFacets = [];
              for (let ie = 0; ie < ee.facetNb; ie++) {
                const He = {
                  ind: 3 * ie,
                  sqDistance: 0
                };
                ee.depthSortedFacets.push(He)
              }
              ee.invertedMatrix = Me.b.Identity(), ee.facetDepthSortOrigin = Me.p.Zero()
            }
            ee.bbSize.x = be.maximum.x - be.minimum.x > Ee.b ? be.maximum.x - be.minimum.x : Ee.b, ee.bbSize.y = be.maximum.y - be.minimum.y > Ee.b ? be.maximum.y - be.minimum.y : Ee.b, ee.bbSize.z = be.maximum.z - be.minimum.z > Ee.b ? be.maximum.z - be.minimum.z : Ee.b;
            let Fe = ee.bbSize.x > ee.bbSize.y ? ee.bbSize.x : ee.bbSize.y;
            if (Fe = Fe > ee.bbSize.z ? Fe : ee.bbSize.z, ee.subDiv.max = ee.partitioningSubdivisions, ee.subDiv.X = Math.floor(ee.subDiv.max * ee.bbSize.x / Fe), ee.subDiv.Y = Math.floor(ee.subDiv.max * ee.bbSize.y / Fe), ee.subDiv.Z = Math.floor(ee.subDiv.max * ee.bbSize.z / Fe), ee.subDiv.X = ee.subDiv.X < 1 ? 1 : ee.subDiv.X, ee.subDiv.Y = ee.subDiv.Y < 1 ? 1 : ee.subDiv.Y, ee.subDiv.Z = ee.subDiv.Z < 1 ? 1 : ee.subDiv.Z, ee.facetParameters.facetNormals = this.getFacetLocalNormals(), ee.facetParameters.facetPositions = this.getFacetLocalPositions(), ee.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), ee.facetParameters.bInfo = be, ee.facetParameters.bbSize = ee.bbSize, ee.facetParameters.subDiv = ee.subDiv, ee.facetParameters.ratio = this.partitioningBBoxRatio, ee.facetParameters.depthSort = ee.facetDepthSort, ee.facetDepthSort && ee.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(ee.invertedMatrix), Me.p.TransformCoordinatesToRef(ee.facetDepthSortFrom, ee.invertedMatrix, ee.facetDepthSortOrigin), ee.facetParameters.distanceTo = ee.facetDepthSortOrigin), ee.facetParameters.depthSortedFacets = ee.depthSortedFacets, ye && Ue.e.ComputeNormals(ie, He, ye, ee.facetParameters), ee.facetDepthSort && ee.facetDepthSortEnabled) {
              ee.depthSortedFacets.sort(ee.facetDepthSortFunction);
              const ie = ee.depthSortedIndices.length / 3 | 0;
              for (let ye = 0; ye < ie; ye++) {
                const ie = ee.depthSortedFacets[ye].ind;
                ee.depthSortedIndices[3 * ye] = He[ie], ee.depthSortedIndices[3 * ye + 1] = He[ie + 1], ee.depthSortedIndices[3 * ye + 2] = He[ie + 2]
              }
              this.updateIndices(ee.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const ee = this._internalAbstractMeshDataInfo._facetData;
            return ee.facetNormals || this.updateFacetData(), ee.facetNormals
          }
          getFacetLocalPositions() {
            const ee = this._internalAbstractMeshDataInfo._facetData;
            return ee.facetPositions || this.updateFacetData(), ee.facetPositions
          }
          getFacetLocalPartitioning() {
            const ee = this._internalAbstractMeshDataInfo._facetData;
            return ee.facetPartitioning || this.updateFacetData(), ee.facetPartitioning
          }
          getFacetPosition(ee) {
            const ie = Me.p.Zero();
            return this.getFacetPositionToRef(ee, ie), ie
          }
          getFacetPositionToRef(ee, ie) {
            const He = this.getFacetLocalPositions()[ee],
              ye = this.getWorldMatrix();
            return Me.p.TransformCoordinatesToRef(He, ye, ie), this
          }
          getFacetNormal(ee) {
            const ie = Me.p.Zero();
            return this.getFacetNormalToRef(ee, ie), ie
          }
          getFacetNormalToRef(ee, ie) {
            const He = this.getFacetLocalNormals()[ee];
            return Me.p.TransformNormalToRef(He, this.getWorldMatrix(), ie), this
          }
          getFacetsAtLocalCoordinates(ee, ie, He) {
            const ye = this.WC(),
              be = this._internalAbstractMeshDataInfo._facetData,
              Me = Math.floor((ee - ye.minimum.x * be.partitioningBBoxRatio) * be.subDiv.X * be.partitioningBBoxRatio / be.bbSize.x),
              Ke = Math.floor((ie - ye.minimum.y * be.partitioningBBoxRatio) * be.subDiv.Y * be.partitioningBBoxRatio / be.bbSize.y),
              Ue = Math.floor((He - ye.minimum.z * be.partitioningBBoxRatio) * be.subDiv.Z * be.partitioningBBoxRatio / be.bbSize.z);
            return Me < 0 || Me > be.subDiv.max || Ke < 0 || Ke > be.subDiv.max || Ue < 0 || Ue > be.subDiv.max ? null : be.facetPartitioning[Me + be.subDiv.max * Ke + be.subDiv.max * be.subDiv.max * Ue]
          }
          getClosestFacetAtCoordinates(ee, ie, He, ye) {
            let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Ke = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Ue = this.getWorldMatrix(),
              Fe = Me.j.Matrix[5];
            Ue.invertToRef(Fe);
            const Je = Me.j.rf[8];
            Me.p.TransformCoordinatesFromFloatsToRef(ee, ie, He, Fe, Je);
            const oe = this.getClosestFacetAtLocalCoordinates(Je.x, Je.y, Je.z, ye, be, Ke);
            return ye && Me.p.TransformCoordinatesFromFloatsToRef(ye.x, ye.y, ye.z, Ue, ye), oe
          }
          getClosestFacetAtLocalCoordinates(ee, ie, He, ye) {
            let be, Me, Ke, Ue, Fe, Je, oe, Re, ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              qe = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              fe = null;
            const Te = this.getFacetLocalPositions(),
              pe = this.getFacetLocalNormals(),
              Xe = this.getFacetsAtLocalCoordinates(ee, ie, He);
            if (!Xe) return null;
            let ze, Be, Ee, ge, Oe = Number.MAX_VALUE;
            for (let de = 0; de < Xe.length; de++) Be = Xe[de], Ee = pe[Be], ge = Te[Be], Ue = (ee - ge.x) * Ee.x + (ie - ge.y) * Ee.y + (He - ge.z) * Ee.z, (!ke || ke && qe && Ue >= 0 || ke && !qe && Ue <= 0) && (Ue = Ee.x * ge.x + Ee.y * ge.y + Ee.z * ge.z, Fe = -(Ee.x * ee + Ee.y * ie + Ee.z * He - Ue) / (Ee.x * Ee.x + Ee.y * Ee.y + Ee.z * Ee.z), Je = ee + Ee.x * Fe, oe = ie + Ee.y * Fe, Re = He + Ee.z * Fe, be = Je - ee, Me = oe - ie, Ke = Re - He, ze = be * be + Me * Me + Ke * Ke, ze < Oe && (Oe = ze, fe = Be, ye && (ye.x = Je, ye.y = oe, ye.z = Re)));
            return fe
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const ee = this._internalAbstractMeshDataInfo._facetData;
            return ee.facetDataEnabled && (ee.facetDataEnabled = !1, ee.facetPositions = [], ee.facetNormals = [], ee.facetPartitioning = new Array, ee.facetParameters = {}, ee.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(ee, ie) {
            return this
          }
          createNormals(ee) {
            const ie = this.getVerticesData(Ke.h.PositionKind),
              He = this.eMe();
            let ye;
            return ye = this.isVerticesDataPresent(Ke.h.NormalKind) ? this.getVerticesData(Ke.h.NormalKind) : [], Ue.e.ComputeNormals(ie, He, ye, {
              useRightHandedSystem: this.Xx().useRightHandedSystem
            }), this.setVerticesData(Ke.h.NormalKind, ye, ee), this
          }
          async optimizeIndicesAsync() {
            const ee = this.eMe();
            if (!ee) return this;
            const {
              OptimizeIndices: ie
            } = await He.e(660).then((() => He(45768)));
            return ie(ee), this.setIndices(ee, this.getTotalVertices()), this
          }
          alignWithNormal(ee, ie) {
            ie || (ie = ge.d.Y);
            const He = Me.j.rf[0],
              ye = Me.j.rf[1];
            return Me.p.CrossToRef(ie, ee, ye), Me.p.CrossToRef(ee, ye, He), this.rotationQuaternion ? Me.f.RotationQuaternionFromAxisToRef(He, ee, ye, this.rotationQuaternion) : Me.p.RotationFromAxisToRef(He, ee, ye, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, pe.l)("EdgesRenderer")
          }
          enableEdgesRendering(ee, ie, He) {
            throw (0, pe.l)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.zW.filter((ee => ee.emitter === this))
          }
        }, (() => {
          const He = "function" === typeof Symbol && Symbol.metadata ? Object.create(ke[Symbol.metadata] ?? null) : void 0;
          ie = [de.h.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, ye.i)(ee, null, ie, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: ee => "_ApplySkeleton" in ee,
              get: ee => ee._ApplySkeleton
            },
            metadata: He
          }, null, qe), He && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: He
          })
        })(), ee.OCCLUSION_TYPE_NONE = ((0, ye.l)(ee, qe), 0), ee.OCCLUSION_TYPE_OPTIMISTIC = 1, ee.OCCLUSION_TYPE_STRICT = 2, ee.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, ee.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, ee.CULLINGSTRATEGY_STANDARD = 0, ee.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, ee.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, ee.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, ee.DefaultIsPickable = !0, ee
      })(),
      Ve = !1;

    function ae() {
      Ve || (Ve = !0, (0, te.e)("BABYLON.AbstractMesh", Ye))
    }(qe = Ye.prototype).createOrUpdateSubmeshesOctree ?? (qe.createOrUpdateSubmeshesOctree = (0, pe.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (fe = Ye.prototype).getPhysicsImpostor ?? (fe.getPhysicsImpostor = (0, pe.h)("AbstractMesh", "getPhysicsImpostor")), (Te = Ye.prototype).setPhysicsLinkWith ?? (Te.setPhysicsLinkWith = (0, pe.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Ye.prototype, "occlusionRetryCount") || Object.defineProperty(Ye.prototype, "occlusionRetryCount", (0, pe.d)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Ye.prototype, "occlusionType") || Object.defineProperty(Ye.prototype, "occlusionType", (0, pe.d)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Ye.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Ye.prototype, "occlusionQueryAlgorithmType", (0, pe.d)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Ye.prototype, "isOccluded") || Object.defineProperty(Ye.prototype, "isOccluded", (0, pe.d)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Ye.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Ye.prototype, "isOcclusionQueryInProgress", (0, pe.d)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Ye.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Ye.prototype, "forceRenderingWhenOccluded", (0, pe.d)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Ye.prototype, "occlusionForRenderPassId") || Object.defineProperty(Ye.prototype, "occlusionForRenderPassId", (0, pe.d)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Ye.prototype, "decalMap") || Object.defineProperty(Ye.prototype, "decalMap", (0, pe.d)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Ye.prototype, "pC") || Object.defineProperty(Ye.prototype, "pC", (0, pe.d)("AbstractMesh", "pC")), Object.getOwnPropertyDescriptor(Ye.prototype, "physicsImpostor") || Object.defineProperty(Ye.prototype, "physicsImpostor", (0, pe.d)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Ye.prototype, "showBoundingBox") || Object.defineProperty(Ye.prototype, "showBoundingBox", (0, pe.d)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Ye.prototype, "edgesRenderer") || Object.defineProperty(Ye.prototype, "edgesRenderer", (0, pe.d)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Ye.prototype, "renderOutline") || Object.defineProperty(Ye.prototype, "renderOutline", (0, pe.d)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Ye.prototype, "renderOverlay") || Object.defineProperty(Ye.prototype, "renderOverlay", (0, pe.d)("AbstractMesh", "renderOverlay"))
  },
  41540: (ee, ie, He) => {
    He.d(ie, {
      b: () => Xe
    });
    var ye = He(37917),
      be = He(38022),
      Me = He(41535),
      Ke = He(41247),
      Ue = He(41421),
      Fe = He(41542),
      Je = He(41429),
      oe = He(41203),
      Re = He(39467),
      ke = He(41144),
      qe = He(41439),
      fe = He(37929),
      Te = He(41550),
      pe = He(41175);
    class Xe {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(ee) {
        this._boundingBias ? this._boundingBias.jD(ee) : this._boundingBias = ee.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(ee) {
        const ie = new Xe(Xe.RandomId(), ee.Xx());
        return ie.applyToMesh(ee), ie
      }
      get meshes() {
        return this._meshes
      }
      constructor(ee, ie, He) {
        let be = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new ye.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new ye.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = ie || fe.b.LastCreatedScene, this._scene && (this.id = ee, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Nf(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = be, null !== Ke && (this._totalVertices = Ke), He ? this.setAllVerticesData(He, be) : null === Ke && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Me && (this.applyToMesh(Me), Me.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      Xx() {
        return this._scene
      }
      Nf() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let ee = 0; ee < this._meshes.length; ee++)
          if (!this._meshes[ee].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const ee = new Set;
        for (const ie in this._vertexBuffers) ee.add(this._vertexBuffers[ie].getWrapperBuffer());
        ee.forEach((ee => {
          ee._rebuild()
        }))
      }
      setAllVerticesData(ee, ie) {
        ee.applyToGeometry(this, ie), this._notifyUpdate()
      }
      setVerticesData(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 ? arguments[3] : void 0;
        He && Array.isArray(ie) && (ie = new Float32Array(ie));
        const be = new Ke.h(this._engine, ie, ee, {
          updatable: He,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: ye,
          label: "Geometry_" + this.id + "_" + ee
        });
        this.setVerticesBuffer(be)
      }
      removeVerticesData(ee) {
        this._vertexBuffers[ee] && (this._vertexBuffers[ee].dispose(), delete this._vertexBuffers[ee]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const be = ee.getKind();
        this._vertexBuffers[be] && He && this._vertexBuffers[be].dispose(), ee._buffer && ee._ownsBuffer && ee._buffer._increaseReferences(), this._vertexBuffers[be] = ee;
        const Me = this._meshes,
          Ue = Me.length;
        if (be === Ke.h.PositionKind) {
          this._totalVertices = ie ?? ee._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : ee.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const He = this._extend && this._extend.minimum || new ye.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            be = this._extend && this._extend.maximum || new ye.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let ee = 0; ee < Ue; ee++) {
            const ie = Me[ee];
            ie.buildBoundingInfo(He, be), ie._createGlobalSubMesh(ie.isUnIndexed), ie.computeWorldMatrix(!0), ie.synchronizeInstances()
          }
        }
        this._notifyUpdate(be)
      }
      updateVerticesDataDirectly(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const be = this.getVertexBuffer(ee);
        be && (be.updateDirectly(ie, He, ye), this._notifyUpdate(ee))
      }
      updateVerticesData(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = this.getVertexBuffer(ee);
        ye && (ye.update(ie), ee === Ke.h.PositionKind && this._updateBoundingInfo(He, ie), this._notifyUpdate(ee))
      }
      _updateBoundingInfo(ee, ie) {
        if (ee && this._updateExtend(ie), this._resetPointsArrayCache(), ee) {
          const ee = this._meshes;
          for (const ie of ee) {
            ie.hasBoundingInfo ? ie.WC().reConstruct(this._extend.minimum, this._extend.maximum) : ie.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const ee = ie.pW;
            for (const ie of ee) ie.refreshBoundingInfo()
          }
        }
      }
      _bind(ee, ie, He, ye) {
        if (!ee) return;
        void 0 === ie && (ie = this._indexBuffer);
        const be = this.getVertexBuffers();
        if (!be) return;
        if (ie != this._indexBuffer || !this._vertexArrayObjects && !ye) return void this._engine.bindBuffers(be, ie, ee, He);
        const Me = ye || this._vertexArrayObjects,
          Ke = this._engine;
        Me[ee.key] || (Me[ee.key] = Ke.recordVertexArrayObject(be, ie, ee, He)), Ke.bindVertexArrayObject(Me[ee.key], ie)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(ee, ie, He) {
        const ye = this.getVertexBuffer(ee);
        return ye ? ye.getFloatData(this._totalVertices, He || ie && 1 !== this._meshes.length) : null
      }
      copyVerticesData(ee, ie) {
        const He = this.getVertexBuffer(ee);
        if (!He) return;
        ie[ee] || (ie[ee] = new Float32Array(this._totalVertices * He.getSize()));
        const ye = He.getData();
        ye && (0, pe.d)(ye, He.getSize(), He.type, He.byteOffset, He.byteStride, He.normalized, this._totalVertices, ie[ee])
      }
      isVertexBufferUpdatable(ee) {
        const ie = this._vertexBuffers[ee];
        return !!ie && ie.isUpdatable()
      }
      getVertexBuffer(ee) {
        return this.isReady() ? this._vertexBuffers[ee] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(ee) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[ee] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(ee)
      }
      getVerticesDataKinds() {
        const ee = [];
        let ie;
        if (!this._vertexBuffers && this._delayInfo)
          for (ie in this._delayInfo) ee.push(ie);
        else
          for (ie in this._vertexBuffers) ee.push(ie);
        return ee
      }
      updateIndices(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const ye = ee.length !== this._indices.length;
            if (He || (this._indices = ee.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, ee, ie), ye)
              for (const ee of this._meshes) ee._createGlobalSubMesh(!0)
          } else this.setIndices(ee, null, !0)
      }
      setIndexBuffer(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = ee, this._totalVertices = ie, this._totalIndices = He, ee.is32Bits = null === ye ? ie > 65535 : ye;
        for (const be of this._meshes) be._createGlobalSubMesh(!0), be.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = ee, this._indexBufferIsUpdatable = He, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, He, "Geometry_" + this.id + "_IndexBuffer")), void 0 != ie && (this._totalVertices = ie);
        for (const be of this._meshes) be._createGlobalSubMesh(!ye), be.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      eMe(ee, ie) {
        if (!this.isReady()) return null;
        const He = this._indices;
        return ie || ee && 1 !== this._meshes.length ? He.slice() : He
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        ee && this._vertexArrayObjects && this._vertexArrayObjects[ee.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[ee.key]), delete this._vertexArrayObjects[ee.key])
      }
      releaseForMesh(ee, ie) {
        const He = this._meshes,
          ye = He.indexOf(ee); - 1 !== ye && (He.splice(ye, 1), this._vertexArrayObjects && ee._invalidateInstanceVertexArrayObject(), ee._geometry = null, 0 === He.length && ie && this.dispose())
      }
      applyToMesh(ee) {
        if (ee._geometry === this) return;
        const ie = ee._geometry;
        ie && ie.releaseForMesh(ee), this._vertexArrayObjects && ee._invalidateInstanceVertexArrayObject();
        const He = this._meshes;
        ee._geometry = this, ee._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), He.push(ee), this.isReady() ? this._applyToMesh(ee) : this._boundingInfo && ee.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!ee && (ee = this.getVerticesData(Ke.h.PositionKind), !ee)) return;
          this._extend = (0, qe.f)(ee, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(ee) {
        for (const ie in this._vertexBuffers) {
          const He = this._vertexBuffers[ie];
          He._buffer.getBuffer() || He.create(), ie === Ke.h.PositionKind && (this._extend || this._updateExtend(), ee.buildBoundingInfo(this._extend.minimum, this._extend.maximum), ee._createGlobalSubMesh(ee.isUnIndexed), ee._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), ee._syncGeometryWithMorphTargetManager(), ee.synchronizeInstances()
      }
      _notifyUpdate(ee) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, ee), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const ie of this._meshes) ie._markSubMeshesAsAttributesDirty()
      }
      load(ee, ie) {
        2 !== this.delayLoadState && (this.isReady() ? ie && ie() : (this.delayLoadState = 2, this._queueLoad(ee, ie)))
      }
      _queueLoad(ee, ie) {
        this.delayLoadingFile && (ee.addPendingData(this), (async () => {
          try {
            const He = await ee._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void ee.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(He), this), this.delayLoadState = 1, this._delayInfo = [], ee.removePendingData(this);
            const ye = this._meshes,
              be = ye.length;
            for (let ee = 0; ee < be; ee++) this._applyToMesh(ye[ee]);
            ie && ie()
          } catch (He) {
            ee.removePendingData(this), ee.RZ || Re.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${He}`)
          }
        })())
      }
      toLeftHanded() {
        const ee = this.eMe(!1);
        if (null != ee && ee.length > 0) {
          for (let ie = 0; ie < ee.length; ie += 3) {
            const He = ee[ie + 0];
            ee[ie + 0] = ee[ie + 2], ee[ie + 2] = He
          }
          this.setIndices(ee)
        }
        const ie = this.getVerticesData(Ke.h.PositionKind, !1);
        if (null != ie && ie.length > 0) {
          for (let ee = 0; ee < ie.length; ee += 3) ie[ee + 2] = -ie[ee + 2];
          this.setVerticesData(Ke.h.PositionKind, ie, !1)
        }
        const He = this.getVerticesData(Ke.h.NormalKind, !1);
        if (null != He && He.length > 0) {
          for (let ee = 0; ee < He.length; ee += 3) He[ee + 2] = -He[ee + 2];
          this.setVerticesData(Ke.h.NormalKind, He, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const ee = this.getVerticesData(Ke.h.PositionKind);
        if (!ee || 0 === ee.length) return !1;
        for (let ie = 3 * this._positionsCache.length, He = this._positionsCache.length; ie < ee.length; ie += 3, ++He) this._positionsCache[He] = ye.p.FromArray(ee, ie);
        for (let ie = 0, He = 0; ie < ee.length; ie += 3, ++He) this._positionsCache[He].set(ee[0 + ie], ee[1 + ie], ee[2 + ie]);
        return this._positionsCache.length = ee.length / 3, this._positions = this._positionsCache, !0
      }
      RZ() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const He in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[He]);
          this._vertexArrayObjects = {};
          const ee = this._meshes,
            ie = ee.length;
          for (let He = 0; He < ie; He++) ee[He]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const ee = this._meshes,
          ie = ee.length;
        let He;
        for (He = 0; He < ie; He++) this.releaseForMesh(ee[He]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const ye in this._vertexBuffers) this._vertexBuffers[ye].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const ee = this._parentContainer.geometries.indexOf(this);
          ee > -1 && this._parentContainer.geometries.splice(ee, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(ee) {
        const ie = new Xe(ee, this._scene),
          He = this.eMe(void 0, !0);
        He && ie.setIndices(He);
        let ye, be = !1;
        for (ye in this._vertexBuffers) {
          const ee = this.getVertexBuffer(ye),
            He = ee.getData();
          if (!He) continue;
          const Me = ee.isUpdatable(),
            Ue = ee.getSize(),
            {
              type: Fe,
              byteOffset: Je,
              byteStride: oe,
              normalized: Re
            } = ee;
          be = be || Me;
          let ke = this._totalVertices;
          if (ee.getIsInstanced()) {
            let ee;
            ee = He instanceof Array ? 4 * He.length : He.byteLength, ke = ee / oe
          }
          const qe = (0, pe.s)(He, Ue, Fe, Je, oe, ke, !0),
            fe = new Ke.h(this._engine, qe, ye, {
              updatable: Me,
              useBytes: !1,
              stride: Ue,
              size: Ue,
              offset: 0,
              type: Fe,
              normalized: Re,
              takeBufferOwnership: !0,
              instanced: ee.getIsInstanced()
            });
          ie.setVerticesBuffer(fe, ke)
        }
        for (ye in ie._updatable = be, ie.delayLoadState = this.delayLoadState, ie.delayLoadingFile = this.delayLoadingFile, ie._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) ie._delayInfo = ie._delayInfo || [], ie._delayInfo.push(ye);
        return ie._boundingInfo = new Je.c(this._extend.minimum, this._extend.maximum), ie
      }
      serialize() {
        const ee = {};
        return ee.id = this.id, ee.uniqueId = this.uniqueId, ee.updatable = this._updatable, ke.b && ke.b.HasTags(this) && (ee.tags = ke.b.GetTags(this)), ee
      }
      _toNumberArray(ee) {
        return Array.isArray(ee) ? ee : Array.prototype.slice.call(ee)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const ee in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, ee) && (this._vertexBuffers[ee]._buffer._data = null)
      }
      serializeVerticeData() {
        const ee = this.serialize();
        return this.isVerticesDataPresent(Ke.h.PositionKind) && (ee.positions = this._toNumberArray(this.getVerticesData(Ke.h.PositionKind)), this.isVertexBufferUpdatable(Ke.h.PositionKind) && (ee.positionsUpdatable = !0)), this.isVerticesDataPresent(Ke.h.NormalKind) && (ee.normals = this._toNumberArray(this.getVerticesData(Ke.h.NormalKind)), this.isVertexBufferUpdatable(Ke.h.NormalKind) && (ee.normalsUpdatable = !0)), this.isVerticesDataPresent(Ke.h.TangentKind) && (ee.tangents = this._toNumberArray(this.getVerticesData(Ke.h.TangentKind)), this.isVertexBufferUpdatable(Ke.h.TangentKind) && (ee.tangentsUpdatable = !0)), this.isVerticesDataPresent(Ke.h.UVKind) && (ee.uvs = this._toNumberArray(this.getVerticesData(Ke.h.UVKind)), this.isVertexBufferUpdatable(Ke.h.UVKind) && (ee.uvsUpdatable = !0)), this.isVerticesDataPresent(Ke.h.UV2Kind) && (ee.uvs2 = this._toNumberArray(this.getVerticesData(Ke.h.UV2Kind)), this.isVertexBufferUpdatable(Ke.h.UV2Kind) && (ee.uvs2Updatable = !0)), this.isVerticesDataPresent(Ke.h.UV3Kind) && (ee.uvs3 = this._toNumberArray(this.getVerticesData(Ke.h.UV3Kind)), this.isVertexBufferUpdatable(Ke.h.UV3Kind) && (ee.uvs3Updatable = !0)), this.isVerticesDataPresent(Ke.h.UV4Kind) && (ee.uvs4 = this._toNumberArray(this.getVerticesData(Ke.h.UV4Kind)), this.isVertexBufferUpdatable(Ke.h.UV4Kind) && (ee.uvs4Updatable = !0)), this.isVerticesDataPresent(Ke.h.UV5Kind) && (ee.uvs5 = this._toNumberArray(this.getVerticesData(Ke.h.UV5Kind)), this.isVertexBufferUpdatable(Ke.h.UV5Kind) && (ee.uvs5Updatable = !0)), this.isVerticesDataPresent(Ke.h.UV6Kind) && (ee.uvs6 = this._toNumberArray(this.getVerticesData(Ke.h.UV6Kind)), this.isVertexBufferUpdatable(Ke.h.UV6Kind) && (ee.uvs6Updatable = !0)), this.isVerticesDataPresent(Ke.h.ColorKind) && (ee.colors = this._toNumberArray(this.getVerticesData(Ke.h.ColorKind)), this.isVertexBufferUpdatable(Ke.h.ColorKind) && (ee.colorsUpdatable = !0)), this.isVerticesDataPresent(Ke.h.MatricesIndicesKind) && (ee.matricesIndices = this._toNumberArray(this.getVerticesData(Ke.h.MatricesIndicesKind)), ee.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Ke.h.MatricesIndicesKind) && (ee.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Ke.h.MatricesWeightsKind) && (ee.matricesWeights = this._toNumberArray(this.getVerticesData(Ke.h.MatricesWeightsKind)), this.isVertexBufferUpdatable(Ke.h.MatricesWeightsKind) && (ee.matricesWeightsUpdatable = !0)), ee.indices = this._toNumberArray(this.eMe()), ee
      }
      static ExtractFromMesh(ee, ie) {
        const He = ee._geometry;
        return He ? He.copy(ie) : null
      }
      static RandomId() {
        return oe.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(ee, ie) {
        for (let He = 0; He < ie.geometries.length; He++)
          if (ie.geometries[He]._loadedUniqueId === ee) return ie.geometries[He];
        return null
      }
      static _ImportGeometry(ee, ie) {
        const He = ie.Xx(),
          ye = ee.geometryUniqueId,
          Me = ee.geometryId;
        if (ye || Me) {
          const ee = ye ? this._GetGeometryByLoadedUniqueId(ye, He) : He.getGeometryById(Me);
          ee && ee.applyToMesh(ie)
        } else if (ee instanceof ArrayBuffer) {
          const He = ie._binaryInfo;
          if (He.positionsAttrDesc && He.positionsAttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.positionsAttrDesc.offset, He.positionsAttrDesc.count);
            ie.setVerticesData(Ke.h.PositionKind, ye, !1)
          }
          if (He.normalsAttrDesc && He.normalsAttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.normalsAttrDesc.offset, He.normalsAttrDesc.count);
            ie.setVerticesData(Ke.h.NormalKind, ye, !1)
          }
          if (He.tangetsAttrDesc && He.tangetsAttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.tangetsAttrDesc.offset, He.tangetsAttrDesc.count);
            ie.setVerticesData(Ke.h.TangentKind, ye, !1)
          }
          if (He.uvsAttrDesc && He.uvsAttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.uvsAttrDesc.offset, He.uvsAttrDesc.count);
            if (Te.c)
              for (let ee = 1; ee < ye.length; ee += 2) ye[ee] = 1 - ye[ee];
            ie.setVerticesData(Ke.h.UVKind, ye, !1)
          }
          if (He.uvs2AttrDesc && He.uvs2AttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.uvs2AttrDesc.offset, He.uvs2AttrDesc.count);
            if (Te.c)
              for (let ee = 1; ee < ye.length; ee += 2) ye[ee] = 1 - ye[ee];
            ie.setVerticesData(Ke.h.UV2Kind, ye, !1)
          }
          if (He.uvs3AttrDesc && He.uvs3AttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.uvs3AttrDesc.offset, He.uvs3AttrDesc.count);
            if (Te.c)
              for (let ee = 1; ee < ye.length; ee += 2) ye[ee] = 1 - ye[ee];
            ie.setVerticesData(Ke.h.UV3Kind, ye, !1)
          }
          if (He.uvs4AttrDesc && He.uvs4AttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.uvs4AttrDesc.offset, He.uvs4AttrDesc.count);
            if (Te.c)
              for (let ee = 1; ee < ye.length; ee += 2) ye[ee] = 1 - ye[ee];
            ie.setVerticesData(Ke.h.UV4Kind, ye, !1)
          }
          if (He.uvs5AttrDesc && He.uvs5AttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.uvs5AttrDesc.offset, He.uvs5AttrDesc.count);
            if (Te.c)
              for (let ee = 1; ee < ye.length; ee += 2) ye[ee] = 1 - ye[ee];
            ie.setVerticesData(Ke.h.UV5Kind, ye, !1)
          }
          if (He.uvs6AttrDesc && He.uvs6AttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.uvs6AttrDesc.offset, He.uvs6AttrDesc.count);
            if (Te.c)
              for (let ee = 1; ee < ye.length; ee += 2) ye[ee] = 1 - ye[ee];
            ie.setVerticesData(Ke.h.UV6Kind, ye, !1)
          }
          if (He.colorsAttrDesc && He.colorsAttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.colorsAttrDesc.offset, He.colorsAttrDesc.count);
            ie.setVerticesData(Ke.h.ColorKind, ye, !1, He.colorsAttrDesc.stride)
          }
          if (He.matricesIndicesAttrDesc && He.matricesIndicesAttrDesc.count > 0) {
            const ye = new Int32Array(ee, He.matricesIndicesAttrDesc.offset, He.matricesIndicesAttrDesc.count),
              be = [];
            for (let ee = 0; ee < ye.length; ee++) {
              const ie = ye[ee];
              be.push(255 & ie), be.push((65280 & ie) >> 8), be.push((16711680 & ie) >> 16), be.push(ie >> 24 & 255)
            }
            ie.setVerticesData(Ke.h.MatricesIndicesKind, be, !1)
          }
          if (He.matricesIndicesExtraAttrDesc && He.matricesIndicesExtraAttrDesc.count > 0) {
            const ye = new Int32Array(ee, He.matricesIndicesExtraAttrDesc.offset, He.matricesIndicesExtraAttrDesc.count),
              be = [];
            for (let ee = 0; ee < ye.length; ee++) {
              const ie = ye[ee];
              be.push(255 & ie), be.push((65280 & ie) >> 8), be.push((16711680 & ie) >> 16), be.push(ie >> 24 & 255)
            }
            ie.setVerticesData(Ke.h.MatricesIndicesExtraKind, be, !1)
          }
          if (He.matricesWeightsAttrDesc && He.matricesWeightsAttrDesc.count > 0) {
            const ye = new Float32Array(ee, He.matricesWeightsAttrDesc.offset, He.matricesWeightsAttrDesc.count);
            ie.setVerticesData(Ke.h.MatricesWeightsKind, ye, !1)
          }
          if (He.indicesAttrDesc && He.indicesAttrDesc.count > 0) {
            const ye = new Int32Array(ee, He.indicesAttrDesc.offset, He.indicesAttrDesc.count);
            ie.setIndices(ye, null)
          }
          if (He.subMeshesAttrDesc && He.subMeshesAttrDesc.count > 0) {
            const ye = new Int32Array(ee, He.subMeshesAttrDesc.offset, 5 * He.subMeshesAttrDesc.count);
            ie.pW = [];
            for (let ee = 0; ee < He.subMeshesAttrDesc.count; ee++) {
              const He = ye[5 * ee + 0],
                be = ye[5 * ee + 1],
                Me = ye[5 * ee + 2],
                Ke = ye[5 * ee + 3],
                Fe = ye[5 * ee + 4];
              Ue.b.AddToMesh(He, be, Me, Ke, Fe, ie)
            }
          }
        } else if (ee.positions && ee.normals && ee.indices) {
          if (ie.setVerticesData(Ke.h.PositionKind, ee.positions, ee.positions._updatable || ee.positionsUpdatable), ie.setVerticesData(Ke.h.NormalKind, ee.normals, ee.normals._updatable || ee.normalsUpdatable), ee.tangents && ie.setVerticesData(Ke.h.TangentKind, ee.tangents, ee.tangents._updatable || ee.tangentsUpdatable), ee.uvs && ie.setVerticesData(Ke.h.UVKind, ee.uvs, ee.uvs._updatable || ee.uvsUpdatable), ee.uvs2 && ie.setVerticesData(Ke.h.UV2Kind, ee.uvs2, ee.uvs2._updatable || ee.uvs2Updatable), ee.uvs3 && ie.setVerticesData(Ke.h.UV3Kind, ee.uvs3, ee.uvs3._updatable || ee.uvs3Updatable), ee.uvs4 && ie.setVerticesData(Ke.h.UV4Kind, ee.uvs4, ee.uvs4._updatable || ee.uvs4Updatable), ee.uvs5 && ie.setVerticesData(Ke.h.UV5Kind, ee.uvs5, ee.uvs5._updatable || ee.uvs5Updatable), ee.uvs6 && ie.setVerticesData(Ke.h.UV6Kind, ee.uvs6, ee.uvs6._updatable || ee.uvs6Updatable), ee.colors && ie.setVerticesData(Ke.h.ColorKind, be.g.CheckColors4(ee.colors, ee.positions.length / 3), ee.colors._updatable), ee.matricesIndices)
            if (ee.matricesIndices._isExpanded || ee.matricesIndicesExpanded) delete ee.matricesIndices._isExpanded, delete ee.matricesIndicesExpanded, ie.setVerticesData(Ke.h.MatricesIndicesKind, ee.matricesIndices, ee.matricesIndices._updatable || ee.matricesIndicesUpdatable);
            else {
              const He = [];
              for (let ie = 0; ie < ee.matricesIndices.length; ie++) {
                const ye = ee.matricesIndices[ie];
                He.push(255 & ye), He.push((65280 & ye) >> 8), He.push((16711680 & ye) >> 16), He.push(ye >> 24 & 255)
              }
              ie.setVerticesData(Ke.h.MatricesIndicesKind, He, ee.matricesIndices._updatable || ee.matricesIndicesUpdatable)
            } if (ee.matricesIndicesExtra)
            if (ee.matricesIndicesExtraExpanded || ee.matricesIndicesExtra._isExpanded) delete ee.matricesIndices._isExpanded, delete ee.matricesIndicesExtraExpanded, ie.setVerticesData(Ke.h.MatricesIndicesExtraKind, ee.matricesIndicesExtra, ee.matricesIndicesExtra._updatable || ee.matricesIndicesExtraUpdatable);
            else {
              const He = [];
              for (let ie = 0; ie < ee.matricesIndicesExtra.length; ie++) {
                const ye = ee.matricesIndicesExtra[ie];
                He.push(255 & ye), He.push((65280 & ye) >> 8), He.push((16711680 & ye) >> 16), He.push(ye >> 24 & 255)
              }
              ie.setVerticesData(Ke.h.MatricesIndicesExtraKind, He, ee.matricesIndicesExtra._updatable || ee.matricesIndicesExtraUpdatable)
            } ee.matricesWeights && (Xe._CleanMatricesWeights(ee, ie), ie.setVerticesData(Ke.h.MatricesWeightsKind, ee.matricesWeights, ee.matricesWeights._updatable)), ee.matricesWeightsExtra && ie.setVerticesData(Ke.h.MatricesWeightsExtraKind, ee.matricesWeightsExtra, ee.matricesWeights._updatable), ie.setIndices(ee.indices, null)
        }
        if (ee.pW) {
          ie.pW = [];
          for (let He = 0; He < ee.pW.length; He++) {
            const ye = ee.pW[He];
            Ue.b.AddToMesh(ye.materialIndex, ye.verticesStart, ye.verticesCount, ye.indexStart, ye.indexCount, ie)
          }
        }
        ie._shouldGenerateFlatShading && (ie.convertToFlatShadedMesh(), ie._shouldGenerateFlatShading = !1), ie.computeWorldMatrix(!0), He.onMeshImportedObservable.notifyObservers(ie)
      }
      static _CleanMatricesWeights(ee, ie) {
        const He = .001;
        if (!Fe.e.CleanBoneMatrixWeights) return;
        let ye;
        if (!(ee.skeletonId > -1)) return;
        {
          const He = ie.Xx().getLastSkeletonById(ee.skeletonId);
          if (!He) return;
          ye = He.bones.length
        }
        const be = ie.getVerticesData(Ke.h.MatricesIndicesKind),
          Me = ie.getVerticesData(Ke.h.MatricesIndicesExtraKind),
          Ue = ee.matricesWeights,
          Je = ee.matricesWeightsExtra,
          oe = ee.numBoneInfluencer,
          Re = Ue.length;
        for (let Ke = 0; Ke < Re; Ke += 4) {
          let ee = 0,
            ie = -1;
          for (let ye = 0; ye < 4; ye++) {
            const be = Ue[Ke + ye];
            ee += be, be < He && ie < 0 && (ie = ye)
          }
          if (Je)
            for (let ye = 0; ye < 4; ye++) {
              const be = Je[Ke + ye];
              ee += be, be < He && ie < 0 && (ie = ye + 4)
            }
          if ((ie < 0 || ie > oe - 1) && (ie = oe - 1), ee > He) {
            const ie = 1 / ee;
            for (let ee = 0; ee < 4; ee++) Ue[Ke + ee] *= ie;
            if (Je)
              for (let ee = 0; ee < 4; ee++) Je[Ke + ee] *= ie
          } else ie >= 4 ? (Je[Ke + ie - 4] = 1 - ee, Me[Ke + ie - 4] = ye) : (Ue[Ke + ie] = 1 - ee, be[Ke + ie] = ye)
        }
        ie.setVerticesData(Ke.h.MatricesIndicesKind, be), ee.matricesWeightsExtra && ie.setVerticesData(Ke.h.MatricesIndicesExtraKind, Me)
      }
      static Parse(ee, ie, He) {
        const be = new Xe(ee.id, ie, void 0, ee.updatable);
        return be._loadedUniqueId = ee.uniqueId, ke.b && ke.b.AddTagsTo(be, ee.tags), ee.delayLoadingFile ? (be.delayLoadState = 4, be.delayLoadingFile = He + ee.delayLoadingFile, be._boundingInfo = new Je.c(ye.p.FromArray(ee.boundingBoxMinimum), ye.p.FromArray(ee.boundingBoxMaximum)), be._delayInfo = [], ee.hasUVs && be._delayInfo.push(Ke.h.UVKind), ee.hasUVs2 && be._delayInfo.push(Ke.h.UV2Kind), ee.hasUVs3 && be._delayInfo.push(Ke.h.UV3Kind), ee.hasUVs4 && be._delayInfo.push(Ke.h.UV4Kind), ee.hasUVs5 && be._delayInfo.push(Ke.h.UV5Kind), ee.hasUVs6 && be._delayInfo.push(Ke.h.UV6Kind), ee.hasColors && be._delayInfo.push(Ke.h.ColorKind), ee.hasMatricesIndices && be._delayInfo.push(Ke.h.MatricesIndicesKind), ee.hasMatricesWeights && be._delayInfo.push(Ke.h.MatricesWeightsKind), be._delayLoadingFunction = Me.e.ImportVertexData) : Me.e.ImportVertexData(ee, be), ie.pushGeometry(be, !0), be
      }
    }
  },
  41581: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      d: () => fe
    });
    var ye = He(37917),
      be = He(39467),
      Me = He(41556),
      Ke = He(41524),
      Ue = He(39463),
      Fe = He(41559),
      Je = He(41247),
      oe = He(37949);
    class Re extends Me.b {
      constructor(ee, ie) {
        super(ee, ie.Xx()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, ie.Uie(this), this._sourceMesh = ie, this._unIndexed = ie._unIndexed, this.position.jD(ie.position), this.rotation.jD(ie.rotation), this.wR.jD(ie.wR), ie.rotationQuaternion && (this.rotationQuaternion = ie.rotationQuaternion.clone()), this.animations = ie.animations.slice();
        for (const He of ie.getAnimationRanges()) null != He && this.createAnimationRange(He.name, He.from, He.to);
        if (this.infiniteDistance = ie.infiniteDistance, this.setPivotMatrix(ie.getPivotMatrix()), ie.skeleton || ie.morphTargetManager || !ie.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const ee = ie.WC();
          this.buildBoundingInfo(ee.minimum, ee.maximum)
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
      set receiveShadows(ee) {
        this._sourceMesh?.receiveShadows !== ee && be.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(ee) {
        this._sourceMesh?.material !== ee && be.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(ee) {
        this._sourceMesh?.visibility !== ee && be.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(ee) {
        this._sourceMesh?.skeleton !== ee && be.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(ee) {
        this._sourceMesh && ee !== this._sourceMesh.renderingGroupId && be.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(ee) {
        this._sourceMesh && ee !== this._sourceMesh.meshBlendingTag && be.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get jMe() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(ee) {
        return this._sourceMesh.createInstance(ee)
      }
      isReady() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(ee, !0)
      }
      getVerticesData(ee, ie, He) {
        return this._sourceMesh.getVerticesData(ee, ie, He)
      }
      copyVerticesData(ee, ie) {
        this._sourceMesh.copyVerticesData(ee, ie)
      }
      getVertexBuffer(ee, ie) {
        return this._sourceMesh.getVertexBuffer(ee, ie)
      }
      setVerticesData(ee, ie, He, ye) {
        return this.jMe && this.jMe.setVerticesData(ee, ie, He, ye), this.jMe
      }
      updateVerticesData(ee, ie, He, ye) {
        return this.jMe && this.jMe.updateVerticesData(ee, ie, He, ye), this.jMe
      }
      setIndices(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.jMe && this.jMe.setIndices(ee, ie), this.jMe
      }
      isVerticesDataPresent(ee) {
        return this._sourceMesh.isVerticesDataPresent(ee)
      }
      eMe() {
        return this._sourceMesh.eMe()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let ee, ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          He = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.WC().isLocked) return this;
        ee = "object" === typeof ie ? ie : {
          applySkeleton: ie,
          applyMorph: He
        };
        const ye = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(ee, null, Je.h.PositionKind), ye), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(ee, ie) {
        if (super._activate(ee, ie), this._sourceMesh.pW || be.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, ee), ie) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Fe.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new ye.b);
          const ee = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, ye.j.rf[7].jD(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.jD(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.jD(ye.j.rf[7]), this._currentLOD._masterMesh = ee, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get Zx() {
        return !0
      }
      getLOD(ee) {
        if (!ee) return this;
        const ie = this.jMe.getLODLevels();
        if (ie && 0 !== ie.length) {
          const ie = this.WC();
          this._currentLOD = this.jMe.getLOD(ee, ie.OMe)
        } else this._currentLOD = this.jMe;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(ee) {
        return this.jMe._preActivateForIntermediateRendering(ee)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.pW)
          for (let ee = 0; ee < this._sourceMesh.pW.length; ee++) this._sourceMesh.pW[ee].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.WC().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(ee);
        if (Ue.b.DeepCopy(this, ye, ["name", "pW", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "jMe", "Zx", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "nMe", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "AFe", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), ie && (ye.parent = ie), !He)
          for (let be = 0; be < this.Xx().meshes.length; be++) {
            const ee = this.Xx().meshes[be];
            ee.parent === this && ee.clone(ee.name, ye)
          }
        return ye.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(ye), ye
      }
      dispose(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Jie(this), super.dispose(ee, ie)
      }
      _serializeAsParent(ee) {
        super._serializeAsParent(ee), ee.parentId = this._sourceMesh.uniqueId, ee.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = this.clone("Clone of " + (this.name || this.id), ee || this.parent, !0, ie && ie.newSourcedMesh);
        ye && He && He(this, ye);
        for (const be of this.getChildTransformNodes(!0)) be.instantiateHierarchy(ye, ie, He);
        return ye
      }
    }
    let ke = !1;

    function qe(ee, ie, He, ye, be) {
      for (let Me = 0; Me < ie.length; Me++) {
        const Ke = ee[ie[Me]] ?? 0,
          Ue = be + He[Me];
        Ke.toArray ? Ke.toArray(ye, Ue) : Ke.copyToArray ? Ke.copyToArray(ye, Ue) : ye[Ue] = Ke
      }
    }

    function fe() {
      ke || (ke = !0, Ke.b._instancedMeshFactory = (ee, ie) => {
        const He = new Re(ee, ie);
        if (ie.pC) {
          He.pC = {};
          for (const ee in ie.pC) He.pC[ee] = ie.pC[ee]
        }
        return He
      }, Ke.b.prototype.fC = function(ee, ie) {
        if (!this.pC) {
          this.pC = {};
          for (const ee of this.instances) ee.pC = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Nf().getCaps().vertexArrayObject ? {} : void 0
        }), this.pC[ee] = null, this._userInstancedBuffersStorage.strides[ee] = ie;
        const He = this._userInstancedBuffersStorage;
        He.interleavedKinds = [], He.interleavedOffsets = [], He.interleavedRowStride = 0;
        for (const ye in He.strides) He.interleavedKinds.push(ye), He.interleavedOffsets.push(He.interleavedRowStride), He.interleavedRowStride += He.strides[ye];
        He.interleavedData = new Float32Array(32 * He.interleavedRowStride);
        for (const ye in He.interleavedBuffers) He.interleavedBuffers[ye].buffer.dispose();
        He.interleavedBuffers = {}, He.vertexBuffers[ee] = null;
        for (const ye of this.instances) ye.pC[ee] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Ke.b.prototype._processInstancedBuffers = function(ee, ie) {
        const He = this._userInstancedBuffersStorage,
          ye = He.interleavedRowStride;
        if (!ye) return;
        const be = ee ? ee.length : 0,
          Me = (be + 1) * ye;
        let Ke = He.interleavedData;
        if (Ke.length < Me) {
          let ee = Ke.length;
          for (; ee < Me;) ee *= 2;
          Ke = He.interleavedData = new Float32Array(ee)
        }
        const Ue = He.interleavedKinds,
          Fe = He.interleavedOffsets;
        let oe = 0;
        ie && (qe(this.pC, Ue, Fe, Ke, oe), oe += ye);
        for (let Je = 0; Je < be; Je++) qe(ee[Je].pC, Ue, Fe, Ke, oe), oe += ye;
        let Re = "shared",
          ke = He.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Re = this._instanceDataStorage.engine.currentRenderPassId, He.renderPasses || (He.renderPasses = {}), He.renderPasses[Re] || (He.renderPasses[Re] = {}), ke = He.renderPasses[Re]);
        const fe = He.interleavedBuffers[Re];
        let Te = !fe || fe.data !== Ke;
        for (let Je = 0; !Te && Je < Ue.length; Je++) Te = !ke[Ue[Je]];
        if (!Te) return void fe.buffer.updateDirectly(Ke, 0);
        fe?.buffer.dispose();
        const pe = new Je.b(this.Nf(), Ke, !0, ye, !1, !0);
        for (let Je = 0; Je < Ue.length; Je++) {
          const ee = Ue[Je],
            ie = pe.createVertexBuffer(ee, Fe[Je], He.strides[ee]);
          ie.hashCode += ie.byteOffset * 2 ** 24, ke[ee] = ie
        }
        He.interleavedBuffers[Re] = {
          buffer: pe,
          data: Ke
        }, this._invalidateInstanceVertexArrayObject()
      }, Ke.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const ee in this._userInstancedBuffersStorage.vertexArrayObjects) this.Nf().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[ee]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Ke.b.prototype._disposeInstanceSpecificData = function() {
        for (const ie in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[ie].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const ie in this.pC) this._userInstancedBuffersStorage.vertexBuffers[ie] && this._userInstancedBuffersStorage.vertexBuffers[ie].dispose();
        const ee = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (ee) {
          for (const ie in ee) ee[ie].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.pC = {}
      }, (0, oe.e)("BABYLON.InstancedMesh", Re))
    }
  },
  41524: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ge,
      c: () => Qe,
      f: () => Se
    });
    var ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe = He(37931),
      ze = He(41203),
      Be = He(41159),
      Ee = He(39463),
      ge = He(41144),
      Oe = He(41532),
      de = He(41320),
      We = He(37917),
      te = He(38022),
      Ze = He(41323),
      we = He(41247),
      De = He(41535),
      Pe = He(41540),
      Ae = He(41556),
      Ye = He(41421),
      Ve = He(41414),
      ae = He(41499),
      ce = He(41568),
      xe = He(41542),
      Le = He(41141),
      Ce = He(39467),
      ve = He(37949),
      ue = He(40985),
      me = He(41279);
    class le {
      constructor(ee, ie) {
        this.distanceOrScreenCoverage = ee, this.mesh = ie
      }
    }
    class Se {}
    class ne {
      constructor() {
        this.batchCache = new se(this), this.batchCacheReplacementModeInFrozenMode = new se(this), this.instancesBufferSize = 2048
      }
    }
    class je {
      constructor() {
        this.renderPasses = {}
      }
    }
    class se {
      constructor(ee) {
        this.parent = ee, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Ie {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class he {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Ne = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Ge extends Ae.b {
      static _GetDefaultSideOrientation(ee) {
        return ee || Ge.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(ee) {
        this._internalMeshDataInfo._useLODScreenCoverage = ee, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(ee) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== ee && (ee && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(we.h.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(we.h.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = ee, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Xe.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Xe.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Xe.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Xe.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Xe.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(ee) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(ee)
      }
      get nMe() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(ee) {
        this._internalMeshDataInfo._forcedInstanceCount = ee
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(ee) {
        this._internalMeshDataInfo._sideOrientation = ee, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === ee || !this._scene.useRightHandedSystem && 0 === ee
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(ee) {
        this.sideOrientation = ee, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(ee) {
        this._internalMeshDataInfo._overrideRenderingFillMode = ee
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(ee) {
        ee && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (ee.sideOrientation = null), this._setMaterial(ee)
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
      set isUnIndexed(ee) {
        this._unIndexed !== ee && (this._unIndexed = ee, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const ee = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return ee ? ee.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const ee = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return ee ? ee.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(ee) {
        this._instanceDataStorage.manualUpdate = ee
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(ee) {
        this._instanceDataStorage.previousManualUpdate = ee
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(ee) {
        this._instanceDataStorage.forceMatrixUpdates = ee
      }
      _copySource(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const be = this.Xx();
        if (ee._geometry && ee._geometry.applyToMesh(this), Ee.b.DeepCopy(ee, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "nMe", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "Zx", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "AFe", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = ee, be.useClonedMeshMap && (ee._internalMeshDataInfo.meshMap || (ee._internalMeshDataInfo.meshMap = {}), ee._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = ee._originalBuilderSideOrientation, this._creationDataStorage = ee._creationDataStorage, ee._ranges) {
          const ie = ee._ranges;
          for (const ee in ie) Object.prototype.hasOwnProperty.call(ie, ee) && ie[ee] && this.createAnimationRange(ee, ie[ee].from, ie[ee].to)
        }
        if (ee.metadata && ee.metadata.clone ? this.metadata = ee.metadata.clone() : this.metadata = ee.metadata, this._internalMetadata = ee._internalMetadata, this.meshBlendingTag = ee.meshBlendingTag, ge.b && ge.b.HasTags(ee) && ge.b.AddTagsTo(this, ge.b.GetTags(ee, !0)), this.JY(ee.isEnabled(!1)), this.parent = ee.parent, this.setPivotMatrix(ee.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + ee.id, this.material = ee.material, !ie) {
          const be = ee.getDescendants(!0);
          for (let ee = 0; ee < be.length; ee++) {
            const Me = be[ee];
            Me._isMesh ? (Ne.parent = this, Ne.doNotCloneChildren = ie, Ne.clonePhysicsImpostor = He, Ne.cloneThinInstances = ye, Me.clone(this.name + "." + Me.name, Ne)) : Me.clone && Me.clone(this.name + "." + Me.name, this)
          }
        }
        if (ee.morphTargetManager && (this.morphTargetManager = ee.morphTargetManager), (0, ue.c)(be.getPhysicsEngine)) {
          const ie = be.getPhysicsEngine();
          if (He && ie)
            if (1 === ie.getPluginVersion()) {
              const He = ie.getImpostorForPhysicsObject(ee);
              He && (this.physicsImpostor = He.clone(this))
            } else 2 === ie.getPluginVersion() && ee.physicsBody && ee.physicsBody.clone(this)
        }
        for (let Me = 0; Me < be.zW.length; Me++) {
          const ie = be.zW[Me];
          ie.emitter === ee && ie.clone(ie.name, this)
        }
        if (this.skeleton = ee.skeleton, ye && (ee._thinInstanceDataStorage.matrixData ? (this.Bie("matrix", new Float32Array(ee._thinInstanceDataStorage.matrixData), 16, !ee._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = ee._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = ee._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = ee._thinInstanceDataStorage.matrixBufferSize, ee._userThinInstanceBuffersStorage)) {
          const ie = ee._userThinInstanceBuffersStorage;
          for (const ee in ie.data) this.Bie(ee, new Float32Array(ie.data[ee]), ie.strides[ee], !ie.vertexBuffers?.[ee]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[ee] = ie.sizes[ee]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(ee) {
        let ie, He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Me = arguments.length > 4 ? arguments[4] : void 0,
          Ke = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(ee, He), this._internalMeshDataInfo = new he, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Ie, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Ge.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, He = this.Xx(), this._instanceDataStorage = new je, this._instanceDataStorage.engine = He.Nf(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new ne), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (ee, ie, He) => {
          ee && He && (this._uniformBuffer ? this.transferToEffect(ie) : He.bindOnlyWorldMatrix(ie))
        };
        let Ue = !1;
        if (ye && void 0 === ye._addToSceneRootNodes) {
          const ee = ye;
          ie = ee.parent ?? null, be = ee.source ?? null, Me = ee.doNotCloneChildren ?? !1, Ke = ee.clonePhysicsImpostor ?? !0, Ue = ee.cloneThinInstances ?? !1
        } else ie = ye;
        be && this._copySource(be, Me, Ke, Ue), null !== ie && (this.parent = ie), this._instanceDataStorage.hardwareInstancedRendering = this.Nf().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = ee => {
          ee.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Xe.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), be && be.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = 0 === this.getTotalVertices() || ie && ie.doNotInstantiate && (!0 === ie.doNotInstantiate || ie.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), ee || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        ye.parent = ee || this.parent, ye.position = this.position.clone(), ye.wR = this.wR.clone(), this.rotationQuaternion ? ye.rotationQuaternion = this.rotationQuaternion.clone() : ye.rotation = this.rotation.clone(), He && He(this, ye);
        for (const be of this.getChildTransformNodes(!0)) "InstancedMesh" === be.getClassName() && "Mesh" === ye.getClassName() && be.jMe === this ? be.instantiateHierarchy(ye, {
          doNotInstantiate: ie && ie.doNotInstantiate || !1,
          newSourcedMesh: ye
        }, He) : be.instantiateHierarchy(ye, ie, He);
        return ye
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(ee) {
        let ie = super.toString(ee);
        if (ie += ", n vertices: " + this.getTotalVertices(), ie += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let He = 0; He < this.animations.length; He++) ie += ", animation[0]: " + this.animations[He].toString(ee);
        if (ee)
          if (this._geometry) {
            const ee = this.eMe(),
              He = this.getVerticesData(we.h.PositionKind);
            He && ee && (ie += ", flat shading: " + (He.length / 3 === ee.length ? "YES" : "NO"))
          } else ie += ", flat shading: UNKNOWN";
        return ie
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const ee of this.instances) ee._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const ee = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((ie, He) => ie.distanceOrScreenCoverage < He.distanceOrScreenCoverage ? ee : ie.distanceOrScreenCoverage > He.distanceOrScreenCoverage ? -ee : 0))
      }
      addLODLevel(ee, ie) {
        if (ie && ie._masterMesh) return Ce.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const He = new le(ee, ie);
        return this._internalMeshDataInfo._LODLevels.push(He), ie && (ie._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(ee) {
        const ie = this._internalMeshDataInfo;
        for (let He = 0; He < ie._LODLevels.length; He++) {
          const ye = ie._LODLevels[He];
          if (ye.distanceOrScreenCoverage === ee) return ye.mesh
        }
        return null
      }
      removeLODLevel(ee) {
        const ie = this._internalMeshDataInfo;
        for (let He = 0; He < ie._LODLevels.length; He++) ie._LODLevels[He].mesh === ee && (ie._LODLevels.splice(He, 1), ee && (ee._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(ee, ie) {
        const He = this._internalMeshDataInfo;
        if (!He._LODLevels || 0 === He._LODLevels.length) return this;
        const ye = ie || this.WC().OMe,
          be = ee.mode === de.d.ORTHOGRAPHIC_CAMERA ? ee.minZ : ye.centerWorld.subtract(ee.globalPosition).length();
        let Me = be,
          Ke = 1;
        if (He._useLODScreenCoverage) {
          const ie = ee.screenArea;
          let He = ye.radiusWorld * ee.minZ / be;
          He = He * He * Math.PI, Me = He / ie, Ke = -1
        }
        if (Ke * He._LODLevels[He._LODLevels.length - 1].distanceOrScreenCoverage > Ke * Me) return this.onLODLevelSelection && this.onLODLevelSelection(Me, this, this), this;
        for (let Ue = 0; Ue < He._LODLevels.length; Ue++) {
          const ee = He._LODLevels[Ue];
          if (Ke * ee.distanceOrScreenCoverage < Ke * Me) {
            if (ee.mesh) {
              if (4 === ee.mesh.delayLoadState) return ee.mesh._checkDelayState(), this;
              if (2 === ee.mesh.delayLoadState) return this;
              ee.mesh._preActivate(), ee.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Me, this, ee.mesh), ee.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Me, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(ee, ie, He, ye) {
        if (!this._geometry) return null;
        let be = ye ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[ee]?.getFloatData(this.instances.length + 1, He || ie && 1 !== this._geometry.meshes.length);
        return be || (be = this._geometry.getVerticesData(ee, ie, He)), be
      }
      copyVerticesData(ee, ie) {
        this._geometry && this._geometry.copyVerticesData(ee, ie)
      }
      getVertexBuffer(ee, ie) {
        return this._geometry ? (ie ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[ee]) ?? this._geometry.getVertexBuffer(ee) : null
      }
      isVerticesDataPresent(ee, ie) {
        return this._geometry ? !ie && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[ee] || this._geometry.isVerticesDataPresent(ee) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(ee)
      }
      isVertexBufferUpdatable(ee, ie) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(ee);
        if (!ie) {
          const ie = this._userInstancedBuffersStorage?.vertexBuffers[ee];
          if (ie) return ie.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(ee)
      }
      getVerticesDataKinds(ee) {
        if (!this._geometry) {
          const ee = [];
          if (this._delayInfo)
            for (const ie of this._delayInfo) ee.push(ie);
          return ee
        }
        const ie = this._geometry.getVerticesDataKinds();
        if (!ee && this._userInstancedBuffersStorage)
          for (const He in this._userInstancedBuffersStorage.vertexBuffers) - 1 === ie.indexOf(He) && ie.push(He);
        return ie
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      eMe(ee, ie) {
        return this._geometry ? this._geometry.eMe(ee, ie) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(ee)) return !1;
        if (!this.pW || 0 === this.pW.length) return !0;
        if (!ee) return !0;
        const He = this.Nf(),
          ye = this.Xx(),
          be = ie || He.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Me = this.material || ye.defaultMaterial;
        if (Me)
          if (Me._storeEffectOnSubMeshes)
            for (const Ue of this.pW) {
              const ee = Ue.iT();
              if (ee)
                if (ee._storeEffectOnSubMeshes) {
                  if (!ee.isReadyForSubMesh(this, Ue, be)) return !1
                } else if (!ee.isReady(this, be)) return !1
            } else if (!Me.isReady(this, be)) return !1;
        const Ke = He.currentRenderPassId;
        for (const Ue of this.lightSources) {
          const ee = Ue.getShadowGenerators();
          if (!ee) continue;
          const ie = ee.values();
          for (let ye = ie.next(); !0 !== ye.done; ye = ie.next()) {
            const ee = ye.value;
            if (ee && (!ee.getShadowMap()?.renderList || ee.getShadowMap()?.renderList && -1 !== ee.getShadowMap()?.renderList?.indexOf(this))) {
              const ie = ee.getShadowMap().renderPassIds ?? [He.currentRenderPassId];
              for (let ye = 0; ye < ie.length; ++ye) {
                He.currentRenderPassId = ie[ye];
                for (const ie of this.pW)
                  if (!ee.isReady(ie, be, ie.iT()?.needAlphaBlendingForMesh(this) ?? !1)) return He.currentRenderPassId = Ke, !1
              }
              He.currentRenderPassId = Ke
            }
          }
        }
        for (const Ue of this._internalMeshDataInfo._LODLevels)
          if (Ue.mesh && !Ue.mesh.isReady(be)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      HT() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(ee) {
        this._instanceDataStorage.overridenInstanceCount = ee
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const ee = this._instanceDataStorage.engine.currentRenderPassId;
        let ie = this._instanceDataStorage.renderPasses[ee];
        return ie || (ie = new ne, this._instanceDataStorage.renderPasses[ee] = ie), ie
      }
      _preActivate() {
        const ee = this._internalMeshDataInfo,
          ie = this.Xx().getRenderId();
        return ee._preActivateId === ie || (ee._preActivateId = ie, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(ee) {
        const ie = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ie.visibleInstances && (ie.visibleInstances.intermediateDefaultRenderId = ee), this
      }
      _registerInstanceForRenderId(ee, ie) {
        const He = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return He.visibleInstances || (He.visibleInstances = {
          defaultRenderId: ie,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), He.visibleInstances[ie] || (void 0 === He.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete He.visibleInstances[He.previousRenderId], He.previousRenderId = ie, He.visibleInstances[ie] = new Array), He.visibleInstances[ie].push(ee), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.eT || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let ee, ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          He = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.WC().isLocked) return this;
        ee = "object" === typeof ie ? ie : {
          applySkeleton: ie,
          applyMorph: He
        };
        const ye = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(ee, null, we.h.PositionKind), ye), this
      }
      _createGlobalSubMesh(ee) {
        const ie = this.getTotalVertices();
        if (!ie || !this.eMe()) return null;
        if (this.pW && this.pW.length > 0) {
          const He = this.eMe();
          if (!He) return null;
          const ye = He.length;
          let be = !1;
          if (ee) be = !0;
          else
            for (const ee of this.pW) {
              if (ee.indexStart + ee.indexCount > ye) {
                be = !0;
                break
              }
              if (ee.verticesStart + ee.verticesCount > ie) {
                be = !0;
                break
              }
            }
          if (!be) return this.pW[0]
        }
        return this.releaseSubMeshes(), new Ye.b(0, 0, ie, 0, this.getTotalIndices() || (this.isUnIndexed ? ie : 0), this)
      }
      subdivide(ee) {
        if (ee < 1) return;
        const ie = this.getTotalIndices();
        let He = ie / ee | 0,
          ye = 0;
        for (; He % 3 !== 0;) He++;
        this.releaseSubMeshes();
        for (let be = 0; be < ee && !(ye >= ie); be++) Ye.b.CreateFromIndices(0, ye, ye + He >= ie ? ie - ye : He, this, void 0, !1), ye += He;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(ee, ie, He, ye);
        else {
          const ye = new De.e;
          ye.set(ie, ee);
          const be = this.Xx();
          new Pe.b(Pe.b.RandomId(), be, ye, He, this)
        }
        return this
      }
      removeVerticesData(ee) {
        this._geometry && this._geometry.removeVerticesData(ee)
      }
      markVerticesDataAsUpdatable(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const He = this.getVertexBuffer(ee);
        He && He.isUpdatable() !== ie && this.setVerticesData(ee, this.getVerticesData(ee), ie)
      }
      setVerticesBuffer(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Pe.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(ee, He, ie), this
      }
      updateVerticesData(ee, ie, He, ye) {
        return this._geometry ? (ye ? (this.makeGeometryUnique(), this.updateVerticesData(ee, ie, He, !1)) : this._geometry.updateVerticesData(ee, ie, He), this) : this
      }
      updateMeshPositions(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const He = this.getVerticesData(we.h.PositionKind);
        if (!He) return this;
        if (ee(He), this.updateVerticesData(we.h.PositionKind, He, !1, !1), ie) {
          const ee = this.eMe(),
            ie = this.getVerticesData(we.h.NormalKind);
          if (!ie) return this;
          De.e.ComputeNormals(He, ee, ie), this.updateVerticesData(we.h.NormalKind, ie, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const ee = this._geometry,
          ie = this._geometry.copy(Pe.b.RandomId());
        return ee.releaseForMesh(this, !0), ie.applyToMesh(this), this
      }
      setIndexBuffer(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          be = this._geometry;
        be || (be = new Pe.b(Pe.b.RandomId(), this.Xx(), void 0, void 0, this)), be.setIndexBuffer(ee, ie, He, ye)
      }
      setIndices(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(ee, ie, He, ye);
        else {
          const ye = new De.e;
          ye.indices = ee;
          const be = this.Xx();
          new Pe.b(Pe.b.RandomId(), be, ye, He, this, ie)
        }
        return this
      }
      updateIndices(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(ee, ie, He), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(ee, ie, He) {
        let ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const be = this.Xx().Nf();
        let Me;
        if (this._unIndexed)
          if (this._getRenderingFillMode(He) === Ve.e.WireFrameFillMode) Me = ee._getLinesIndexBuffer(this.eMe(), be);
          else Me = null;
        else switch (this._getRenderingFillMode(He)) {
          case Ve.e.PointFillMode:
            Me = null;
            break;
          case Ve.e.WireFrameFillMode:
            Me = ee._getLinesIndexBuffer(this.eMe(), be);
            break;
          default:
          case Ve.e.TriangleFillMode:
            Me = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(ie, Me, ye)
      }
      _bindDirect(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(ee), He && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const ee = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const ie in ee) this._userInstancedBuffersStorage.vertexBuffers[ie] = ee[ie]
          }
          this._geometry._bind(ee, ie, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(ee, ie);
        return this
      }
      _draw(ee, ie, He) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const ye = this.Xx().Nf(),
          be = ye._currentMaterialContext,
          Me = be && be.useVertexPulling;
        return this._unIndexed && ie !== Ve.e.WireFrameFillMode || ie == Ve.e.PointFillMode ? ye.drawArraysType(ie, ee.verticesStart, ee.verticesCount, this.forcedInstanceCount || He) : ie == Ve.e.WireFrameFillMode ? ye.drawElementsType(ie, 0, ee._linesIndexCount, this.forcedInstanceCount || He) : Me ? ye.drawArraysType(ie, ee.indexStart, ee.indexCount, this.forcedInstanceCount || He) : ye.drawElementsType(ie, ee.indexStart, ee.indexCount, this.forcedInstanceCount || He), this
      }
      registerBeforeRender(ee) {
        return this.onBeforeRenderObservable.add(ee), this
      }
      unregisterBeforeRender(ee) {
        return this.onBeforeRenderObservable.removeCallback(ee), this
      }
      registerAfterRender(ee) {
        return this.onAfterRenderObservable.add(ee), this
      }
      unregisterAfterRender(ee) {
        return this.onAfterRenderObservable.removeCallback(ee), this
      }
      _getInstancesRenderList(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (ie) return He.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[ee] = !1, He.batchCacheReplacementModeInFrozenMode.renderSelf[ee] = !0, He.batchCacheReplacementModeInFrozenMode;
          if (He.previousBatch) return He.previousBatch
        }
        const ye = this.Xx(),
          be = ye._isInIntermediateRendering(),
          Me = be ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Ke = He.batchCache;
        if (Ke.mustReturn = !1, Ke.renderSelf[ee] = ie || !Me && this.isEnabled() && this.isVisible, Ke.visibleInstances[ee] = null, He.visibleInstances && !ie) {
          const ie = He.visibleInstances,
            Me = ye.getRenderId(),
            Ue = be ? ie.intermediateDefaultRenderId : ie.defaultRenderId;
          Ke.visibleInstances[ee] = ie[Me], !Ke.visibleInstances[ee] && Ue && (Ke.visibleInstances[ee] = ie[Ue])
        }
        return Ke.hardwareInstancedRendering[ee] = !ie && this._instanceDataStorage.hardwareInstancedRendering && null !== Ke.visibleInstances[ee] && void 0 !== Ke.visibleInstances[ee], He.previousBatch = Ke, Ke
      }
      _updateInstancedBuffers(ee, ie, He, ye, be, Me) {
        const Ke = ie.visibleInstances[ee._id],
          Ue = Ke ? Ke.length : 0,
          Fe = ie.parent,
          Je = this._instanceDataStorage;
        let oe = Fe.instancesBuffer,
          Re = Fe.instancesPreviousBuffer,
          ke = 0,
          qe = 0;
        const fe = ie.renderSelf[ee._id],
          Te = this._scene.floatingOriginOffset,
          pe = !oe || He !== Fe.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Fe.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Je.isFrozen && !pe) qe = (fe ? 1 : 0) + Ue;
        else {
          const ie = this.getWorldMatrix();
          if (fe) {
            this._scene.needsPreviousWorldMatrices && (Je.masterMeshPreviousWorldMatrix ? (Je.masterMeshPreviousWorldMatrix.copyToArray(Fe.instancesPreviousData, ke), Je.masterMeshPreviousWorldMatrix.jD(ie)) : (Je.masterMeshPreviousWorldMatrix = ie.clone(), Je.masterMeshPreviousWorldMatrix.copyToArray(Fe.instancesPreviousData, ke))), ie.copyToArray(Fe.instancesData, ke);
            const ee = ie.Qbe();
            Fe.instancesData[ke + 12] = ee[12] - Te.x, Fe.instancesData[ke + 13] = ee[13] - Te.y, Fe.instancesData[ke + 14] = ee[14] - Te.z, ke += 16, qe++
          }
          if (Ke) {
            if (Ge.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && ee.iT()?.needAlphaBlendingForMesh(ee.getRenderingMesh())) {
              const ee = this._scene.activeCamera.globalPosition;
              for (let ie = 0; ie < Ke.length; ie++) {
                const He = Ke[ie];
                He._distanceToCamera = We.p.Distance(He.WC().OMe.centerWorld, ee)
              }
              Ke.sort(((ee, ie) => ee._distanceToCamera > ie._distanceToCamera ? -1 : ee._distanceToCamera < ie._distanceToCamera ? 1 : 0))
            }
            for (let ee = 0; ee < Ke.length; ee++) {
              const ie = Ke[ee],
                He = ie.getWorldMatrix();
              He.copyToArray(Fe.instancesData, ke), this._scene.needsPreviousWorldMatrices && (ie._previousWorldMatrix ? (ie._previousWorldMatrix.copyToArray(Fe.instancesPreviousData, ke), ie._previousWorldMatrix.jD(He)) : (ie._previousWorldMatrix = He.clone(), ie._previousWorldMatrix.copyToArray(Fe.instancesPreviousData, ke)));
              const ye = He.Qbe();
              Fe.instancesData[ke + 12] = ye[12] - Te.x, Fe.instancesData[ke + 13] = ye[13] - Te.y, Fe.instancesData[ke + 14] = ye[14] - Te.z, ke += 16, qe++
            }
          }
        }
        if (pe) {
          let ee;
          if (oe && oe.dispose(), Re && Re.dispose(), oe = new we.b(ye, Fe.instancesData, !0, 16, !1, !0), Fe.instancesBuffer = oe, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Nf().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) ee = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const ie = this._instanceDataStorage.engine.currentRenderPassId;
            ee = this._userInstancedBuffersStorage.renderPasses[ie], ee || (this._userInstancedBuffersStorage.renderPasses[ie] = ee = {})
          }
          ee.world0 = oe.createVertexBuffer("world0", 0, 4), ee.world1 = oe.createVertexBuffer("world1", 4, 4), ee.world2 = oe.createVertexBuffer("world2", 8, 4), ee.world3 = oe.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Re = new we.b(ye, Fe.instancesPreviousData, !0, 16, !1, !0), Fe.instancesPreviousBuffer = Re, ee.previousWorld0 = Re.createVertexBuffer("previousWorld0", 0, 4), ee.previousWorld1 = Re.createVertexBuffer("previousWorld1", 4, 4), ee.previousWorld2 = Re.createVertexBuffer("previousWorld2", 8, 4), ee.previousWorld3 = Re.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (oe.updateDirectly(Fe.instancesData, 0, qe), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Re.updateDirectly(Fe.instancesPreviousData, 0, qe));
        this._processInstancedBuffers(Ke, fe), Me && void 0 !== be && (this.Xx()._activeIndices.addCount(ee.indexCount * qe, !1), ye._currentDrawContext && (ye._currentDrawContext.useInstancing = !0), this._bind(ee, Me, be), this._draw(ee, be, qe)), !this._scene.needsPreviousWorldMatrices || pe || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Re.updateDirectly(Fe.instancesData, 0, qe)
      }
      _renderWithInstances(ee, ie, He, ye, be) {
        const Me = He.visibleInstances[ee._id],
          Ke = Me ? Me.length : 0,
          Ue = He.parent,
          Fe = Ue.instancesBufferSize,
          Je = 16 * (Ke + 1) * 4;
        for (; Ue.instancesBufferSize < Je;) Ue.instancesBufferSize *= 2;
        return Ue.instancesData && Fe == Ue.instancesBufferSize || (Ue.instancesData = new Float32Array(Ue.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !Ue.instancesPreviousData || Fe != Ue.instancesBufferSize) && (Ue.instancesPreviousData = new Float32Array(Ue.instancesBufferSize / 4)), this._updateInstancedBuffers(ee, He, Fe, be, ie, ye), be.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(ee, ie, He, ye) {
        const be = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.Xx()._activeIndices.addCount(ee.indexCount * be, !1), ye._currentDrawContext && (ye._currentDrawContext.useInstancing = !0), this._bind(ee, He, ie), this._draw(ee, ie, be), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, be) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), ye.unbindInstanceAttributes()
      }
      _processInstancedBuffers(ee, ie) {}
      _processRendering(ee, ie, He, ye, be, Me, Ke, Ue) {
        const Fe = this.Xx(),
          Je = Fe.Nf();
        if (ye = this._getRenderingFillMode(ye), Me && ie.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(ie, ye, He, Je), this;
        if (Me) this._renderWithInstances(ie, ye, be, He, Je);
        else {
          Je._currentDrawContext && (Je._currentDrawContext.useInstancing = !1);
          let He = 0;
          be.renderSelf[ie._id] && (Ke && Ke(!1, ee.getWorldMatrix(), Ue), He++, this._draw(ie, ye, this._instanceDataStorage.overridenInstanceCount));
          const Me = be.visibleInstances[ie._id];
          if (Me) {
            const ee = Me.length;
            He += ee;
            for (let He = 0; He < ee; He++) {
              const ee = Me[He].getWorldMatrix();
              Ke && Ke(!0, ee, Ue), this._draw(ie, ye)
            }
          }
          Fe._activeIndices.addCount(ie.indexCount * He, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        ee?.instancesBuffer && (ie && ee.instancesBuffer.dispose(), ee.instancesBuffer = null), ee?.instancesPreviousBuffer && (ie && ee.instancesPreviousBuffer.dispose(), ee.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ie in this._instanceDataStorage.renderPasses) {
          const He = this._instanceDataStorage.renderPasses[ie];
          this._disposeInstanceDataStorageRenderPass(He, ee)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, ee), this._userInstancedBuffersStorage) {
          for (const ie in this._userInstancedBuffersStorage.vertexBuffers) {
            const He = this._userInstancedBuffersStorage.vertexBuffers[ie];
            He && (ee && He.dispose(), this._userInstancedBuffersStorage.vertexBuffers[ie] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(ee)
      }
      _releaseRenderPassId(ee) {
        const ie = this._instanceDataStorage.renderPasses[ee];
        if (ie && (this._disposeInstanceDataStorageRenderPass(ie, !0), delete this._instanceDataStorage.renderPasses[ee]), this._userInstancedBuffersStorage?.renderPasses) {
          const ie = this._userInstancedBuffersStorage.renderPasses[ee];
          if (ie)
            for (const ee in ie) ie[ee]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[ee]
        }
        const He = this._userInstancedBuffersStorage?.interleavedBuffers;
        He?.[ee] && (He[ee].buffer.dispose(), delete He[ee])
      }
      _freeze() {
        if (this.pW) {
          for (let ee = 0; ee < this.pW.length; ee++) this._getInstancesRenderList(ee);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const ee in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[ee].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(ee, ie, He, ye) {
        let be = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Me = this._scene.Nf(),
          Ke = Me.currentRenderPassId;
        if (void 0 !== ee && (Me.currentRenderPassId = ee), ye)(!be || be && ye.isInFrustum(this._scene._frustumPlanes)) && this.render(ye, !!ie, He);
        else
          for (let Ue = 0; Ue < this.pW.length; Ue++) {
            const ee = this.pW[Ue];
            (!be || be && ee.isInFrustum(this._scene._frustumPlanes)) && this.render(ee, !!ie, He)
          }
        return void 0 !== ee && (Me.currentRenderPassId = Ke), this
      }
      directRender() {
        if (!this.pW) return this;
        for (const ee of this.pW) this.render(ee, !1);
        return this
      }
      render(ee, ie, He) {
        const ye = this.Xx(),
          be = ye.Nf();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Me = ye.activeCameras?.length ?? 0,
          Ke = Me > 1 && ye.activeCamera === ye.activeCameras[0] || Me <= 1,
          Ue = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== be.currentRenderPassId;
        if (Ke && this._checkOcclusionQuery(Ue) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Fe = this._getInstancesRenderList(ee._id, !!He);
        if (Fe.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Je = 0,
          oe = null;
        this.ignoreCameraMaxZ && ye.activeCamera && !ye._isInIntermediateRendering() && (Je = ye.activeCamera.maxZ, oe = ye.activeCamera, ye.activeCamera.maxZ = 0, ye.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Re = ee.getRenderingMesh(),
          ke = Fe.hardwareInstancedRendering[ee._id] || Re.hasThinInstances || !!this._userInstancedBuffersStorage && !ee.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          qe = this._instanceDataStorage,
          fe = ee.iT();
        if (!fe) return oe && (oe.maxZ = Je, ye.updateTransformMatrix(!0)), this;
        if (qe.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === fe) {
          if (fe._storeEffectOnSubMeshes && !ee._drawWrapper?._wasPreviouslyReady || !fe._storeEffectOnSubMeshes && !fe._getDrawWrapper()._wasPreviouslyReady) return oe && (oe.maxZ = Je, ye.updateTransformMatrix(!0)), this
        } else {
          if (fe._storeEffectOnSubMeshes) {
            if (!fe.isReadyForSubMesh(this, ee, ke)) return oe && (oe.maxZ = Je, ye.updateTransformMatrix(!0)), this
          } else if (!fe.isReady(this, ke)) return oe && (oe.maxZ = Je, ye.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = fe
        }
        if (ie) {
          const ee = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === ee.alphaModes.length) be.setAlphaMode(ee.alphaMode);
          else
            for (let ie = 0; ie < ee.alphaModes.length; ie++) {
              const He = ee.alphaModes[ie];
              be.setAlphaMode(void 0 !== He ? He : 2, !1, ie)
            }
        }
        let Te;
        Te = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? ee._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const pe = Te?.effect ?? null;
        for (let de = 0, We = ye._beforeRenderingMeshStage; de < We.length; de++) {
          We[de].action(this, ee, Fe, pe)
        }
        if (!Te || !pe) return oe && (oe.maxZ = Je, ye.updateTransformMatrix(!0)), this;
        const Xe = He || this;
        let ze;
        if (!qe.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const ee = Xe._getWorldMatrixDeterminant();
          ze = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), ee < 0 && (ze = ze === Ve.e.ClockWiseSideOrientation ? Ve.e.CounterClockWiseSideOrientation : Ve.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = ze
        }
        const Be = this._internalMeshDataInfo._effectiveMaterial._preBind(Te, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && be.setDepthWrite(!0);
        const Ee = this._internalMeshDataInfo._effectiveMaterial,
          ge = Ee.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), ke || this._bind(ee, pe, ge, !1);
        const Oe = Xe.getWorldMatrix();
        Ee._storeEffectOnSubMeshes ? Ee.bindForSubMesh(Oe, this, ee) : Ee.bind(Oe, this);
        try {
          ae.b._BindAttachmentsForEffect(be, pe) && (!Ee.backFaceCulling && Ee.separateCullingPass && (be.setState(!0, Ee.zOffset, !1, !Be, Ee.cullBackFaces, Ee.stencil, Ee.zOffsetUnits), this._processRendering(this, ee, pe, ge, Fe, ke, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), be.setState(!0, Ee.zOffset, !1, Be, Ee.cullBackFaces, Ee.stencil, Ee.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(ee)), this._processRendering(this, ee, pe, ge, Fe, ke, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          ae.b._RestoreAttachments(be)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let de = 0, We = ye._afterRenderingMeshStage; de < We.length; de++) {
          We[de].action(this, ee, Fe, pe)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), oe && (oe.maxZ = Je, ye.updateTransformMatrix(!0)), 2 !== ye.performancePriority || qe.isFrozen || this._freeze(), this
      }
      _renderRunFollower(ee, ie) {
        const He = this._scene,
          ye = He._engine;
        if (ye.isWebGPU || ee._mesh !== this || 0 !== this.instances.length || this.render !== Ge.prototype.render) return !1;
        const be = ee.iT();
        if (!be || be !== He._cachedMaterial || void 0 === be._canBindRunFollower) return !1;
        const Me = ee._drawWrapper,
          Ke = Me?.effect;
        if (!Ke || Ke !== He._cachedEffect || this.visibility !== He._cachedVisibility || Me._forceRebindOnNextCall) return !1;
        const Ue = this.hasThinInstances;
        if (!Ue && this._userInstancedBuffersStorage) return !1;
        if (!Me._wasPreviouslyReady || Me._wasPreviouslyUsingInstances !== Ue) return !1;
        const Fe = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || He._isInIntermediateRendering() || 0 !== He._beforeRenderingMeshStage.length || 0 !== He._afterRenderingMeshStage.length || Fe._onBeforeRenderObservable?.hasObservers() || Fe._onBeforeBindObservable?.hasObservers() || Fe._onAfterRenderObservable?.hasObservers()) return !1;
        const Je = this.occlusionType;
        if (void 0 !== Je && Je !== Ae.b.OCCLUSION_TYPE_NONE || !be._canBindRunFollower(He, ye, this, ee, Ke)) return !1;
        const oe = this._internalAbstractMeshDataInfo,
          Re = oe._isActiveIntermediate;
        Re ? oe._isActiveIntermediate = !1 : oe._isActive = !1;
        const ke = He.activeCameras?.length ?? 0;
        (ke > 1 && He.activeCamera === He.activeCameras[0] || ke <= 1) && this._checkOcclusionQuery(!1);
        const qe = this._getInstancesRenderList(ee._id);
        if (qe.mustReturn) return !0;
        if (!Ue && !qe.renderSelf[ee._id]) return Re ? oe._isActiveIntermediate = !0 : oe._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Fe._effectiveMaterial = be, ie)
          if (1 === be.alphaModes.length) ye.setAlphaMode(be.alphaMode);
          else
            for (let Te = 0; Te < be.alphaModes.length; Te++) {
              const ee = be.alphaModes[Te];
              ye.setAlphaMode(void 0 !== ee ? ee : 2, !1, Te)
            }
        if (be.backFaceCulling || null !== be.sideOrientation || be._twoSidedLighting) {
          const ee = this._getWorldMatrixDeterminant();
          let ie = be._getEffectiveOrientation(this);
          ee < 0 && (ie = ie === Ve.e.ClockWiseSideOrientation ? Ve.e.CounterClockWiseSideOrientation : Ve.e.ClockWiseSideOrientation), Fe._effectiveSideOrientation = ie
        }
        be._preBind(Me, Fe._effectiveSideOrientation), be.forceDepthWrite && ye.setDepthWrite(!0);
        const fe = be.fillMode;
        return Ue || this._bind(ee, Ke, fe, !1), be._bindRunFollower(this.getWorldMatrix(), this, ee, Ke), this._processRendering(this, ee, Ke, fe, qe, Ue, this._onBeforeDraw, be), be.unbind(), 2 === He.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(we.h.MatricesWeightsKind) && (this.isVerticesDataPresent(we.h.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const ee = this.getVerticesData(we.h.MatricesWeightsKind),
          ie = ee.length;
        for (let He = 0; He < ie; He += 4) {
          const ie = ee[He] + ee[He + 1] + ee[He + 2] + ee[He + 3];
          if (0 === ie) ee[He] = 1;
          else {
            const ye = 1 / ie;
            ee[He] *= ye, ee[He + 1] *= ye, ee[He + 2] *= ye, ee[He + 3] *= ye
          }
        }
        this.setVerticesData(we.h.MatricesWeightsKind, ee)
      }
      _normalizeSkinWeightsAndExtra() {
        const ee = this.getVerticesData(we.h.MatricesWeightsExtraKind),
          ie = this.getVerticesData(we.h.MatricesWeightsKind),
          He = ie.length;
        for (let ye = 0; ye < He; ye += 4) {
          let He = ie[ye] + ie[ye + 1] + ie[ye + 2] + ie[ye + 3];
          if (He += ee[ye] + ee[ye + 1] + ee[ye + 2] + ee[ye + 3], 0 === He) ie[ye] = 1;
          else {
            const be = 1 / He;
            ie[ye] *= be, ie[ye + 1] *= be, ie[ye + 2] *= be, ie[ye + 3] *= be, ee[ye] *= be, ee[ye + 1] *= be, ee[ye + 2] *= be, ee[ye + 3] *= be
          }
        }
        this.setVerticesData(we.h.MatricesWeightsKind, ie), this.setVerticesData(we.h.MatricesWeightsKind, ee)
      }
      validateSkinning() {
        const ee = this.getVerticesData(we.h.MatricesWeightsExtraKind),
          ie = this.getVerticesData(we.h.MatricesWeightsKind);
        if (null === ie || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          RR: "not skinned"
        };
        const He = ie.length;
        let ye = 0,
          be = 0,
          Me = 0,
          Ke = 0;
        const Ue = null === ee ? 4 : 8,
          Fe = [];
        for (let qe = 0; qe <= Ue; qe++) Fe[qe] = 0;
        for (let qe = 0; qe < He; qe += 4) {
          let He = ie[qe],
            Je = He,
            oe = 0 === Je ? 0 : 1;
          for (let be = 1; be < Ue; be++) {
            const Me = be < 4 ? ie[qe + be] : ee[qe + be - 4];
            Me > He && ye++, 0 !== Me && oe++, Je += Me, He = Me
          }
          if (Fe[oe]++, oe > Me && (Me = oe), 0 === Je) be++;
          else {
            const He = 1 / Je;
            let ye = 0;
            for (let be = 0; be < Ue; be++) ye += be < 4 ? Math.abs(ie[qe + be] - ie[qe + be] * He) : Math.abs(ee[qe + be - 4] - ee[qe + be - 4] * He);
            ye > .001 && Ke++
          }
        }
        const Je = this.skeleton.bones.length,
          oe = this.getVerticesData(we.h.MatricesIndicesKind),
          Re = this.getVerticesData(we.h.MatricesIndicesExtraKind);
        let ke = 0;
        for (let qe = 0; qe < He; qe += 4)
          for (let ee = 0; ee < Ue; ee++) {
            const ie = ee < 4 ? oe[qe + ee] : Re[qe + ee - 4];
            (ie >= Je || ie < 0) && ke++
          }
        return {
          skinned: !0,
          valid: 0 === be && 0 === Ke && 0 === ke,
          RR: "Number of Weights = " + He / 4 + "\nMaximum influences = " + Me + "\nMissing Weights = " + be + "\nNot Sorted = " + ye + "\nNot Normalized = " + Ke + "\nWeightCounts = [" + Fe + "]\nNumber of bones = " + Je + "\nBad Bone Indices = " + ke
        }
      }
      _checkDelayState() {
        const ee = this.Xx();
        return this._geometry ? this._geometry.load(ee) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(ee)), this
      }
      _queueLoad(ee) {
        ee.addPendingData(this);
        const ie = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const He = await ee._loadDelayedFileAsync(this.delayLoadingFile, ie, !0);
            He instanceof ArrayBuffer ? this._delayLoadingFunction(He, this) : this._delayLoadingFunction(JSON.parse(He), this);
            for (const ee of this.instances) ee.refreshBoundingInfo(), ee._syncSubMeshes();
            this.delayLoadState = 1, ee.removePendingData(this)
          } catch (He) {
            ee.removePendingData(this), ee.RZ || Ce.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${He}`)
          }
        })(), this
      }
      isInFrustum(ee) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(ee) && (this._checkDelayState(), !0))
      }
      setMaterialById(ee) {
        const ie = this.Xx().materials;
        let He;
        for (He = ie.length - 1; He > -1; He--)
          if (ie[He].id === ee) return this.material = ie[He], this;
        const ye = this.Xx().multiMaterials;
        for (He = ye.length - 1; He > -1; He--)
          if (ye[He].id === ee) return this.material = ye[He], this;
        return this
      }
      getAnimatables() {
        const ee = [];
        return this.material && ee.push(this.material), this.skeleton && ee.push(this.skeleton), ee
      }
      bakeTransformIntoVertices(ee) {
        if (!this.isVerticesDataPresent(we.h.PositionKind)) return this;
        const ie = this.pW.splice(0);
        this._resetPointsArrayCache();
        let He = this.getVerticesData(we.h.PositionKind);
        const ye = We.p.Zero();
        let be;
        for (be = 0; be < He.length; be += 3) We.p.TransformCoordinatesFromFloatsToRef(He[be], He[be + 1], He[be + 2], ee, ye).toArray(He, be);
        if (this.setVerticesData(we.h.PositionKind, He, this.getVertexBuffer(we.h.PositionKind).isUpdatable()), this.isVerticesDataPresent(we.h.NormalKind)) {
          for (He = this.getVerticesData(we.h.NormalKind), be = 0; be < He.length; be += 3) We.p.TransformNormalFromFloatsToRef(He[be], He[be + 1], He[be + 2], ee, ye).normalize().toArray(He, be);
          this.setVerticesData(we.h.NormalKind, He, this.getVertexBuffer(we.h.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(we.h.TangentKind)) {
          for (He = this.getVerticesData(we.h.TangentKind), be = 0; be < He.length; be += 4) We.p.TransformNormalFromFloatsToRef(He[be], He[be + 1], He[be + 2], ee, ye).normalize().toArray(He, be);
          this.setVerticesData(we.h.TangentKind, He, this.getVertexBuffer(we.h.TangentKind).isUpdatable())
        }
        return ee.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.pW = ie, this
      }
      bakeCurrentTransformIntoVertices() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(ee), this
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
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (ie && void 0 === ie._addToSceneRootNodes) {
          const He = ie;
          return Ne.source = this, Ne.doNotCloneChildren = He.doNotCloneChildren, Ne.clonePhysicsImpostor = He.clonePhysicsImpostor, Ne.cloneThinInstances = He.cloneThinInstances, new Ge(ee, this.Xx(), Ne)
        }
        return new Ge(ee, this.Xx(), ie, this, He, ye)
      }
      dispose(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const He = this._internalMeshDataInfo;
        if (He._onBeforeDrawObservable && He._onBeforeDrawObservable.clear(), He._onBeforeBindObservable && He._onBeforeBindObservable.clear(), He._onBeforeRenderObservable && He._onBeforeRenderObservable.clear(), He._onAfterRenderObservable && He._onAfterRenderObservable.clear(), He._onBetweenPassObservable && He._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (He.meshMap)
            for (const ee in He.meshMap) {
              const ie = He.meshMap[ee];
              ie && (ie._internalMeshDataInfo._source = null, He.meshMap[ee] = void 0)
            }
          He._source && He._source._internalMeshDataInfo.meshMap && (He._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const ee = this.Xx().meshes;
          for (const ie of ee) {
            const ee = ie;
            ee._internalMeshDataInfo && ee._internalMeshDataInfo._source && ee._internalMeshDataInfo._source === this && (ee._internalMeshDataInfo._source = null)
          }
        }
        He._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(ee, ie)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(ee, ie, He, ye, be, Me) {
        let Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Ue = arguments.length > 7 ? arguments[7] : void 0;
        const Fe = this.Xx();
        return (0, Be.r)(ee, (ee => {
          const Ue = ee.width,
            Fe = ee.height,
            Je = this.Nf().createCanvas(Ue, Fe).getContext("2d");
          Je.drawImage(ee, 0, 0);
          const oe = Je.getImageData(0, 0, Ue, Fe).data;
          this.applyDisplacementMapFromBuffer(oe, Ue, Fe, ie, He, be, Me, Ke), ye && ye(this)
        }), Ue || (() => {}), Fe.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(ee, ie, He, ye, be, Me, Ke) {
        let Ue = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(we.h.PositionKind) || !this.isVerticesDataPresent(we.h.NormalKind) || !this.isVerticesDataPresent(we.h.UVKind)) return Ce.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Fe = this.getVerticesData(we.h.PositionKind, !0, !0),
          Je = this.getVerticesData(we.h.NormalKind),
          oe = this.getVerticesData(we.h.UVKind);
        let Re = We.p.Zero();
        const ke = We.p.Zero(),
          qe = We.n.Zero();
        Me = Me || We.n.Zero(), Ke = Ke || new We.n(1, 1);
        for (let fe = 0; fe < Fe.length; fe += 3) {
          We.p.FromArrayToRef(Fe, fe, Re), We.p.FromArrayToRef(Je, fe, ke), We.n.FromArrayToRef(oe, fe / 3 * 2, qe);
          const Ue = 4 * ((Math.abs(qe.x * Ke.x + Me.x % 1) * (ie - 1) % ie | 0) + (Math.abs(qe.y * Ke.y + Me.y % 1) * (He - 1) % He | 0) * ie),
            Te = .3 * (ee[Ue] / 255) + .59 * (ee[Ue + 1] / 255) + .11 * (ee[Ue + 2] / 255);
          ke.normalize(), ke.scaleInPlace(ye + (be - ye) * Te), Re = Re.add(ke), Re.toArray(Fe, fe)
        }
        return De.e.ComputeNormals(Fe, this.eMe(), Je), Ue ? (this.setVerticesData(we.h.PositionKind, Fe), this.setVerticesData(we.h.NormalKind, Je), this.setVerticesData(we.h.UVKind, oe)) : (this.updateVerticesData(we.h.PositionKind, Fe), this.updateVerticesData(we.h.NormalKind, Je)), this
      }
      _getFlattenedNormals(ee, ie) {
        const He = new Float32Array(3 * ee.length);
        let ye = 0;
        const be = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Me = 0; Me < ee.length; Me += 3) {
          const Ke = We.p.FromArray(ie, 3 * ee[Me]),
            Ue = We.p.FromArray(ie, 3 * ee[Me + 1]),
            Fe = We.p.FromArray(ie, 3 * ee[Me + 2]),
            Je = Ke.subtract(Ue),
            oe = Fe.subtract(Ue),
            Re = We.p.Normalize(We.p.Cross(Je, oe));
          be && Re.scaleInPlace(-1);
          for (let ee = 0; ee < 3; ee++) He[ye++] = Re.x, He[ye++] = Re.y, He[ye++] = Re.z
        }
        return He
      }
      _convertToUnIndexedMesh() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = this.getVerticesDataKinds().filter((ee => !this.getVertexBuffer(ee)?.getIsInstanced())),
          He = this.eMe(!1, !0),
          ye = {},
          be = (ee, ie) => {
            const ye = new Float32Array(He.length * ie);
            let be = 0;
            for (let Me = 0; Me < He.length; Me++)
              for (let Ke = 0; Ke < ie; Ke++) ye[be++] = ee[He[Me] * ie + Ke];
            return ye
          },
          Me = this.WC(),
          Ke = this.geometry ? this.pW.slice(0) : [];
        for (const Ue of ie) ye[Ue] = this.getVerticesData(Ue);
        for (const Ue of ie) {
          const ie = this.getVertexBuffer(Ue),
            Me = ie.getSize();
          if (ee && Ue === we.h.NormalKind) {
            const ee = this._getFlattenedNormals(He, ye[we.h.PositionKind]);
            this.setVerticesData(we.h.NormalKind, ee, ie.isUpdatable(), Me)
          } else this.setVerticesData(Ue, be(ye[Ue], Me), ie.isUpdatable(), Me)
        }
        if (this.morphTargetManager) {
          for (let ie = 0; ie < this.morphTargetManager.numTargets; ie++) {
            const ye = this.morphTargetManager.getTarget(ie),
              Me = ye.getPositions();
            ye.ZFe(be(Me, 3));
            const Ke = ye.getNormals();
            Ke && ye.setNormals(ee ? this._getFlattenedNormals(He, Me) : be(Ke, 3));
            const Ue = ye.getTangents();
            Ue && ye.setTangents(be(Ue, 3));
            const Fe = ye.getUVs();
            Fe && ye.setUVs(be(Fe, 2));
            const Je = ye.getColors();
            Je && ye.setColors(be(Je, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let Ue = 0; Ue < He.length; Ue++) He[Ue] = Ue;
        this.setIndices(He), this._unIndexed = !0, this.releaseSubMeshes();
        for (const Ue of Ke) {
          const ee = Ue.WC();
          Ye.b.AddToMesh(Ue.materialIndex, Ue.indexStart, Ue.indexCount, Ue.indexStart, Ue.indexCount, this).setBoundingInfo(ee)
        }
        return this.setBoundingInfo(Me), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = De.e.ExtractFromMesh(this);
        let He;
        if (ee && this.isVerticesDataPresent(we.h.NormalKind) && ie.normals) {
          for (He = 0; He < ie.normals.length; He++) ie.normals[He] *= -1;
          this.setVerticesData(we.h.NormalKind, ie.normals, this.isVertexBufferUpdatable(we.h.NormalKind))
        }
        if (ie.indices) {
          let ee;
          for (He = 0; He < ie.indices.length; He += 3) ee = ie.indices[He + 1], ie.indices[He + 1] = ie.indices[He + 2], ie.indices[He + 2] = ee;
          this.setIndices(ie.indices, null, this.isVertexBufferUpdatable(we.h.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const ie = De.e.ExtractFromMesh(this),
          He = ie.indices && !Array.isArray(ie.indices) && Array.from ? Array.from(ie.indices) : ie.indices,
          ye = ie.positions && !Array.isArray(ie.positions) && Array.from ? Array.from(ie.positions) : ie.positions,
          be = ie.uvs && !Array.isArray(ie.uvs) && Array.from ? Array.from(ie.uvs) : ie.uvs,
          Me = ie.normals && !Array.isArray(ie.normals) && Array.from ? Array.from(ie.normals) : ie.normals;
        if (He && ye) {
          ie.indices = He, ie.positions = ye, be && (ie.uvs = be), Me && (ie.normals = Me);
          const Ke = ee + 1,
            Ue = [];
          for (let ee = 0; ee < Ke + 1; ee++) Ue[ee] = [];
          let Fe, Je;
          const oe = new We.p(0, 0, 0),
            Re = new We.p(0, 0, 0),
            ke = new We.n(0, 0),
            qe = [],
            fe = [],
            Te = [];
          let pe, Xe, ze, Be = ye.length;
          be && (Xe = be.length), Me && (ze = Me.length);
          for (let ee = 0; ee < He.length; ee += 3) {
            fe[0] = He[ee], fe[1] = He[ee + 1], fe[2] = He[ee + 2];
            for (let ee = 0; ee < 3; ee++)
              if (Fe = fe[ee], Je = fe[(ee + 1) % 3], void 0 === Te[Fe] && void 0 === Te[Je] ? (Te[Fe] = [], Te[Je] = []) : (void 0 === Te[Fe] && (Te[Fe] = []), void 0 === Te[Je] && (Te[Je] = [])), void 0 === Te[Fe][Je] && void 0 === Te[Je][Fe]) {
                Te[Fe][Je] = [], oe.x = (ye[3 * Je] - ye[3 * Fe]) / Ke, oe.y = (ye[3 * Je + 1] - ye[3 * Fe + 1]) / Ke, oe.z = (ye[3 * Je + 2] - ye[3 * Fe + 2]) / Ke, Me && (Re.x = (Me[3 * Je] - Me[3 * Fe]) / Ke, Re.y = (Me[3 * Je + 1] - Me[3 * Fe + 1]) / Ke, Re.z = (Me[3 * Je + 2] - Me[3 * Fe + 2]) / Ke), be && (ke.x = (be[2 * Je] - be[2 * Fe]) / Ke, ke.y = (be[2 * Je + 1] - be[2 * Fe + 1]) / Ke), Te[Fe][Je].push(Fe);
                for (let ee = 1; ee < Ke; ee++) Te[Fe][Je].push(ye.length / 3), ye[Be++] = ye[3 * Fe] + ee * oe.x, ye[Be++] = ye[3 * Fe + 1] + ee * oe.y, ye[Be++] = ye[3 * Fe + 2] + ee * oe.z, Me && (Me[ze++] = Me[3 * Fe] + ee * Re.x, Me[ze++] = Me[3 * Fe + 1] + ee * Re.y, Me[ze++] = Me[3 * Fe + 2] + ee * Re.z), be && (be[Xe++] = be[2 * Fe] + ee * ke.x, be[Xe++] = be[2 * Fe + 1] + ee * ke.y);
                Te[Fe][Je].push(Je), Te[Je][Fe] = [], pe = Te[Fe][Je].length;
                for (let ee = 0; ee < pe; ee++) Te[Je][Fe][ee] = Te[Fe][Je][pe - 1 - ee]
              } Ue[0][0] = He[ee], Ue[1][0] = Te[He[ee]][He[ee + 1]][1], Ue[1][1] = Te[He[ee]][He[ee + 2]][1];
            for (let ie = 2; ie < Ke; ie++) {
              Ue[ie][0] = Te[He[ee]][He[ee + 1]][ie], Ue[ie][ie] = Te[He[ee]][He[ee + 2]][ie], oe.x = (ye[3 * Ue[ie][ie]] - ye[3 * Ue[ie][0]]) / ie, oe.y = (ye[3 * Ue[ie][ie] + 1] - ye[3 * Ue[ie][0] + 1]) / ie, oe.z = (ye[3 * Ue[ie][ie] + 2] - ye[3 * Ue[ie][0] + 2]) / ie, Me && (Re.x = (Me[3 * Ue[ie][ie]] - Me[3 * Ue[ie][0]]) / ie, Re.y = (Me[3 * Ue[ie][ie] + 1] - Me[3 * Ue[ie][0] + 1]) / ie, Re.z = (Me[3 * Ue[ie][ie] + 2] - Me[3 * Ue[ie][0] + 2]) / ie), be && (ke.x = (be[2 * Ue[ie][ie]] - be[2 * Ue[ie][0]]) / ie, ke.y = (be[2 * Ue[ie][ie] + 1] - be[2 * Ue[ie][0] + 1]) / ie);
              for (let ee = 1; ee < ie; ee++) Ue[ie][ee] = ye.length / 3, ye[Be++] = ye[3 * Ue[ie][0]] + ee * oe.x, ye[Be++] = ye[3 * Ue[ie][0] + 1] + ee * oe.y, ye[Be++] = ye[3 * Ue[ie][0] + 2] + ee * oe.z, Me && (Me[ze++] = Me[3 * Ue[ie][0]] + ee * Re.x, Me[ze++] = Me[3 * Ue[ie][0] + 1] + ee * Re.y, Me[ze++] = Me[3 * Ue[ie][0] + 2] + ee * Re.z), be && (be[Xe++] = be[2 * Ue[ie][0]] + ee * ke.x, be[Xe++] = be[2 * Ue[ie][0] + 1] + ee * ke.y)
            }
            Ue[Ke] = Te[He[ee + 1]][He[ee + 2]], qe.push(Ue[0][0], Ue[1][0], Ue[1][1]);
            for (let ee = 1; ee < Ke; ee++) {
              let ie;
              for (ie = 0; ie < ee; ie++) qe.push(Ue[ee][ie], Ue[ee + 1][ie], Ue[ee + 1][ie + 1]), qe.push(Ue[ee][ie], Ue[ee + 1][ie + 1], Ue[ee][ie + 1]);
              qe.push(Ue[ee][ie], Ue[ee + 1][ie], Ue[ee + 1][ie + 1])
            }
          }
          ie.indices = qe, ie.applyToMesh(this, this.isVertexBufferUpdatable(we.h.PositionKind))
        } else Ce.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const ee = De.e.ExtractFromMesh(this),
          ie = ee.uvs,
          He = ee.indices,
          ye = ee.positions,
          be = ee.colors,
          Me = ee.matricesIndices,
          Ke = ee.matricesWeights,
          Ue = ee.matricesIndicesExtra,
          Fe = ee.matricesWeightsExtra;
        if (void 0 === He || void 0 === ye || null === He || null === ye) Ce.e.Warn("VertexData contains empty entries");
        else {
          const Je = [],
            oe = [],
            Re = [],
            ke = [],
            qe = [],
            fe = [],
            Te = [],
            pe = [];
          let Xe, ze = 0;
          const Be = {};
          let Ee, ge;
          for (let ee = 0; ee < He.length; ee += 3) {
            ge = [He[ee], He[ee + 1], He[ee + 2]], Xe = [];
            for (let ee = 0; ee < 3; ee++) {
              Xe[ee] = "";
              for (let ie = 0; ie < 3; ie++) Math.abs(ye[3 * ge[ee] + ie]) < 1e-8 && (ye[3 * ge[ee] + ie] = 0), Xe[ee] += ye[3 * ge[ee] + ie] + "|"
            }
            if (Xe[0] != Xe[1] && Xe[0] != Xe[2] && Xe[1] != Xe[2])
              for (let ee = 0; ee < 3; ee++) {
                if (Ee = Be[Xe[ee]], void 0 === Ee) {
                  Be[Xe[ee]] = ze, Ee = ze++;
                  for (let ie = 0; ie < 3; ie++) Je.push(ye[3 * ge[ee] + ie]);
                  if (null !== be && void 0 !== be)
                    for (let ie = 0; ie < 4; ie++) ke.push(be[4 * ge[ee] + ie]);
                  if (null !== ie && void 0 !== ie)
                    for (let He = 0; He < 2; He++) Re.push(ie[2 * ge[ee] + He]);
                  if (null !== Me && void 0 !== Me)
                    for (let ie = 0; ie < 4; ie++) qe.push(Me[4 * ge[ee] + ie]);
                  if (null !== Ke && void 0 !== Ke)
                    for (let ie = 0; ie < 4; ie++) fe.push(Ke[4 * ge[ee] + ie]);
                  if (null !== Ue && void 0 !== Ue)
                    for (let ie = 0; ie < 4; ie++) Te.push(Ue[4 * ge[ee] + ie]);
                  if (null !== Fe && void 0 !== Fe)
                    for (let ie = 0; ie < 4; ie++) pe.push(Fe[4 * ge[ee] + ie])
                }
                oe.push(Ee)
              }
          }
          const Oe = [];
          De.e.ComputeNormals(Je, oe, Oe), ee.positions = Je, ee.indices = oe, ee.normals = Oe, null !== ie && void 0 !== ie && (ee.uvs = Re), null !== be && void 0 !== be && (ee.colors = ke), null !== Me && void 0 !== Me && (ee.matricesIndices = qe), null !== Ke && void 0 !== Ke && (ee.matricesWeights = fe), null !== Ue && void 0 !== Ue && (ee.matricesIndicesExtra = Te), null !== Ke && void 0 !== Ke && (ee.matricesWeightsExtra = pe), ee.applyToMesh(this, this.isVertexBufferUpdatable(we.h.PositionKind))
        }
      }
      static _instancedMeshFactory(ee, ie) {
        throw (0, ue.l)("InstancedMesh")
      }
      static _PhysicsImpostorParser(ee, ie, He) {
        throw (0, ue.l)("PhysicsImpostor")
      }
      createInstance(ee) {
        const ie = Ge._instancedMeshFactory(ee, this);
        return ie.parent = this.parent, ie
      }
      synchronizeInstances() {
        for (let ee = 0; ee < this.instances.length; ee++) {
          this.instances[ee]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(ee) {
        const ie = this.eMe(),
          He = this.getVerticesData(we.h.PositionKind);
        if (!He || !ie) return this;
        const ye = [];
        for (let Me = 0; Me < He.length; Me += 3) ye.push(We.p.FromArray(He, Me));
        const be = [];
        return ze.c.SyncAsyncForLoop(ye.length, 40, (ee => {
          const ie = ye.length - 1 - ee,
            He = ye[ie];
          for (let Me = 0; Me < ie; ++Me) {
            const ee = ye[Me];
            if (He.equals(ee)) {
              be[ie] = Me;
              break
            }
          }
        }), (() => {
          for (let ee = 0; ee < ie.length; ++ee) ie[ee] = be[ie[ee]] || ie[ee];
          const He = this.pW.slice(0);
          this.setIndices(ie), this.pW = He, ee && ee(this)
        })), this
      }
      serialize() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        ee.name = this.name, ee.id = this.id, ee.uniqueId = this.uniqueId, ee.type = this.getClassName(), ge.b && ge.b.HasTags(this) && (ee.tags = ge.b.GetTags(this)), ee.position = this.position.Qbe(), this.rotationQuaternion ? ee.rotationQuaternion = this.rotationQuaternion.Qbe() : this.rotation && (ee.rotation = this.rotation.Qbe()), ee.wR = this.wR.Qbe(), this._postMultiplyPivotMatrix ? ee.pivotMatrix = this.getPivotMatrix().Qbe() : ee.localMatrix = this.getPivotMatrix().Qbe(), ee.isEnabled = this.isEnabled(!1), ee.isVisible = this.isVisible, ee.infiniteDistance = this.infiniteDistance, ee.pickable = this.Mp, ee.receiveShadows = this.receiveShadows, ee.billboardMode = this.billboardMode, ee.visibility = this.visibility, ee.Gf = this.Gf, ee.checkCollisions = this.checkCollisions, ee.ellipsoid = this.ellipsoid.Qbe(), ee.ellipsoidOffset = this.ellipsoidOffset.Qbe(), ee.eT = this.eT, ee.isBlocker = this.isBlocker, ee.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (ee.RL = !0), this.parent && this.parent._serializeAsParent(ee), ee.isUnIndexed = this.isUnIndexed;
        const ie = this._geometry;
        if (ie && this.pW) {
          ee.geometryUniqueId = ie.uniqueId, ee.geometryId = ie.id, ee.pW = [];
          for (let ie = 0; ie < this.pW.length; ie++) {
            const He = this.pW[ie];
            ee.pW.push({
              materialIndex: He.materialIndex,
              verticesStart: He.verticesStart,
              verticesCount: He.verticesCount,
              indexStart: He.indexStart,
              indexCount: He.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (ee.materialUniqueId = this.material.uniqueId, ee.materialId = this.material.id) : (this.material = null, ee.materialUniqueId = this._scene.defaultMaterial.uniqueId, ee.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (ee.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (ee.skeletonId = this.skeleton.id, ee.skeletonUniqueId = this.skeleton.uniqueId, ee.numBoneInfluencers = this.numBoneInfluencers), this.Xx()._getComponent(me.c.NAME_PHYSICSENGINE)) {
          const ie = this.getPhysicsImpostor?.();
          ie && (ee.physicsMass = ie.getParam("XF"), ee.physicsFriction = ie.getParam("friction"), ee.physicsRestitution = ie.getParam("XF"), ee.physicsImpostor = ie.type)
        }
        this.metadata && (ee.metadata = this.metadata), 0 !== this.meshBlendingTag && (ee.meshBlendingTag = this.meshBlendingTag), ee.instances = [];
        for (let He = 0; He < this.instances.length; He++) {
          const ie = this.instances[He];
          if (ie.doNotSerialize) continue;
          const ye = {
            name: ie.name,
            id: ie.id,
            isEnabled: ie.isEnabled(!1),
            isVisible: ie.isVisible,
            Mp: ie.Mp,
            checkCollisions: ie.checkCollisions,
            position: ie.position.Qbe(),
            wR: ie.wR.Qbe()
          };
          if (ie.parent && ie.parent._serializeAsParent(ye), ie.rotationQuaternion ? ye.rotationQuaternion = ie.rotationQuaternion.Qbe() : ie.rotation && (ye.rotation = ie.rotation.Qbe()), this.Xx()._getComponent(me.c.NAME_PHYSICSENGINE)) {
            const ee = ie.getPhysicsImpostor?.();
            ee && (ye.physicsMass = ee.getParam("XF"), ye.physicsFriction = ee.getParam("friction"), ye.physicsRestitution = ee.getParam("XF"), ye.physicsImpostor = ee.type)
          }
          ie.metadata && (ye.metadata = ie.metadata), ie.actionManager && (ye.actions = ie.actionManager.serialize(ie.name)), ee.instances.push(ye), Le.c.AppendSerializedAnimations(ie, ye), ye.zp = ie.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (ee.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.fye
          }, this._userThinInstanceBuffersStorage)) {
          const ie = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const ee in this._userThinInstanceBuffersStorage.data) ie.data[ee] = Array.from(this._userThinInstanceBuffersStorage.data[ee]), ie.sizes[ee] = this._userThinInstanceBuffersStorage.sizes[ee], ie.strides[ee] = this._userThinInstanceBuffersStorage.strides[ee];
          ee.thinInstances.userThinInstance = ie
        }
        return Le.c.AppendSerializedAnimations(this, ee), ee.zp = this.serializeAnimationRanges(), ee.layerMask = this.layerMask, ee.alphaIndex = this.alphaIndex, ee.hasVertexAlpha = this.hasVertexAlpha, ee.overlayAlpha = this.overlayAlpha, ee.overlayColor = this.overlayColor.Qbe(), ee.renderOverlay = this.renderOverlay, ee.applyFog = this.applyFog, this.actionManager && (ee.actions = this.actionManager.serialize(this.name)), ee
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const ee = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (ee && ee.vertexCount) {
          if (ee.vertexCount !== this.getTotalVertices()) return Ce.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (ee.isUsingTextureForTargets) return;
          for (let ie = 0; ie < ee.numInfluencers; ie++) {
            const He = ee.getActiveTarget(ie),
              ye = He.getPositions();
            if (!ye) return void Ce.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(we.h.PositionKind + ie, ye, !1, 3);
            const be = He.getNormals();
            be && this.geometry.setVerticesData(we.h.NormalKind + ie, be, !1, 3);
            const Me = He.getTangents();
            Me && this.geometry.setVerticesData(we.h.TangentKind + ie, Me, !1, 3);
            const Ke = He.getUVs();
            Ke && this.geometry.setVerticesData(we.h.UVKind + "_" + ie, Ke, !1, 2);
            const Ue = He.getUV2s();
            Ue && this.geometry.setVerticesData(we.h.UV2Kind + "_" + ie, Ue, !1, 2);
            const Fe = He.getColors();
            Fe && this.geometry.setVerticesData(we.h.ColorKind + ie, Fe, !1, 4)
          }
        } else {
          let ee = 0;
          for (; this.geometry.isVerticesDataPresent(we.h.PositionKind + ee);) this.geometry.removeVerticesData(we.h.PositionKind + ee), this.geometry.isVerticesDataPresent(we.h.NormalKind + ee) && this.geometry.removeVerticesData(we.h.NormalKind + ee), this.geometry.isVerticesDataPresent(we.h.TangentKind + ee) && this.geometry.removeVerticesData(we.h.TangentKind + ee), this.geometry.isVerticesDataPresent(we.h.UVKind + "_" + ee) && this.geometry.removeVerticesData(we.h.UVKind + "_" + ee), this.geometry.isVerticesDataPresent(we.h.UV2Kind + "_" + ee) && this.geometry.removeVerticesData(we.h.UV2Kind + "_" + ee), this.geometry.isVerticesDataPresent(we.h.ColorKind + ee) && this.geometry.removeVerticesData(we.h.ColorKind + ee), ee++
        }
      }
      static Parse(ee, ie, He) {
        let ye, be = !1;
        if (ee.type && "LinesMesh" === ee.type ? ye = Ge._LinesMeshParser(ee, ie) : ee.type && "GroundMesh" === ee.type ? ye = Ge._GroundMeshParser(ee, ie) : ee.type && "GoldbergMesh" === ee.type ? ye = Ge._GoldbergMeshParser(ee, ie) : ee.type && "GreasedLineMesh" === ee.type ? ye = Ge._GreasedLineMeshParser(ee, ie) : ee.type && "TrailMesh" === ee.type ? ye = Ge._TrailMeshParser(ee, ie) : ee.type && "GaussianSplattingMesh" === ee.type ? (ye = ee._isCompound ? Ge._GaussianSplattingCompoundMeshParser(ee, ie) : Ge._GaussianSplattingMeshParser(ee, ie), be = !0) : ee.type && "GaussianSplattingPartProxyMesh" === ee.type ? (ye = Ge._GaussianSplattingPartProxyMeshParser(ee, ie), be = !0) : ye = new Ge(ee.name, ie), ye.id = ee.id, ye._waitingParsedUniqueId = ee.uniqueId, ge.b && ge.b.AddTagsTo(ye, ee.tags), ye.position = We.p.FromArray(ee.position), void 0 !== ee.metadata && (ye.metadata = ee.metadata), void 0 !== ee.meshBlendingTag && (ye.meshBlendingTag = ee.meshBlendingTag), ee.rotationQuaternion ? ye.rotationQuaternion = We.f.FromArray(ee.rotationQuaternion) : ee.rotation && (ye.rotation = We.p.FromArray(ee.rotation)), ye.wR = We.p.FromArray(ee.wR), ee.localMatrix ? ye.setPreTransformMatrix(We.b.FromArray(ee.localMatrix)) : ee.pivotMatrix && ye.setPivotMatrix(We.b.FromArray(ee.pivotMatrix)), ye.JY(ee.isEnabled), ye.isVisible = ee.isVisible, ye.infiniteDistance = ee.infiniteDistance, ye.Gf = !!ee.Gf, ye.showBoundingBox = ee.showBoundingBox, ye.showSubMeshesBoundingBox = ee.showSubMeshesBoundingBox, void 0 !== ee.applyFog && (ye.applyFog = ee.applyFog), void 0 !== ee.pickable && (ye.Mp = ee.pickable), void 0 !== ee.alphaIndex && (ye.alphaIndex = ee.alphaIndex), ye.receiveShadows = ee.receiveShadows, void 0 !== ee.billboardMode && (ye.billboardMode = ee.billboardMode), void 0 !== ee.visibility && (ye.visibility = ee.visibility), ye.checkCollisions = ee.checkCollisions, ye.eT = !!ee.eT, ee.ellipsoid && (ye.ellipsoid = We.p.FromArray(ee.ellipsoid)), ee.ellipsoidOffset && (ye.ellipsoidOffset = We.p.FromArray(ee.ellipsoidOffset)), null != ee.overrideMaterialSideOrientation && (ye.sideOrientation = ee.overrideMaterialSideOrientation), void 0 !== ee.sideOrientation && (ye.sideOrientation = ee.sideOrientation), void 0 !== ee.isBlocker && (ye.isBlocker = ee.isBlocker), ye._shouldGenerateFlatShading = ee.useFlatShading, ee.RL && (ye._waitingData.RL = ee.RL), void 0 !== ee.parentId && (ye._waitingParentId = ee.parentId), void 0 !== ee.parentInstanceIndex && (ye._waitingParentInstanceIndex = ee.parentInstanceIndex), void 0 !== ee.actions && (ye._waitingData.actions = ee.actions), void 0 !== ee.overlayAlpha && (ye.overlayAlpha = ee.overlayAlpha), void 0 !== ee.overlayColor && (ye.overlayColor = te.c.FromArray(ee.overlayColor)), void 0 !== ee.renderOverlay && (ye.renderOverlay = ee.renderOverlay), ye.isUnIndexed = !!ee.isUnIndexed, ye.hasVertexAlpha = ee.hasVertexAlpha, ee.delayLoadingFile ? (ye.delayLoadState = 4, ye.delayLoadingFile = He + ee.delayLoadingFile, ye.buildBoundingInfo(We.p.FromArray(ee.boundingBoxMinimum), We.p.FromArray(ee.boundingBoxMaximum)), ee._binaryInfo && (ye._binaryInfo = ee._binaryInfo), ye._delayInfo = [], ee.hasUVs && ye._delayInfo.push(we.h.UVKind), ee.hasUVs2 && ye._delayInfo.push(we.h.UV2Kind), ee.hasUVs3 && ye._delayInfo.push(we.h.UV3Kind), ee.hasUVs4 && ye._delayInfo.push(we.h.UV4Kind), ee.hasUVs5 && ye._delayInfo.push(we.h.UV5Kind), ee.hasUVs6 && ye._delayInfo.push(we.h.UV6Kind), ee.hasColors && ye._delayInfo.push(we.h.ColorKind), ee.hasMatricesIndices && ye._delayInfo.push(we.h.MatricesIndicesKind), ee.hasMatricesWeights && ye._delayInfo.push(we.h.MatricesWeightsKind), ye._delayLoadingFunction = Pe.b._ImportGeometry, xe.e.ForceFullSceneLoadingForIncremental && ye._checkDelayState()) : be || Pe.b._ImportGeometry(ee, ye), ee.materialUniqueId ? ye._waitingMaterialId = ee.materialUniqueId : ee.materialId && (ye._waitingMaterialId = ee.materialId), ee.morphTargetManagerId > -1 && (ye._waitingMorphTargetManagerId = ee.morphTargetManagerId), void 0 !== ee.skeletonId && null !== ee.skeletonId && (ye.skeleton = ie.getLastSkeletonById(ee.skeletonId), ye._waitingSkeletonId = ee.skeletonId, ee.numBoneInfluencers && (ye.numBoneInfluencers = ee.numBoneInfluencers)), void 0 !== ee.skeletonUniqueId && null !== ee.skeletonUniqueId && (ye._waitingSkeletonUniqueId = ee.skeletonUniqueId), ee.animations) {
          for (let ie = 0; ie < ee.animations.length; ie++) {
            const He = ee.animations[ie],
              be = (0, ve.c)("BABYLON.Animation");
            be && ye.animations.push(be.Parse(He))
          }
          Ze.d.ParseAnimationRanges(ye, ee, ie)
        }
        if (ee.autoAnimate && ie.beginAnimation(ye, ee.autoAnimateFrom, ee.autoAnimateTo, ee.autoAnimateLoop, ee.autoAnimateSpeed || 1), ee.layerMask && !isNaN(ee.layerMask) ? ye.layerMask = Math.abs(parseInt(ee.layerMask)) : ye.layerMask = 268435455, ee.physicsImpostor && (ye.physicsImpostor = Ge._PhysicsImpostorParser(ie, ye, ee)), ee.lodMeshIds && (ye._waitingData.lods = {
            ids: ee.lodMeshIds,
            distances: ee.lodDistances ? ee.lodDistances : null,
            coverages: ee.lodCoverages ? ee.lodCoverages : null
          }), ee.instances)
          for (let Me = 0; Me < ee.instances.length; Me++) {
            const He = ee.instances[Me],
              be = ye.createInstance(He.name);
            if (He.id && (be.id = He.id), ge.b && (He.tags ? ge.b.AddTagsTo(be, He.tags) : ge.b.AddTagsTo(be, ee.tags)), be.position = We.p.FromArray(He.position), void 0 !== He.metadata && (be.metadata = He.metadata), void 0 !== He.parentId && (be._waitingParentId = He.parentId), void 0 !== He.parentInstanceIndex && (be._waitingParentInstanceIndex = He.parentInstanceIndex), void 0 !== He.isEnabled && null !== He.isEnabled && be.JY(He.isEnabled), void 0 !== He.isVisible && null !== He.isVisible && (be.isVisible = He.isVisible), void 0 !== He.Mp && null !== He.Mp && (be.Mp = He.Mp), He.rotationQuaternion ? be.rotationQuaternion = We.f.FromArray(He.rotationQuaternion) : He.rotation && (be.rotation = We.p.FromArray(He.rotation)), be.wR = We.p.FromArray(He.wR), void 0 != He.checkCollisions && null != He.checkCollisions && (be.checkCollisions = He.checkCollisions), void 0 != He.pickable && null != He.pickable && (be.Mp = He.pickable), void 0 != He.showBoundingBox && null != He.showBoundingBox && (be.showBoundingBox = He.showBoundingBox), void 0 != He.showSubMeshesBoundingBox && null != He.showSubMeshesBoundingBox && (be.showSubMeshesBoundingBox = He.showSubMeshesBoundingBox), void 0 != He.alphaIndex && null != He.showSubMeshesBoundingBox && (be.alphaIndex = He.alphaIndex), He.physicsImpostor && (be.physicsImpostor = Ge._PhysicsImpostorParser(ie, be, He)), void 0 !== He.actions && (be._waitingData.actions = He.actions), He.animations) {
              for (let ee = 0; ee < He.animations.length; ee++) {
                const ie = He.animations[ee],
                  ye = (0, ve.c)("BABYLON.Animation");
                ye && be.animations.push(ye.Parse(ie))
              }
              Ze.d.ParseAnimationRanges(be, He, ie), He.autoAnimate && ie.beginAnimation(be, He.autoAnimateFrom, He.autoAnimateTo, He.autoAnimateLoop, He.autoAnimateSpeed || 1)
            }
          }
        if (ee.thinInstances) {
          const ie = ee.thinInstances;
          if (ye.fye = !!ie.enablePicking, ie.matrixData ? (ye.Bie("matrix", new Float32Array(ie.matrixData), 16, !1), ye._thinInstanceDataStorage.matrixBufferSize = ie.matrixBufferSize, ye._thinInstanceDataStorage.instancesCount = ie.instancesCount) : ye._thinInstanceDataStorage.matrixBufferSize = ie.matrixBufferSize, ee.thinInstances.userThinInstance) {
            const ie = ee.thinInstances.userThinInstance;
            for (const ee in ie.data) ye.Bie(ee, new Float32Array(ie.data[ee]), ie.strides[ee], !1), ye._userThinInstanceBuffersStorage.sizes[ee] = ie.sizes[ee]
          }
        }
        return ye
      }
      setPositionsForCPUSkinning() {
        const ee = this._internalMeshDataInfo;
        if (!ee._sourcePositions) {
          const ie = this.getVerticesData(we.h.PositionKind);
          if (!ie) return ee._sourcePositions;
          ee._sourcePositions = new Float32Array(ie), this.isVertexBufferUpdatable(we.h.PositionKind) || this.setVerticesData(we.h.PositionKind, ie, !0)
        }
        return ee._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const ee = this._internalMeshDataInfo;
        if (!ee._sourceNormals) {
          const ie = this.getVerticesData(we.h.NormalKind);
          if (!ie) return ee._sourceNormals;
          ee._sourceNormals = new Float32Array(ie), this.isVertexBufferUpdatable(we.h.NormalKind) || this.setVerticesData(we.h.NormalKind, ie, !0)
        }
        return ee._sourceNormals
      }
      applySkeleton(ee) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.Xx().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.Xx().getFrameId(), !this.isVerticesDataPresent(we.h.PositionKind)) return this;
        if (!this.isVerticesDataPresent(we.h.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(we.h.MatricesWeightsKind)) return this;
        const ie = this.isVerticesDataPresent(we.h.NormalKind),
          He = this._internalMeshDataInfo;
        if (!He._sourcePositions) {
          const ee = this.pW.slice();
          this.setPositionsForCPUSkinning(), this.pW = ee
        }
        ie && !He._sourceNormals && this.setNormalsForCPUSkinning();
        let ye = this.getVerticesData(we.h.PositionKind);
        if (!ye) return this;
        ye instanceof Float32Array || (ye = new Float32Array(ye));
        let be = this.getVerticesData(we.h.NormalKind);
        if (ie) {
          if (!be) return this;
          be instanceof Float32Array || (be = new Float32Array(be))
        }
        const Me = this.getVerticesData(we.h.MatricesIndicesKind),
          Ke = this.getVerticesData(we.h.MatricesWeightsKind);
        if (!Ke || !Me) return this;
        const Ue = this.numBoneInfluencers > 4,
          Fe = Ue ? this.getVerticesData(we.h.MatricesIndicesExtraKind) : null,
          Je = Ue ? this.getVerticesData(we.h.MatricesWeightsExtraKind) : null,
          oe = ee.getTransformMatrices(this),
          Re = We.p.Zero(),
          ke = new We.b,
          qe = new We.b;
        let fe, Te = 0;
        for (let pe = 0; pe < ye.length; pe += 3, Te += 4) {
          let ee;
          for (fe = 0; fe < 4; fe++) ee = Ke[Te + fe], ee > 0 && (We.b.FromFloat32ArrayToRefScaled(oe, Math.floor(16 * Me[Te + fe]), ee, qe), ke.addToSelf(qe));
          if (Ue)
            for (fe = 0; fe < 4; fe++) ee = Je[Te + fe], ee > 0 && (We.b.FromFloat32ArrayToRefScaled(oe, Math.floor(16 * Fe[Te + fe]), ee, qe), ke.addToSelf(qe));
          We.p.TransformCoordinatesFromFloatsToRef(He._sourcePositions[pe], He._sourcePositions[pe + 1], He._sourcePositions[pe + 2], ke, Re), Re.toArray(ye, pe), ie && (We.p.TransformNormalFromFloatsToRef(He._sourceNormals[pe], He._sourceNormals[pe + 1], He._sourceNormals[pe + 2], ke, Re), Re.toArray(be, pe)), ke.reset()
        }
        return this.updateVerticesData(we.h.PositionKind, ye), ie && this.updateVerticesData(we.h.NormalKind, be), this
      }
      static MinMax(ee) {
        let ie = null,
          He = null;
        for (const ye of ee) {
          const ee = ye.WC().boundingBox;
          ie && He ? (ie.minimizeInPlace(ee.minimumWorld), He.maximizeInPlace(ee.maximumWorld)) : (ie = ee.minimumWorld.clone(), He = ee.maximumWorld.clone())
        }
        return ie && He ? {
          min: ie,
          max: He
        } : {
          min: We.p.Zero(),
          max: We.p.Zero()
        }
      }
      static Center(ee) {
        const ie = ee instanceof Array ? Ge.MinMax(ee) : ee;
        return We.p.Center(ie.min, ie.max)
      }
      static MergeMeshes(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 ? arguments[5] : void 0;
        return (0, Oe.q)(Ge._MergeMeshesCoroutine(ee, ie, He, ye, be, Me, !1))
      }
      static async MergeMeshesAsync(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, Oe.m)(Ge._MergeMeshesCoroutine(ee, ie, He, ye, be, Me, !0), (0, Oe.e)())
      }
      static * _MergeMeshesCoroutine(ee) {
        let ie, He = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ye = arguments.length > 2 ? arguments[2] : void 0,
          be = arguments.length > 3 ? arguments[3] : void 0,
          Me = arguments.length > 4 ? arguments[4] : void 0,
          Ke = arguments.length > 5 ? arguments[5] : void 0,
          Ue = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (ee = ee.filter(Boolean)).length) return null;
        if (!ye) {
          let He = 0;
          for (ie = 0; ie < ee.length; ie++)
            if (He += ee[ie].getTotalVertices(), He >= 65536) return Ce.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Fe = ee[0];
        Ke && (Me = !1, ee.sort(((ee, ie) => (ee.material?.uniqueId ?? -1) - (ie.material?.uniqueId ?? -1))));
        const Je = new Array,
          oe = new Array,
          Re = new Array,
          ke = ee[0].sideOrientation;
        for (ie = 0; ie < ee.length; ie++) {
          const He = ee[ie];
          if (He.Zx) return Ce.e.Warn("Cannot merge instance meshes."), null;
          if (ke !== He.sideOrientation) return Ce.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Me || Ke) {
            const ee = Re.reduce(((ee, ie) => Math.max(ee, ie.start + ie.count)), 0);
            if (Ke)
              if (He.material) {
                const ie = He.material;
                if (ie instanceof ce.e) {
                  for (let ee = 0; ee < ie.gie.length; ee++) Je.indexOf(ie.gie[ee]) < 0 && Je.push(ie.gie[ee]);
                  for (let ye = 0; ye < He.pW.length; ye++) oe.push(Je.indexOf(ie.gie[He.pW[ye].materialIndex])), Re.push({
                    start: ee + He.pW[ye].indexStart,
                    count: He.pW[ye].indexCount
                  })
                } else {
                  Je.indexOf(ie) < 0 && Je.push(ie);
                  for (let ye = 0; ye < He.pW.length; ye++) oe.push(Je.indexOf(ie)), Re.push({
                    start: ee + He.pW[ye].indexStart,
                    count: He.pW[ye].indexCount
                  })
                }
              } else
                for (let ie = 0; ie < He.pW.length; ie++) oe.push(0), Re.push({
                  start: ee + He.pW[ie].indexStart,
                  count: He.pW[ie].indexCount
                });
            else Re.push({
              start: ee,
              count: He.getTotalIndices()
            })
          }
        }
        if (Ke && Re.length > 1) {
          let ee = 0;
          for (let ie = 1; ie < Re.length; ie++) {
            const He = Re[ee],
              ye = Re[ie];
            oe[ie] === oe[ee] && He.start + He.count === ye.start ? He.count += ye.count : (ee++, Re[ee] = ye, oe[ee] = oe[ie])
          }
          Re.length = ee + 1, oe.length = ee + 1
        }
        const qe = ee => {
            const ie = ee.computeWorldMatrix(!0);
            return {
              vertexData: De.e.ExtractFromMesh(ee, !1, !1),
              transform: ie
            }
          },
          {
            vertexData: fe,
            transform: Te
          } = qe(ee[0]);
        Ue && (yield);
        const pe = new Array(ee.length - 1);
        for (let Oe = 1; Oe < ee.length; Oe++) pe[Oe - 1] = qe(ee[Oe]), Ue && (yield);
        const Xe = fe._mergeCoroutine(Te, pe, ye, Ue, !He);
        let ze = Xe.next();
        for (; !ze.done;) Ue && (yield), ze = Xe.next();
        const Be = ze.value;
        be || (be = new Ge(Fe.name + "_merged", Fe.Xx()));
        const Ee = Be._applyToCoroutine(be, void 0, Ue);
        let ge = Ee.next();
        for (; !ge.done;) Ue && (yield), ge = Ee.next();
        if (be.checkCollisions = Fe.checkCollisions, be.sideOrientation = Fe.sideOrientation, He)
          for (ie = 0; ie < ee.length; ie++) ee[ie].dispose();
        if (Me || Ke) {
          for (be.releaseSubMeshes(), ie = 0; ie < Re.length;) Ye.b.CreateFromIndices(0, Re[ie].start, Re[ie].count, be, void 0, !1), ie++;
          for (const ee of be.pW) ee.refreshBoundingInfo();
          be.computeWorldMatrix(!0)
        }
        if (Ke) {
          const ee = new ce.e(Fe.name + "_merged", Fe.Xx());
          ee.gie = Je;
          for (let ie = 0; ie < be.pW.length; ie++) be.pW[ie].materialIndex = oe[ie];
          be.material = ee
        } else be.material = Fe.material;
        return be
      }
      Uie(ee) {
        ee._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(ee)
      }
      Jie(ee) {
        const ie = ee._indexInSourceMeshInstanceArray;
        if (-1 != ie) {
          if (ie !== this.instances.length - 1) {
            const ee = this.instances[this.instances.length - 1];
            this.instances[ie] = ee, ee._indexInSourceMeshInstanceArray = ie
          }
          ee._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === Ve.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(ee) {
        const ie = this.Xx();
        return ie.forcePointsCloud ? Ve.e.PointFillMode : ie.forceWireframe ? Ve.e.WireFrameFillMode : this.overrideRenderingFillMode ?? ee
      }
      setMaterialByID(ee) {
        return this.setMaterialById(ee)
      }
      static CreateRibbon(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(ee, ie, He, ye, be, Me) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(ee, ie, He, ye, be) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(ee, ie, He, ye, be, Me) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(ee, ie, He, ye) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(ee, ie, He, ye, be, Me, Ke) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(ee, ie, He, ye, be) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(ee, ie, He, ye, be, Me, Ke, Ue) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(ee, ie, He, ye, be, Me, Ke) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(ee, ie, He, ye, be, Me, Ke, Ue) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(ee, ie, He, ye, be, Me, Ke) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(ee, ie, He, ye, be) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(ee, ie, He, ye, be, Me) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(ee, ie, He) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(ee, ie, He) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(ee, ie, He, ye, be, Me) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(ee, ie, He) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(ee) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Ge.FRONTSIDE = De.e.FRONTSIDE, Ge.BACKSIDE = De.e.BACKSIDE, Ge.DOUBLESIDE = De.e.DOUBLESIDE, Ge.DEFAULTSIDE = De.e.DEFAULTSIDE, Ge.NO_CAP = 0, Ge.CAP_START = 1, Ge.CAP_END = 2, Ge.CAP_ALL = 3, Ge.NO_FLIP = 0, Ge.FLIP_TILE = 1, Ge.ROTATE_TILE = 2, Ge.FLIP_ROW = 3, Ge.ROTATE_ROW = 4, Ge.FLIP_N_ROTATE_TILE = 5, Ge.FLIP_N_ROTATE_ROW = 6, Ge.CENTER = 0, Ge.LEFT = 1, Ge.RIGHT = 2, Ge.TOP = 3, Ge.BOTTOM = 4, Ge.INSTANCEDMESH_SORT_TRANSPARENT = !1, Ge._GroundMeshParser = (ee, ie) => {
      throw (0, ue.l)("GroundMesh")
    }, Ge._GoldbergMeshParser = (ee, ie) => {
      throw (0, ue.l)("GoldbergMesh")
    }, Ge._LinesMeshParser = (ee, ie) => {
      throw (0, ue.l)("LinesMesh")
    }, Ge._GreasedLineMeshParser = (ee, ie) => {
      throw (0, ue.l)("GreasedLineMesh")
    }, Ge._GreasedLineRibbonMeshParser = (ee, ie) => {
      throw (0, ue.l)("GreasedLineRibbonMesh")
    }, Ge._TrailMeshParser = (ee, ie) => {
      throw (0, ue.l)("TrailMesh")
    }, Ge._GaussianSplattingMeshParser = (ee, ie) => {
      throw (0, ue.l)("GaussianSplattingMesh")
    }, Ge._GaussianSplattingPartProxyMeshParser = (ee, ie) => {
      throw (0, ue.l)("GaussianSplattingPartProxyMesh")
    }, Ge._GaussianSplattingCompoundMeshParser = (ee, ie) => {
      throw (0, ue.l)("GaussianSplattingCompoundMesh")
    };
    let re = !1;

    function Qe() {
      re || (re = !0, (0, ve.e)("BABYLON.Mesh", Ge))
    }(ye = Ge.prototype).fC ?? (ye.fC = (0, ue.h)("Mesh", "fC")), (be = Ge.prototype).simplify ?? (be.simplify = (0, ue.h)("Mesh", "simplify")), (Me = Ge.prototype).thinInstanceAdd ?? (Me.thinInstanceAdd = (0, ue.h)("Mesh", "thinInstanceAdd")), (Ke = Ge.prototype).thinInstanceAddSelf ?? (Ke.thinInstanceAddSelf = (0, ue.h)("Mesh", "thinInstanceAddSelf")), (Ue = Ge.prototype).thinInstanceRegisterAttribute ?? (Ue.thinInstanceRegisterAttribute = (0, ue.h)("Mesh", "thinInstanceRegisterAttribute")), (Fe = Ge.prototype).thinInstanceSetMatrixAt ?? (Fe.thinInstanceSetMatrixAt = (0, ue.h)("Mesh", "thinInstanceSetMatrixAt")), (Je = Ge.prototype).thinInstanceSetAttributeAt ?? (Je.thinInstanceSetAttributeAt = (0, ue.h)("Mesh", "thinInstanceSetAttributeAt")), (oe = Ge.prototype).Bie ?? (oe.Bie = (0, ue.h)("Mesh", "Bie")), (Re = Ge.prototype).thinInstanceGetWorldMatrices ?? (Re.thinInstanceGetWorldMatrices = (0, ue.h)("Mesh", "thinInstanceGetWorldMatrices")), (ke = Ge.prototype).qie ?? (ke.qie = (0, ue.h)("Mesh", "qie")), (qe = Ge.prototype).thinInstancePartialBufferUpdate ?? (qe.thinInstancePartialBufferUpdate = (0, ue.h)("Mesh", "thinInstancePartialBufferUpdate")), (fe = Ge.prototype).thinInstanceRefreshBoundingInfo ?? (fe.thinInstanceRefreshBoundingInfo = (0, ue.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (Te = Ge.prototype).getEmittedParticleSystems ?? (Te.getEmittedParticleSystems = (0, ue.h)("Mesh", "getEmittedParticleSystems")), (pe = Ge.prototype).getHierarchyEmittedParticleSystems ?? (pe.getHierarchyEmittedParticleSystems = (0, ue.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Ge.prototype, "edgesShareWithInstances") || Object.defineProperty(Ge.prototype, "edgesShareWithInstances", (0, ue.d)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Ge.prototype, "fye") || Object.defineProperty(Ge.prototype, "fye", (0, ue.d)("Mesh", "fye")), Object.getOwnPropertyDescriptor(Ge.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Ge.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, ue.d)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Ge.prototype, "Hie") || Object.defineProperty(Ge.prototype, "Hie", (0, ue.d)("Mesh", "Hie"))
  },
  41535: (ee, ie, He) => {
    He.d(ie, {
      e: () => fe
    });
    var ye = He(41113),
      be = He(37917),
      Me = He(41247),
      Ke = He(40985),
      Ue = He(38022),
      Fe = He(39467),
      Je = He(41121),
      oe = He(41532),
      Re = He(41170),
      ke = He(41421);
    class qe {}
    let fe = (() => {
      var ee;
      let ie, He, fe, Te, pe = [];
      return ee = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, oe.i)(this._applyToCoroutine.bind(this)), this.uniqueId = ee._UniqueIdGenerator, ee._UniqueIdGenerator++
        }
        set(ee, ie) {
          switch (ee.length || Fe.e.Warn(`Setting vertex data kind '${ie}' with an empty array`), ie) {
            case Me.h.PositionKind:
              this.positions = ee;
              break;
            case Me.h.NormalKind:
              this.normals = ee;
              break;
            case Me.h.TangentKind:
              this.tangents = ee;
              break;
            case Me.h.UVKind:
              this.uvs = ee;
              break;
            case Me.h.UV2Kind:
              this.uvs2 = ee;
              break;
            case Me.h.UV3Kind:
              this.uvs3 = ee;
              break;
            case Me.h.UV4Kind:
              this.uvs4 = ee;
              break;
            case Me.h.UV5Kind:
              this.uvs5 = ee;
              break;
            case Me.h.UV6Kind:
              this.uvs6 = ee;
              break;
            case Me.h.ColorKind:
              this.colors = ee;
              break;
            case Me.h.MatricesIndicesKind:
              this.matricesIndices = ee;
              break;
            case Me.h.MatricesWeightsKind:
              this.matricesWeights = ee;
              break;
            case Me.h.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = ee;
              break;
            case Me.h.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = ee
          }
        }
        applyToMesh(ee, ie) {
          return this._applyTo(ee, ie, !1), this
        }
        applyToGeometry(ee, ie) {
          return this._applyTo(ee, ie, !1), this
        }
        updateMesh(ee) {
          return this._update(ee), this
        }
        updateGeometry(ee) {
          return this._update(ee), this
        }* _applyToCoroutine(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            He = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (ee.setVerticesData(Me.h.PositionKind, this.positions, ie), He && (yield)), this.normals && (ee.setVerticesData(Me.h.NormalKind, this.normals, ie), He && (yield)), this.tangents && (ee.setVerticesData(Me.h.TangentKind, this.tangents, ie), He && (yield)), this.uvs && (ee.setVerticesData(Me.h.UVKind, this.uvs, ie), He && (yield)), this.uvs2 && (ee.setVerticesData(Me.h.UV2Kind, this.uvs2, ie), He && (yield)), this.uvs3 && (ee.setVerticesData(Me.h.UV3Kind, this.uvs3, ie), He && (yield)), this.uvs4 && (ee.setVerticesData(Me.h.UV4Kind, this.uvs4, ie), He && (yield)), this.uvs5 && (ee.setVerticesData(Me.h.UV5Kind, this.uvs5, ie), He && (yield)), this.uvs6 && (ee.setVerticesData(Me.h.UV6Kind, this.uvs6, ie), He && (yield)), this.colors) {
            const ye = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            ee.setVerticesData(Me.h.ColorKind, this.colors, ie, ye), this.hasVertexAlpha && void 0 !== ee.hasVertexAlpha && (ee.hasVertexAlpha = !0), He && (yield)
          }
          if (this.matricesIndices && (ee.setVerticesData(Me.h.MatricesIndicesKind, this.matricesIndices, ie), He && (yield)), this.matricesWeights && (ee.setVerticesData(Me.h.MatricesWeightsKind, this.matricesWeights, ie), He && (yield)), this.matricesIndicesExtra && (ee.setVerticesData(Me.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, ie), He && (yield)), this.matricesWeightsExtra && (ee.setVerticesData(Me.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, ie), He && (yield)), this.indices ? (ee.setIndices(this.indices, null, ie), He && (yield)) : ee.setIndices([], null), ee.pW && this.materialInfos && this.materialInfos.length > 1) {
            const ie = ee;
            ie.pW = [];
            for (const ee of this.materialInfos) new ke.b(ee.materialIndex, ee.verticesStart, ee.verticesCount, ee.indexStart, ee.indexCount, ie)
          }
          return this
        }
        _update(ee, ie, He) {
          return this.positions && ee.updateVerticesData(Me.h.PositionKind, this.positions, ie, He), this.normals && ee.updateVerticesData(Me.h.NormalKind, this.normals, ie, He), this.tangents && ee.updateVerticesData(Me.h.TangentKind, this.tangents, ie, He), this.uvs && ee.updateVerticesData(Me.h.UVKind, this.uvs, ie, He), this.uvs2 && ee.updateVerticesData(Me.h.UV2Kind, this.uvs2, ie, He), this.uvs3 && ee.updateVerticesData(Me.h.UV3Kind, this.uvs3, ie, He), this.uvs4 && ee.updateVerticesData(Me.h.UV4Kind, this.uvs4, ie, He), this.uvs5 && ee.updateVerticesData(Me.h.UV5Kind, this.uvs5, ie, He), this.uvs6 && ee.updateVerticesData(Me.h.UV6Kind, this.uvs6, ie, He), this.colors && ee.updateVerticesData(Me.h.ColorKind, this.colors, ie, He), this.matricesIndices && ee.updateVerticesData(Me.h.MatricesIndicesKind, this.matricesIndices, ie, He), this.matricesWeights && ee.updateVerticesData(Me.h.MatricesWeightsKind, this.matricesWeights, ie, He), this.matricesIndicesExtra && ee.updateVerticesData(Me.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, ie, He), this.matricesWeightsExtra && ee.updateVerticesData(Me.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, ie, He), this.indices && ee.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee.length;
          const Me = be.j.rf[0],
            Ke = be.j.rf[1];
          for (let Ue = He; Ue < He + ye; Ue += 3) be.p.FromArrayToRef(ee, Ue, Me), be.p.TransformCoordinatesToRef(Me, ie, Ke), ee[Ue] = Ke.x, ee[Ue + 1] = Ke.y, ee[Ue + 2] = Ke.z
        }
        static _TransformVector3Normals(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee.length;
          const Me = be.j.rf[0],
            Ke = be.j.rf[1];
          for (let Ue = He; Ue < He + ye; Ue += 3) be.p.FromArrayToRef(ee, Ue, Me), be.p.TransformNormalToRef(Me, ie, Ke), ee[Ue] = Ke.x, ee[Ue + 1] = Ke.y, ee[Ue + 2] = Ke.z
        }
        static _TransformVector4Normals(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee.length;
          const Me = be.j.Vector4[0],
            Ke = be.j.Vector4[1];
          for (let Ue = He; Ue < He + ye; Ue += 4) be.s.FromArrayToRef(ee, Ue, Me), be.s.TransformNormalToRef(Me, ie, Ke), ee[Ue] = Ke.x, ee[Ue + 1] = Ke.y, ee[Ue + 2] = Ke.z, ee[Ue + 3] = Ke.w
        }
        static _FlipFaces(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.length;
          for (let ye = ie; ye < ie + He; ye += 3) {
            const ie = ee[ye + 1];
            ee[ye + 1] = ee[ye + 2], ee[ye + 2] = ie
          }
        }
        transform(ie) {
          const He = ie.determinant() < 0;
          return this.positions && ee._TransformVector3Coordinates(this.positions, ie), this.normals && ee._TransformVector3Normals(this.normals, ie), this.tangents && ee._TransformVector4Normals(this.tangents, ie), He && this.indices && ee._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const ie = [];
          for (const He of this.materialInfos) {
            const ye = new ee;
            if (this.positions && (ye.positions = this.positions.slice(3 * He.verticesStart, 3 * (He.verticesCount + He.verticesStart))), this.normals && (ye.normals = this.normals.slice(3 * He.verticesStart, 3 * (He.verticesCount + He.verticesStart))), this.tangents && (ye.tangents = this.tangents.slice(4 * He.verticesStart, 4 * (He.verticesCount + He.verticesStart))), this.colors && (ye.colors = this.colors.slice(4 * He.verticesStart, 4 * (He.verticesCount + He.verticesStart))), this.uvs && (ye.uvs = this.uvs.slice(2 * He.verticesStart, 2 * (He.verticesCount + He.verticesStart))), this.uvs2 && (ye.uvs2 = this.uvs2.slice(2 * He.verticesStart, 2 * (He.verticesCount + He.verticesStart))), this.uvs3 && (ye.uvs3 = this.uvs3.slice(2 * He.verticesStart, 2 * (He.verticesCount + He.verticesStart))), this.uvs4 && (ye.uvs4 = this.uvs4.slice(2 * He.verticesStart, 2 * (He.verticesCount + He.verticesStart))), this.uvs5 && (ye.uvs5 = this.uvs5.slice(2 * He.verticesStart, 2 * (He.verticesCount + He.verticesStart))), this.uvs6 && (ye.uvs6 = this.uvs6.slice(2 * He.verticesStart, 2 * (He.verticesCount + He.verticesStart))), this.matricesIndices && (ye.matricesIndices = this.matricesIndices.slice(4 * He.verticesStart, 4 * (He.verticesCount + He.verticesStart))), this.matricesIndicesExtra && (ye.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * He.verticesStart, 4 * (He.verticesCount + He.verticesStart))), this.matricesWeights && (ye.matricesWeights = this.matricesWeights.slice(4 * He.verticesStart, 4 * (He.verticesCount + He.verticesStart))), this.matricesWeightsExtra && (ye.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * He.verticesStart, 4 * (He.verticesCount + He.verticesStart))), this.indices) {
              ye.indices = [];
              for (let ee = He.indexStart; ee < He.indexStart + He.indexCount; ee++) ye.indices.push(this.indices[ee] - He.verticesStart)
            }
            const be = new qe;
            be.indexStart = 0, be.indexCount = ye.indices ? ye.indices.length : 0, be.materialIndex = He.materialIndex, be.verticesStart = 0, be.verticesCount = (ye.positions ? ye.positions.length : 0) / 3, ye.materialInfos = [be], ie.push(ye)
          }
          return ie
        }
        merge(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Me = Array.isArray(ee) ? ee.map((ee => ({
            vertexData: ee
          }))) : [{
            vertexData: ee
          }];
          return (0, oe.q)(this._mergeCoroutine(void 0, Me, ie, !1, He, ye, be))
        }* _mergeCoroutine(ie, He) {
          let ye = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            be = arguments.length > 3 ? arguments[3] : void 0,
            Ke = arguments.length > 4 ? arguments[4] : void 0,
            Ue = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Fe = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Je = He.map((ee => ee.vertexData)),
            oe = this;
          if (Fe)
            for (const ee of Je) ee && (ee._validate(), !this.normals && ee.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && ee.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && ee.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && ee.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && ee.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && ee.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && ee.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && ee.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && ee.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && ee.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && ee.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && ee.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && ee.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const ee of Je)
            if (ee)
              if (Fe) this.normals && !ee.normals && (ee.normals = new Float32Array(ee.positions.length)), this.tangents && !ee.tangents && (ee.tangents = new Float32Array(ee.positions.length / 3 * 4)), this.uvs && !ee.uvs && (ee.uvs = new Float32Array(ee.positions.length / 3 * 2)), this.uvs2 && !ee.uvs2 && (ee.uvs2 = new Float32Array(ee.positions.length / 3 * 2)), this.uvs3 && !ee.uvs3 && (ee.uvs3 = new Float32Array(ee.positions.length / 3 * 2)), this.uvs4 && !ee.uvs4 && (ee.uvs4 = new Float32Array(ee.positions.length / 3 * 2)), this.uvs5 && !ee.uvs5 && (ee.uvs5 = new Float32Array(ee.positions.length / 3 * 2)), this.uvs6 && !ee.uvs6 && (ee.uvs6 = new Float32Array(ee.positions.length / 3 * 2)), this.colors && !ee.colors && (ee.colors = new Float32Array(ee.positions.length / 3 * 4), ee.colors.fill(1)), this.matricesIndices && !ee.matricesIndices && (ee.matricesIndices = new Float32Array(ee.positions.length / 3 * 4)), this.matricesWeights && !ee.matricesWeights && (ee.matricesWeights = new Float32Array(ee.positions.length / 3 * 4)), this.matricesIndicesExtra && !ee.matricesIndicesExtra && (ee.matricesIndicesExtra = new Float32Array(ee.positions.length / 3 * 4)), this.matricesWeightsExtra && !ee.matricesWeightsExtra && (ee.matricesWeightsExtra = new Float32Array(ee.positions.length / 3 * 4));
              else if (ee._validate(), !this.normals !== !ee.normals || !this.tangents !== !ee.tangents || !this.uvs !== !ee.uvs || !this.uvs2 !== !ee.uvs2 || !this.uvs3 !== !ee.uvs3 || !this.uvs4 !== !ee.uvs4 || !this.uvs5 !== !ee.uvs5 || !this.uvs6 !== !ee.uvs6 || !this.colors !== !ee.colors || !this.matricesIndices !== !ee.matricesIndices || !this.matricesWeights !== !ee.matricesWeights || !this.matricesIndicesExtra !== !ee.matricesIndicesExtra || !this.matricesWeightsExtra !== !ee.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (Ue) {
            let ee, ye = 0,
              be = 0;
            const Me = [];
            let Ke = null;
            const Ue = [];
            for (const He of this.splitBasedOnMaterialID()) Ue.push({
              vertexData: He,
              transform: ie
            });
            for (const ie of He)
              if (ie.vertexData)
                for (const ee of ie.vertexData.splitBasedOnMaterialID()) Ue.push({
                  vertexData: ee,
                  transform: ie.transform
                });
            Ue.sort(((ee, ie) => {
              const He = ee.vertexData.materialInfos ? ee.vertexData.materialInfos[0].materialIndex : 0,
                ye = ie.vertexData.materialInfos ? ie.vertexData.materialInfos[0].materialIndex : 0;
              return He > ye ? 1 : He === ye ? 0 : -1
            }));
            for (const ie of Ue) {
              const He = ie.vertexData;
              if (ee = He.materialInfos ? He.materialInfos[0].materialIndex : 0, Ke && Ke.materialIndex === ee) Ke.indexCount += He.indices.length, Ke.verticesCount += He.positions.length / 3;
              else {
                const ie = new qe;
                ie.materialIndex = ee, ie.indexStart = ye, ie.indexCount = He.indices.length, ie.verticesStart = be, ie.verticesCount = He.positions.length / 3, Me.push(ie), Ke = ie
              }
              ye += He.indices.length, be += He.positions.length / 3
            }
            const Fe = Ue.splice(0, 1)[0];
            oe = Fe.vertexData, ie = Fe.transform, Je = Ue.map((ee => ee.vertexData)), He = Ue, this.materialInfos = Me
          }
          const Re = Je.reduce(((ee, ie) => ee + (ie.indices?.length ?? 0)), oe.indices?.length ?? 0);
          let ke = Ke || Je.some((ee => ee.indices === oe.indices)) ? oe.indices?.slice() : oe.indices;
          if (Re > 0) {
            let Me = ke?.length ?? 0;
            if (ke || (ke = new Array(Re)), ke.length !== Re) {
              if (Array.isArray(ke)) ke.length = Re;
              else {
                const ee = ye || ke instanceof Uint32Array ? new Uint32Array(Re) : new Uint16Array(Re);
                ee.set(ke), ke = ee
              }
              ie && ie.determinant() < 0 && ee._FlipFaces(ke, 0, Me)
            }
            let Ke = oe.positions ? oe.positions.length / 3 : 0;
            for (const {
                vertexData: ie,
                transform: ye
              }
              of He)
              if (ie.indices) {
                for (let ee = 0; ee < ie.indices.length; ee++) ke[Me + ee] = ie.indices[ee] + Ke;
                ye && ye.determinant() < 0 && ee._FlipFaces(ke, Me, ie.indices.length), Ke += ie.positions.length / 3, Me += ie.indices.length, be && (yield)
              }
          }
          return this.indices = ke, this.positions = ee._MergeElement(Me.h.PositionKind, oe.positions, ie, He.map((ee => [ee.vertexData.positions, ee.transform]))), be && (yield), oe.normals && (this.normals = ee._MergeElement(Me.h.NormalKind, oe.normals, ie, He.map((ee => [ee.vertexData.normals, ee.transform]))), be && (yield)), oe.tangents && (this.tangents = ee._MergeElement(Me.h.TangentKind, oe.tangents, ie, He.map((ee => [ee.vertexData.tangents, ee.transform]))), be && (yield)), oe.uvs && (this.uvs = ee._MergeElement(Me.h.UVKind, oe.uvs, ie, He.map((ee => [ee.vertexData.uvs, ee.transform]))), be && (yield)), oe.uvs2 && (this.uvs2 = ee._MergeElement(Me.h.UV2Kind, oe.uvs2, ie, He.map((ee => [ee.vertexData.uvs2, ee.transform]))), be && (yield)), oe.uvs3 && (this.uvs3 = ee._MergeElement(Me.h.UV3Kind, oe.uvs3, ie, He.map((ee => [ee.vertexData.uvs3, ee.transform]))), be && (yield)), oe.uvs4 && (this.uvs4 = ee._MergeElement(Me.h.UV4Kind, oe.uvs4, ie, He.map((ee => [ee.vertexData.uvs4, ee.transform]))), be && (yield)), oe.uvs5 && (this.uvs5 = ee._MergeElement(Me.h.UV5Kind, oe.uvs5, ie, He.map((ee => [ee.vertexData.uvs5, ee.transform]))), be && (yield)), oe.uvs6 && (this.uvs6 = ee._MergeElement(Me.h.UV6Kind, oe.uvs6, ie, He.map((ee => [ee.vertexData.uvs6, ee.transform]))), be && (yield)), oe.colors && (this.colors = ee._MergeElement(Me.h.ColorKind, oe.colors, ie, He.map((ee => [ee.vertexData.colors, ee.transform]))), (void 0 !== oe.hasVertexAlpha || He.some((ee => void 0 !== ee.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = oe.hasVertexAlpha || He.some((ee => ee.vertexData.hasVertexAlpha))), be && (yield)), oe.matricesIndices && (this.matricesIndices = ee._MergeElement(Me.h.MatricesIndicesKind, oe.matricesIndices, ie, He.map((ee => [ee.vertexData.matricesIndices, ee.transform]))), be && (yield)), oe.matricesWeights && (this.matricesWeights = ee._MergeElement(Me.h.MatricesWeightsKind, oe.matricesWeights, ie, He.map((ee => [ee.vertexData.matricesWeights, ee.transform]))), be && (yield)), oe.matricesIndicesExtra && (this.matricesIndicesExtra = ee._MergeElement(Me.h.MatricesIndicesExtraKind, oe.matricesIndicesExtra, ie, He.map((ee => [ee.vertexData.matricesIndicesExtra, ee.transform]))), be && (yield)), oe.matricesWeightsExtra && (this.matricesWeightsExtra = ee._MergeElement(Me.h.MatricesWeightsExtraKind, oe.matricesWeightsExtra, ie, He.map((ee => [ee.vertexData.matricesWeightsExtra, ee.transform])))), this
        }
        static _MergeElement(ie, He, ye, be) {
          const Ke = be.filter((ee => null !== ee[0] && void 0 !== ee[0]));
          if (!He && 0 == Ke.length) return He;
          if (!He) return this._MergeElement(ie, Ke[0][0], Ke[0][1], Ke.slice(1));
          const Ue = Ke.reduce(((ee, ie) => ee + ie[0].length), He.length),
            Fe = ie === Me.h.PositionKind ? ee._TransformVector3Coordinates : ie === Me.h.NormalKind ? ee._TransformVector3Normals : ie === Me.h.TangentKind ? ee._TransformVector4Normals : () => {};
          if (He instanceof Float32Array) {
            const ee = new Float32Array(Ue);
            ee.set(He), ye && Fe(ee, ye, 0, He.length);
            let ie = He.length;
            for (const [He, ye] of Ke) ee.set(He, ie), ye && Fe(ee, ye, ie, He.length), ie += He.length;
            return ee
          } {
            const ee = new Array(Ue);
            for (let ye = 0; ye < He.length; ye++) ee[ye] = He[ye];
            ye && Fe(ee, ye, 0, He.length);
            let ie = He.length;
            for (const [He, ye] of Ke) {
              for (let ye = 0; ye < He.length; ye++) ee[ie + ye] = He[ye];
              ye && Fe(ee, ye, ie, He.length), ie += He.length
            }
            return ee
          }
        }
        _validate() {
          if (!this.positions) throw new Re.i("Positions are required", Re.h.MeshInvalidPositionsError);
          const ee = (ee, ie) => {
              const He = (0, Me.f)(ee);
              if (ie.length % He !== 0) throw new Error("The " + ee + "s array count must be a multiple of " + He);
              return ie.length / He
            },
            ie = ee(Me.h.PositionKind, this.positions),
            He = (He, ye) => {
              const be = ee(He, ye);
              if (be !== ie) throw new Error("The " + He + "s element count (" + be + ") does not match the positions count (" + ie + ")")
            };
          this.normals && He(Me.h.NormalKind, this.normals), this.tangents && He(Me.h.TangentKind, this.tangents), this.uvs && He(Me.h.UVKind, this.uvs), this.uvs2 && He(Me.h.UV2Kind, this.uvs2), this.uvs3 && He(Me.h.UV3Kind, this.uvs3), this.uvs4 && He(Me.h.UV4Kind, this.uvs4), this.uvs5 && He(Me.h.UV5Kind, this.uvs5), this.uvs6 && He(Me.h.UV6Kind, this.uvs6), this.colors && He(Me.h.ColorKind, this.colors), this.matricesIndices && He(Me.h.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && He(Me.h.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && He(Me.h.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && He(Me.h.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const ie = this.serialize();
          return ee.Parse(ie)
        }
        serialize() {
          const ee = {};
          if (this.positions && (ee.positions = Array.from(this.positions)), this.normals && (ee.normals = Array.from(this.normals)), this.tangents && (ee.tangents = Array.from(this.tangents)), this.uvs && (ee.uvs = Array.from(this.uvs)), this.uvs2 && (ee.uvs2 = Array.from(this.uvs2)), this.uvs3 && (ee.uvs3 = Array.from(this.uvs3)), this.uvs4 && (ee.uvs4 = Array.from(this.uvs4)), this.uvs5 && (ee.uvs5 = Array.from(this.uvs5)), this.uvs6 && (ee.uvs6 = Array.from(this.uvs6)), this.colors && (ee.colors = Array.from(this.colors), ee.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (ee.matricesIndices = Array.from(this.matricesIndices), ee.matricesIndicesExpanded = !0), this.matricesWeights && (ee.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (ee.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), ee.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (ee.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), ee.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            ee.materialInfos = [];
            for (const ie of this.materialInfos) {
              const He = {
                indexStart: ie.indexStart,
                indexCount: ie.indexCount,
                materialIndex: ie.materialIndex,
                verticesStart: ie.verticesStart,
                verticesCount: ie.verticesCount
              };
              ee.materialInfos.push(He)
            }
          }
          return ee
        }
        static ExtractFromMesh(ie, He, ye) {
          return ee._ExtractFrom(ie, He, ye)
        }
        static ExtractFromGeometry(ie, He, ye) {
          return ee._ExtractFrom(ie, He, ye)
        }
        static _ExtractFrom(ie, He, ye) {
          const be = new ee;
          if (ie.isVerticesDataPresent(Me.h.PositionKind) && (be.positions = ie.getVerticesData(Me.h.PositionKind, He, ye)), ie.isVerticesDataPresent(Me.h.NormalKind) && (be.normals = ie.getVerticesData(Me.h.NormalKind, He, ye)), ie.isVerticesDataPresent(Me.h.TangentKind) && (be.tangents = ie.getVerticesData(Me.h.TangentKind, He, ye)), ie.isVerticesDataPresent(Me.h.UVKind) && (be.uvs = ie.getVerticesData(Me.h.UVKind, He, ye)), ie.isVerticesDataPresent(Me.h.UV2Kind) && (be.uvs2 = ie.getVerticesData(Me.h.UV2Kind, He, ye)), ie.isVerticesDataPresent(Me.h.UV3Kind) && (be.uvs3 = ie.getVerticesData(Me.h.UV3Kind, He, ye)), ie.isVerticesDataPresent(Me.h.UV4Kind) && (be.uvs4 = ie.getVerticesData(Me.h.UV4Kind, He, ye)), ie.isVerticesDataPresent(Me.h.UV5Kind) && (be.uvs5 = ie.getVerticesData(Me.h.UV5Kind, He, ye)), ie.isVerticesDataPresent(Me.h.UV6Kind) && (be.uvs6 = ie.getVerticesData(Me.h.UV6Kind, He, ye)), ie.isVerticesDataPresent(Me.h.ColorKind)) {
            const ee = ie.geometry || ie,
              Ke = ee.getVertexBuffer(Me.h.ColorKind),
              Ue = ee.getVerticesData(Me.h.ColorKind, He, ye);
            if (3 === Ke.getSize()) {
              const ee = new Float32Array(4 * Ue.length / 3);
              for (let ie = 0, He = 0; ie < Ue.length; ie += 3, He += 4) ee[He] = Ue[ie], ee[He + 1] = Ue[ie + 1], ee[He + 2] = Ue[ie + 2], ee[He + 3] = 1;
              be.colors = ee
            } else {
              if (4 !== Ke.getSize()) throw new Error(`Unexpected number of color components: ${Ke.getSize()}`);
              be.colors = Ue
            }
          }
          return ie.isVerticesDataPresent(Me.h.MatricesIndicesKind) && (be.matricesIndices = ie.getVerticesData(Me.h.MatricesIndicesKind, He, ye)), ie.isVerticesDataPresent(Me.h.MatricesWeightsKind) && (be.matricesWeights = ie.getVerticesData(Me.h.MatricesWeightsKind, He, ye)), ie.isVerticesDataPresent(Me.h.MatricesIndicesExtraKind) && (be.matricesIndicesExtra = ie.getVerticesData(Me.h.MatricesIndicesExtraKind, He, ye)), ie.isVerticesDataPresent(Me.h.MatricesWeightsExtraKind) && (be.matricesWeightsExtra = ie.getVerticesData(Me.h.MatricesWeightsExtraKind, He, ye)), be.indices = ie.eMe(He, ye), be
        }
        static CreateRibbon(ee) {
          throw (0, Ke.l)("ribbonBuilder")
        }
        static CreateBox(ee) {
          throw (0, Ke.l)("boxBuilder")
        }
        static CreateTiledBox(ee) {
          throw (0, Ke.l)("tiledBoxBuilder")
        }
        static CreateTiledPlane(ee) {
          throw (0, Ke.l)("tiledPlaneBuilder")
        }
        static CreateSphere(ee) {
          throw (0, Ke.l)("sphereBuilder")
        }
        static CreateCylinder(ee) {
          throw (0, Ke.l)("cylinderBuilder")
        }
        static CreateTorus(ee) {
          throw (0, Ke.l)("torusBuilder")
        }
        static CreateLineSystem(ee) {
          throw (0, Ke.l)("linesBuilder")
        }
        static CreateDashedLines(ee) {
          throw (0, Ke.l)("linesBuilder")
        }
        static CreateGround(ee) {
          throw (0, Ke.l)("groundBuilder")
        }
        static CreateTiledGround(ee) {
          throw (0, Ke.l)("groundBuilder")
        }
        static CreateGroundFromHeightMap(ee) {
          throw (0, Ke.l)("groundBuilder")
        }
        static CreatePlane(ee) {
          throw (0, Ke.l)("planeBuilder")
        }
        static CreateDisc(ee) {
          throw (0, Ke.l)("discBuilder")
        }
        static CreatePolygon(ee, ie, He, ye, be, Me, Ue) {
          throw (0, Ke.l)("polygonBuilder")
        }
        static CreateIcoSphere(ee) {
          throw (0, Ke.l)("icoSphereBuilder")
        }
        static CreatePolyhedron(ee) {
          throw (0, Ke.l)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || be.p.Up();
          throw (0, Ke.l)("capsuleBuilder")
        }
        static CreateTorusKnot(ee) {
          throw (0, Ke.l)("torusKnotBuilder")
        }
        static ComputeNormals(ee, ie, He, ye) {
          let Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te = !1,
            Ze = !1,
            we = !1,
            De = !1,
            Pe = 1,
            Ae = 0,
            Ye = null;
          ye && (te = !!ye.facetNormals, Ze = !!ye.facetPositions, we = !!ye.facetPartitioning, Pe = !0 === ye.useRightHandedSystem ? -1 : 1, Ae = ye.ratio || 0, De = !!ye.depthSort, Ye = ye.distanceTo, De && void 0 === Ye && (Ye = be.p.Zero()));
          let Ve = 0,
            ae = 0,
            ce = 0,
            xe = 0;
          for (we && ye && ye.bbSize && (Ve = ye.subDiv.X * Ae / ye.bbSize.x, ae = ye.subDiv.Y * Ae / ye.bbSize.y, ce = ye.subDiv.Z * Ae / ye.bbSize.z, xe = ye.subDiv.max * ye.subDiv.max, ye.facetPartitioning.length = 0), Me = 0; Me < ee.length; Me++) He[Me] = 0;
          const Le = ie.length / 3 | 0;
          for (Me = 0; Me < Le; Me++) {
            if (pe = 3 * ie[3 * Me], Xe = pe + 1, ze = pe + 2, Be = 3 * ie[3 * Me + 1], Ee = Be + 1, ge = Be + 2, Oe = 3 * ie[3 * Me + 2], de = Oe + 1, We = Oe + 2, Ke = ee[pe] - ee[Be], Ue = ee[Xe] - ee[Ee], Fe = ee[ze] - ee[ge], Je = ee[Oe] - ee[Be], oe = ee[de] - ee[Ee], Re = ee[We] - ee[ge], ke = Pe * (Ue * Re - Fe * oe), qe = Pe * (Fe * Je - Ke * Re), fe = Pe * (Ke * oe - Ue * Je), Te = Math.sqrt(ke * ke + qe * qe + fe * fe), Te = 0 === Te ? 1 : Te, ke /= Te, qe /= Te, fe /= Te, te && ye && (ye.facetNormals[Me].x = ke, ye.facetNormals[Me].y = qe, ye.facetNormals[Me].z = fe), Ze && ye && (ye.facetPositions[Me].x = (ee[pe] + ee[Be] + ee[Oe]) / 3, ye.facetPositions[Me].y = (ee[Xe] + ee[Ee] + ee[de]) / 3, ye.facetPositions[Me].z = (ee[ze] + ee[ge] + ee[We]) / 3), we && ye) {
              const ie = Math.floor((ye.facetPositions[Me].x - ye.bInfo.minimum.x * Ae) * Ve),
                He = Math.floor((ye.facetPositions[Me].y - ye.bInfo.minimum.y * Ae) * ae),
                be = Math.floor((ye.facetPositions[Me].z - ye.bInfo.minimum.z * Ae) * ce),
                Ke = Math.floor((ee[pe] - ye.bInfo.minimum.x * Ae) * Ve),
                Ue = Math.floor((ee[Xe] - ye.bInfo.minimum.y * Ae) * ae),
                Fe = Math.floor((ee[ze] - ye.bInfo.minimum.z * Ae) * ce),
                Je = Math.floor((ee[Be] - ye.bInfo.minimum.x * Ae) * Ve),
                oe = Math.floor((ee[Ee] - ye.bInfo.minimum.y * Ae) * ae),
                Re = Math.floor((ee[ge] - ye.bInfo.minimum.z * Ae) * ce),
                ke = Math.floor((ee[Oe] - ye.bInfo.minimum.x * Ae) * Ve),
                qe = Math.floor((ee[de] - ye.bInfo.minimum.y * Ae) * ae),
                fe = Math.floor((ee[We] - ye.bInfo.minimum.z * Ae) * ce),
                Te = Ke + ye.subDiv.max * Ue + xe * Fe,
                te = Je + ye.subDiv.max * oe + xe * Re,
                Ze = ke + ye.subDiv.max * qe + xe * fe,
                we = ie + ye.subDiv.max * He + xe * be;
              ye.facetPartitioning[we] = ye.facetPartitioning[we] ? ye.facetPartitioning[we] : [], ye.facetPartitioning[Te] = ye.facetPartitioning[Te] ? ye.facetPartitioning[Te] : [], ye.facetPartitioning[te] = ye.facetPartitioning[te] ? ye.facetPartitioning[te] : [], ye.facetPartitioning[Ze] = ye.facetPartitioning[Ze] ? ye.facetPartitioning[Ze] : [], ye.facetPartitioning[Te].push(Me), te != Te && ye.facetPartitioning[te].push(Me), Ze != te && Ze != Te && ye.facetPartitioning[Ze].push(Me), we != Te && we != te && we != Ze && ye.facetPartitioning[we].push(Me)
            }
            if (De && ye && ye.facetPositions) {
              const ee = ye.depthSortedFacets[Me];
              ee.ind = 3 * Me, ee.sqDistance = be.p.DistanceSquared(ye.facetPositions[Me], Ye)
            }
            He[pe] += ke, He[Xe] += qe, He[ze] += fe, He[Be] += ke, He[Ee] += qe, He[ge] += fe, He[Oe] += ke, He[de] += qe, He[We] += fe
          }
          for (Me = 0; Me < He.length / 3; Me++) ke = He[3 * Me], qe = He[3 * Me + 1], fe = He[3 * Me + 2], Te = Math.sqrt(ke * ke + qe * qe + fe * fe), Te = 0 === Te ? 1 : Te, ke /= Te, qe /= Te, fe /= Te, He[3 * Me] = ke, He[3 * Me + 1] = qe, He[3 * Me + 2] = fe
        }
        static _ComputeSides(ie, He, ye, Me, Ke, Ue, Fe) {
          const Je = ye.length,
            oe = Me.length;
          let Re, ke;
          switch (ie = ie || ee.DEFAULTSIDE) {
            case ee.FRONTSIDE:
              break;
            case ee.BACKSIDE:
              for (Re = 0; Re < Je; Re += 3) {
                const ee = ye[Re];
                ye[Re] = ye[Re + 2], ye[Re + 2] = ee
              }
              for (ke = 0; ke < oe; ke++) Me[ke] = -Me[ke];
              break;
            case ee.DOUBLESIDE: {
              const ee = He.length,
                ie = ee / 3;
              for (let ye = 0; ye < ee; ye++) He[ee + ye] = He[ye];
              for (Re = 0; Re < Je; Re += 3) ye[Re + Je] = ye[Re + 2] + ie, ye[Re + 1 + Je] = ye[Re + 1] + ie, ye[Re + 2 + Je] = ye[Re] + ie;
              for (ke = 0; ke < oe; ke++) Me[oe + ke] = -Me[ke];
              const qe = Ke.length;
              let fe;
              for (fe = 0; fe < qe; fe++) Ke[fe + qe] = Ke[fe];
              for (Ue = Ue || new be.s(0, 0, 1, 1), Fe = Fe || new be.s(0, 0, 1, 1), fe = 0, Re = 0; Re < qe / 2; Re++) Ke[fe] = Ue.x + (Ue.z - Ue.x) * Ke[fe], Ke[fe + 1] = Ue.y + (Ue.w - Ue.y) * Ke[fe + 1], Ke[fe + qe] = Fe.x + (Fe.z - Fe.x) * Ke[fe + qe], Ke[fe + qe + 1] = Fe.y + (Fe.w - Fe.y) * Ke[fe + qe + 1], fe += 2;
              break
            }
          }
        }
        static Parse(ie) {
          const He = new ee,
            ye = ie.positions;
          ye && He.set(ye, Me.h.PositionKind);
          const be = ie.normals;
          be && He.set(be, Me.h.NormalKind);
          const Ke = ie.tangents;
          Ke && He.set(Ke, Me.h.TangentKind);
          const Fe = ie.uvs;
          Fe && He.set(Fe, Me.h.UVKind);
          const Je = ie.uvs2;
          Je && He.set(Je, Me.h.UV2Kind);
          const oe = ie.uvs3;
          oe && He.set(oe, Me.h.UV3Kind);
          const Re = ie.uvs4;
          Re && He.set(Re, Me.h.UV4Kind);
          const ke = ie.uvs5;
          ke && He.set(ke, Me.h.UV5Kind);
          const fe = ie.uvs6;
          fe && He.set(fe, Me.h.UV6Kind);
          const Te = ie.colors;
          Te && (He.set(Ue.g.CheckColors4(Te, ye.length / 3), Me.h.ColorKind), void 0 !== ie.hasVertexAlpha && (He.hasVertexAlpha = ie.hasVertexAlpha));
          const pe = ie.matricesIndices;
          pe && He.set(pe, Me.h.MatricesIndicesKind);
          const Xe = ie.matricesWeights;
          Xe && He.set(Xe, Me.h.MatricesWeightsKind);
          const ze = ie.indices;
          ze && (He.indices = ze);
          const Be = ie.materialInfos;
          if (Be) {
            He.materialInfos = [];
            for (const ee of Be) {
              const ie = new qe;
              ie.indexCount = ee.indexCount, ie.indexStart = ee.indexStart, ie.verticesCount = ee.verticesCount, ie.verticesStart = ee.verticesStart, ie.materialIndex = ee.materialIndex, He.materialInfos.push(ie)
            }
          }
          return He
        }
        static ImportVertexData(ie, He) {
          const ye = ee.Parse(ie);
          He.setAllVerticesData(ye, ie.updatable)
        }
      }, (() => {
        const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [Je.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], He = [Je.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], fe = [Je.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Te = [Je.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, ye.i)(ee, null, ie, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: ee => "_TransformVector3Coordinates" in ee,
            get: ee => ee._TransformVector3Coordinates
          },
          metadata: be
        }, null, pe), (0, ye.i)(ee, null, He, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: ee => "_TransformVector3Normals" in ee,
            get: ee => ee._TransformVector3Normals
          },
          metadata: be
        }, null, pe), (0, ye.i)(ee, null, fe, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: ee => "_TransformVector4Normals" in ee,
            get: ee => ee._TransformVector4Normals
          },
          metadata: be
        }, null, pe), (0, ye.i)(ee, null, Te, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: ee => "_FlipFaces" in ee,
            get: ee => ee._FlipFaces
          },
          metadata: be
        }, null, pe), be && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: be
        })
      })(), ee.FRONTSIDE = ((0, ye.l)(ee, pe), 0), ee.BACKSIDE = 1, ee.DOUBLESIDE = 2, ee.DEFAULTSIDE = 0, ee._UniqueIdGenerator = 0, ee
    })()
  },
  41601: (ee, ie, He) => {
    var ye = He(37917),
      be = He(39467),
      Me = He(41429),
      Ke = He(41524),
      Ue = He(41247);
    const Fe = "bakedVertexAnimationSettingsInstanced";

    function Je(ee) {
      const ie = ee.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return ie instanceof Float32Array || ie instanceof Uint16Array
    }

    function oe(ee, ie, He, ye) {
      He.Iee(Number.POSITIVE_INFINITY), ye.Iee(Number.NEGATIVE_INFINITY);
      for (let be = 0; be < 3 * ie; be += 3) {
        const ie = ee[be],
          Me = ee[be + 1],
          Ke = ee[be + 2];
        ie < He.x && (He.x = ie), Me < He.y && (He.y = Me), Ke < He.z && (He.z = Ke), ie > ye.x && (ye.x = ie), Me > ye.y && (ye.y = Me), Ke > ye.z && (ye.z = Ke)
      }
    }

    function Re(ee, ie, He) {
      He && (ee.x -= ee.x * He.x + He.y, ee.y -= ee.y * He.x + He.y, ee.z -= ee.z * He.x + He.y, ie.x += ie.x * He.x + He.y, ie.y += ie.y * He.x + He.y, ie.z += ie.z * He.x + He.y)
    }

    function ke(ee, ie, He, be, Me) {
      const Ke = ye.j.rf[7],
        Ue = ye.j.rf[8];
      for (let Fe = 0; Fe < 2; ++Fe)
        for (let Je = 0; Je < 2; ++Je)
          for (let oe = 0; oe < 2; ++oe) Ke.set(Fe ? ie.x : ee.x, Je ? ie.y : ee.y, oe ? ie.z : ee.z), ye.p.TransformCoordinatesToRef(Ke, He, Ue), be.minimizeInPlace(Ue), Me.maximizeInPlace(Ue)
    }

    function qe(ee, ie, He, be, Me) {
      const Ke = ye.j.rf[7];
      for (let Ue = 0; Ue < 3 * ie; Ue += 3) ye.p.TransformCoordinatesFromFloatsToRef(ee[Ue], ee[Ue + 1], ee[Ue + 2], He, Ke), be.minimizeInPlace(Ke), Me.maximizeInPlace(Ke)
    }
    let fe = !1;
    fe || (fe = !0, Ke.b.prototype.thinInstanceAdd = function(ee) {
      let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.Xx().Nf().getCaps().instancedArrays) return be.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(ee) ? ee.length : 1);
      const He = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(ee))
        for (let ye = 0; ye < ee.length; ++ye) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, ee[ye], ye === ee.length - 1 && ie);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, ee, ie);
      return He
    }, Ke.b.prototype.thinInstanceAddSelf = function() {
      let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(ye.b.IdentityReadOnly, ee)
    }, Ke.b.prototype.thinInstanceRegisterAttribute = function(ee, ie) {
      ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), this.removeVerticesData(ee), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[ee] = ie, this._userThinInstanceBuffersStorage.sizes[ee] = ie * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[ee] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[ee]), this._userThinInstanceBuffersStorage.vertexBuffers[ee] = new Ue.h(this.Nf(), this._userThinInstanceBuffersStorage.data[ee], ee, !0, !1, ie, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[ee])
    }, Ke.b.prototype.thinInstanceSetMatrixAt = function(ee, ie) {
      let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || ee >= this._thinInstanceDataStorage.instancesCount) return !1;
      const ye = this._thinInstanceDataStorage.matrixData;
      return ie.copyToArray(ye, 16 * ee), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[ee] = ie), He && (this.qie("matrix"), this.eT || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Ke.b.prototype.thinInstanceSetAttributeAt = function(ee, ie, He) {
      let ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[ee] || ie >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(ee, 0), this._userThinInstanceBuffersStorage.data[ee].set(He, ie * this._userThinInstanceBuffersStorage.strides[ee]), ye && this.qie(ee), !0)
    }, Object.defineProperty(Ke.b.prototype, "Hie", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(ee) {
        const ie = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        ee <= (ie ? ie.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = ee)
      },
      enumerable: !0,
      configurable: !0
    }), Ke.b.prototype._thinInstanceCreateMatrixBuffer = function(ee, ie) {
      let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const ye = new Ue.b(this.Nf(), ie, !He, 16, !1, !0);
      for (let be = 0; be < 4; be++) this.setVerticesBuffer(ye.createVertexBuffer(ee + be, 4 * be, 4));
      return ye
    }, Ke.b.prototype.Bie = function(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (He = He || 16, "matrix" === ee) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = ie ? ie.length : 32 * He, this._thinInstanceDataStorage.matrixData = ie, this._thinInstanceDataStorage.worldMatrices = null, null !== ie ? (this._thinInstanceDataStorage.instancesCount = ie.length / He, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ie, ye), this.eT || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.eT || this.refreshBoundingInfo());
      else if ("previousMatrix" === ee) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = ie, null !== ie && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ie, ye));
      else if ("splatIndex" === ee && ie) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = ie.length / He, this._userThinInstanceBuffersStorage.data[ee] = ie, this._userThinInstanceBuffersStorage.strides[ee] = He, this._userThinInstanceBuffersStorage.sizes[ee] = ie.length;
        const ye = new Ue.b(this.Nf(), ie, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = ye;
        for (let ie = 0; ie < 4; ie++) this.setVerticesBuffer(ye.createVertexBuffer(ee + ie, 4 * ie, 4))
      } else ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), null === ie ? this._userThinInstanceBuffersStorage?.data[ee] && (this.removeVerticesData(ee), delete this._userThinInstanceBuffersStorage.data[ee], delete this._userThinInstanceBuffersStorage.strides[ee], delete this._userThinInstanceBuffersStorage.sizes[ee], delete this._userThinInstanceBuffersStorage.vertexBuffers[ee]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[ee] = ie, this._userThinInstanceBuffersStorage.strides[ee] = He, this._userThinInstanceBuffersStorage.sizes[ee] = ie.length, this._userThinInstanceBuffersStorage.vertexBuffers[ee] = new Ue.h(this.Nf(), ie, ee, !ye, !1, He, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[ee]))
    }, Ke.b.prototype.qie = function(ee) {
      "matrix" === ee ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(ee), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === ee ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(ee), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === ee ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[ee], 0, this._thinInstanceDataStorage.instancesCount) : (ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[ee] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[ee].isUpdatable() && this._thinInstanceRecreateBuffer(ee), this._userThinInstanceBuffersStorage.vertexBuffers[ee].updateDirectly(this._userThinInstanceBuffersStorage.data[ee], 0)))
    }, Ke.b.prototype.thinInstancePartialBufferUpdate = function(ee, ie, He) {
      if ("matrix" === ee) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof ie ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * He * Float32Array.BYTES_PER_ELEMENT, 16 * ie), 16 * He) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(ie, He));
      else if (ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[ee]) {
        const ye = this._userThinInstanceBuffersStorage.vertexBuffers[ee];
        if ("number" === typeof ie) {
          const ye = new Float32Array(this._userThinInstanceBuffersStorage.data[ee].buffer, this._userThinInstanceBuffersStorage.data[ee].byteOffset + He * this._userThinInstanceBuffersStorage.strides[ee] * Float32Array.BYTES_PER_ELEMENT, ie * this._userThinInstanceBuffersStorage.strides[ee]);
          this._userThinInstanceBuffersStorage.vertexBuffers[ee].updateDirectly(ye, He * this._userThinInstanceBuffersStorage.strides[ee])
        } else ye.updateDirectly(ie, He)
      }
    }, Ke.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const ee = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let ie = 0; ie < this._thinInstanceDataStorage.instancesCount; ++ie) this._thinInstanceDataStorage.worldMatrices[ie] = ye.b.FromArray(ee, 16 * ie)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Ke.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        be = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Ke = this._thinInstanceDataStorage.boundingVectors;
      if (ee || !this.rawBoundingInfo) {
        if (Ke.length = 0, be && function(ee, ie, He) {
            const be = ee._userThinInstanceBuffersStorage,
              Ke = be?.data[Fe],
              fe = be?.strides[Fe];
            if (!Ke || !fe || fe < 4 || !Je(ee)) return !1;
            const Te = ee._thinInstanceDataStorage.matrixData;
            if (!Te) return !1;
            const pe = {},
              Xe = ye.j.Vector4[0],
              ze = ye.j.rf[1],
              Be = ye.j.rf[2],
              Ee = ye.j.rf[3],
              ge = ye.j.rf[4],
              Oe = ye.j.rf[5],
              de = ye.j.rf[6],
              We = ye.j.Matrix[2],
              te = ee.geometry ? ee.geometry.boundingBias : null,
              Ze = ee.getTotalVertices();
            ze.Iee(Number.POSITIVE_INFINITY), Be.Iee(Number.NEGATIVE_INFINITY), Ee.Iee(Number.POSITIVE_INFINITY), ge.Iee(Number.NEGATIVE_INFINITY);
            for (let Me = 0; Me < ee._thinInstanceDataStorage.instancesCount; ++Me) {
              const ie = Me * fe;
              Xe.set(Ke[ie], Ke[ie + 1], Ke[ie + 2], Ke[ie + 3]);
              const be = ee._getData({
                applyMorph: He,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Xe,
                updatePositionsArray: !1,
                cache: pe
              }, null, Ue.h.PositionKind);
              if (!be) return !1;
              oe(be, Ze, Oe, de), Re(Oe, de, te), ze.minimizeInPlace(Oe), Be.maximizeInPlace(de), ye.b.FromArrayToRef(Te, 16 * Me, We), te ? ke(Oe, de, We, Ee, ge) : qe(be, Ze, We, Ee, ge)
            }
            return !(!isFinite(ze.x) || !isFinite(Ee.x)) && (ee.WC().reConstruct(Ee, ge), ee.rawBoundingInfo = new Me.c(ze, Be), function(ee, ie) {
              ee.length = 0;
              for (let He = 0; He < ie.boundingBox.vectors.length; ++He) ee.push(ie.boundingBox.vectors[He].clone())
            }(ie, ee.rawBoundingInfo), ee._updateBoundingInfo(), !0)
          }(this, Ke, He)) return;
        be && this.bakedVertexAnimationManager?.isEnabled && Je(this) ? this.refreshBoundingInfo({
          applySkeleton: ie,
          applyMorph: He,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(ie, He);
        const ee = this.WC();
        this.rawBoundingInfo = new Me.c(ee.minimum, ee.maximum)
      }
      const fe = this.WC(),
        Te = this._thinInstanceDataStorage.matrixData;
      if (0 === Ke.length)
        for (let ye = 0; ye < fe.boundingBox.vectors.length; ++ye) Ke.push(fe.boundingBox.vectors[ye].clone());
      ye.j.rf[0].Iee(Number.POSITIVE_INFINITY), ye.j.rf[1].Iee(Number.NEGATIVE_INFINITY);
      for (let Me = 0; Me < this._thinInstanceDataStorage.instancesCount; ++Me) {
        ye.b.FromArrayToRef(Te, 16 * Me, ye.j.Matrix[0]);
        for (let ee = 0; ee < Ke.length; ++ee) ye.p.TransformCoordinatesToRef(Ke[ee], ye.j.Matrix[0], ye.j.rf[2]), ye.j.rf[0].minimizeInPlace(ye.j.rf[2]), ye.j.rf[1].maximizeInPlace(ye.j.rf[2])
      }
      fe.reConstruct(ye.j.rf[0], ye.j.rf[1]), this._updateBoundingInfo()
    }, Ke.b.prototype._thinInstanceRecreateBuffer = function(ee) {
      let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === ee ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, ie)) : "previousMatrix" === ee ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, ie)) : (ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[ee]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[ee] = new Ue.h(this.Nf(), this._userThinInstanceBuffersStorage.data[ee], ee, !ie, !1, this._userThinInstanceBuffersStorage.strides[ee], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[ee]))
    }, Ke.b.prototype._thinInstanceUpdateBufferSize = function(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind);
      const He = "matrix" === ee;
      if (!He && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[ee])) return;
      const ye = He ? 16 : this._userThinInstanceBuffersStorage.strides[ee],
        be = He ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[ee];
      let Me = He ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[ee];
      const Ke = (this._thinInstanceDataStorage.instancesCount + ie) * ye;
      let Fe = be;
      for (; Fe < Ke;) Fe *= 2;
      if (!Me || be != Fe) {
        if (Me) {
          const ee = new Float32Array(Fe);
          ee.set(Me, 0), Me = ee
        } else Me = new Float32Array(Fe);
        He ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Me, !1), this._thinInstanceDataStorage.matrixData = Me, this._thinInstanceDataStorage.matrixBufferSize = Fe, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Me, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[ee]?.dispose(), this._userThinInstanceBuffersStorage.data[ee] = Me, this._userThinInstanceBuffersStorage.sizes[ee] = Fe, this._userThinInstanceBuffersStorage.vertexBuffers[ee] = new Ue.h(this.Nf(), Me, ee, !0, !1, ye, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[ee]))
      }
    }, Ke.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Ke.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  41559: (ee, ie, He) => {
    He.d(ie, {
      c: () => ze,
      d: () => Te
    });
    var ye, be, Me, Ke, Ue = He(41113),
      Fe = He(41121),
      Je = He(41141),
      oe = He(37931),
      Re = He(37917),
      ke = He(41323),
      qe = He(37949),
      fe = He(40985);
    let Te = (() => {
      var ee;
      let ie, He, ye, be, Me, Ke, qe, fe, Te, pe = ke.d,
        Xe = [],
        ze = [],
        Be = [],
        Ee = [],
        ge = [],
        Oe = [],
        de = [],
        We = [],
        te = [],
        Ze = [],
        we = [],
        De = [],
        Pe = [],
        Ae = [],
        Ye = [],
        Ve = [],
        ae = [],
        ce = [];
      return ee = class extends pe {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(ie) {
          this._billboardMode !== ie && (this._billboardMode = ie, this._cache.useBillboardPosition = 0 !== (this._billboardMode & ee.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(ee) {
          this._infiniteDistance !== ee && (this._infiniteDistance = ee)
        }
        constructor(ie) {
          let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(ie, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Re.p(0, 0, 1), this._up = new Re.p(0, 1, 0), this._right = new Re.p(1, 0, 0), this._position = (0, Ue.l)(this, Xe, Re.p.Zero()), this._rotation = ((0, Ue.l)(this, ze), (0, Ue.l)(this, Be, Re.p.Zero())), this._rotationQuaternion = ((0, Ue.l)(this, Ee), (0, Ue.l)(this, ge, null)), this._scaling = ((0, Ue.l)(this, Oe), (0, Ue.l)(this, de, Re.p.One())), this._transformToBoneReferal = ((0, Ue.l)(this, We), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, Ue.l)(this, te, ee.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, Ue.l)(this, Ze), (0, Ue.l)(this, we, 1)), this._infiniteDistance = ((0, Ue.l)(this, De), (0, Ue.l)(this, Pe, !1)), this.ignoreNonUniformScaling = ((0, Ue.l)(this, Ae), (0, Ue.l)(this, Ye, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, Ue.l)(this, Ve), (0, Ue.l)(this, ae, !1)), this._poseMatrix = ((0, Ue.l)(this, ce), null), this._localMatrix = Re.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Re.p.Zero(), this._absoluteScaling = Re.p.Zero(), this._absoluteRotationQuaternion = Re.f.Identity(), this._pivotMatrix = Re.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new oe.d, this._nonUniformScaling = !1, He && this.Xx().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(ee) {
          this._position = ee, this._markAsDirtyInternal()
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
        set rotation(ee) {
          this._rotation = ee, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get wR() {
          return this._scaling
        }
        set wR(ee) {
          this._scaling = ee, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(ee) {
          this._rotationQuaternion = ee, ee && this._rotation.Iee(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Re.p.TransformNormalFromFloatsToRef(0, 0, this.Xx().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Re.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Re.p.TransformNormalFromFloatsToRef(this.Xx().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(ee) {
          return this._poseMatrix ? (this._poseMatrix.jD(ee), this) : (this._poseMatrix = ee.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Re.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const ie = this._cache;
          return this._billboardMode === ie.billboardMode && this._billboardMode === ee.BILLBOARDMODE_NONE && (!ie.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const ee = this._cache;
          ee.localMatrixUpdated = !1, ee.billboardMode = -1, ee.infiniteDistance = !1, ee.useBillboardPosition = !1
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
        setPreTransformMatrix(ee) {
          return this.setPivotMatrix(ee, !1)
        }
        setPivotMatrix(ee) {
          let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.jD(ee), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = ie, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Re.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            ie = arguments.length > 1 ? arguments[1] : void 0,
            He = arguments.length > 2 ? arguments[2] : void 0;
          const ye = this.clone("Clone of " + (this.name || this.id), ee || this.parent, !0);
          ye && He && He(this, ye);
          for (const be of this.getChildTransformNodes(!0)) be.instantiateHierarchy(ye, ie, He);
          return ye
        }
        RL() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return ee ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Iee(0), this._rotationQuaternion = this._rotationQuaternion || Re.f.Identity(), ee.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = ee, this._absolutePosition.wie(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get AFe() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(ee) {
          if (!ee) return this;
          let ie, He, ye;
          if (void 0 === ee.x) {
            if (arguments.length < 3) return this;
            ie = arguments[0], He = arguments[1], ye = arguments[2]
          } else ie = ee.x, He = ee.y, ye = ee.z;
          if (this.parent) {
            const ee = Re.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(ee), Re.p.TransformCoordinatesFromFloatsToRef(ie, He, ye, ee, this.position)
          } else this.position.x = ie, this.position.y = He, this.position.z = ye;
          return this._absolutePosition.jD(ee), this
        }
        setPositionWithLocalVector(ee) {
          return this.computeWorldMatrix(), this.position = Re.p.TransformNormal(ee, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const ee = Re.j.Matrix[0];
          return this._localMatrix.invertToRef(ee), Re.p.TransformNormal(this.position, ee)
        }
        locallyTranslate(ee) {
          return this.computeWorldMatrix(!0), this.position = Re.p.TransformCoordinates(ee, this._localMatrix), this
        }
        lookAt(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Ke = ee._LookAtVectorCache,
            Ue = 0 === Me ? this.position : this.getAbsolutePosition();
          if (ie.subtractToRef(Ue, Ke), this.setDirection(Ke, He, ye, be), 1 === Me && this.parent)
            if (this.rotationQuaternion) {
              const ee = Re.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(ee);
              const ie = Re.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ie), ie.invert(), ee.multiplyToRef(ie, ee), this.rotationQuaternion.fromRotationMatrix(ee)
            } else {
              const ee = Re.j.Quaternion[0];
              Re.f.FromEulerVectorToRef(this.rotation, ee);
              const ie = Re.j.Matrix[0];
              ee.toRotationMatrix(ie);
              const He = Re.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(He), He.invert(), ie.multiplyToRef(He, ie), ee.fromRotationMatrix(ie), ee.toEulerAnglesToRef(this.rotation)
            } return this
        }
        N_(ee) {
          const ie = Re.p.Zero();
          return this.getDirectionToRef(ee, ie), ie
        }
        getDirectionToRef(ee, ie) {
          return Re.p.TransformNormalToRef(ee, this.getWorldMatrix(), ie), this
        }
        setDirection(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const be = -Math.atan2(ee.z, ee.x) + Math.PI / 2,
            Me = Math.sqrt(ee.x * ee.x + ee.z * ee.z),
            Ke = -Math.atan2(ee.y, Me);
          return this.rotationQuaternion ? Re.f.RotationYawPitchRollToRef(be + ie, Ke + He, ye, this.rotationQuaternion) : (this.rotation.x = Ke + He, this.rotation.y = be + ie, this.rotation.z = ye), this
        }
        setPivotPoint(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.Xx().getRenderId() && this.computeWorldMatrix(!0);
          const He = this.getWorldMatrix();
          if (1 == ie) {
            const ie = Re.j.Matrix[0];
            He.invertToRef(ie), ee = Re.p.TransformCoordinates(ee, ie)
          }
          return this.setPivotMatrix(Re.b.Translation(-ee.x, -ee.y, -ee.z), !0)
        }
        getPivotPoint() {
          const ee = Re.p.Zero();
          return this.getPivotPointToRef(ee), ee
        }
        getPivotPointToRef(ee) {
          return ee.x = -this._pivotMatrix.m[12], ee.y = -this._pivotMatrix.m[13], ee.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const ee = Re.p.Zero();
          return this.getAbsolutePivotPointToRef(ee), ee
        }
        getAbsolutePivotPointToRef(ee) {
          return this.getPivotPointToRef(ee), Re.p.TransformCoordinatesToRef(ee, this.getWorldMatrix(), ee), this
        }
        tye(ee) {
          if (this._isDirty) return this;
          if (this._children)
            for (const ie of this._children) ie.tye(ee);
          return super.tye(ee)
        }
        setParent(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ye = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!ie && !this.parent) return this;
          const be = Re.j.Quaternion[0],
            Me = Re.j.rf[0],
            Ke = Re.j.rf[1],
            Ue = Re.j.Matrix[1];
          Re.b.IdentityToRef(Ue);
          const Fe = Re.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let Je = this.rotationQuaternion;
          return Je || (Je = ee._TmpRotation, Re.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Je)), Re.b.ComposeToRef(this.wR, Je, this.position, Fe), this.parent && Fe.multiplyToRef(this.parent.computeWorldMatrix(!0), Fe), ie && (ie.computeWorldMatrix(!0).invertToRef(Ue), Fe.multiplyToRef(Ue, Fe)), Fe.decompose(Ke, be, Me, He ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.jD(be) : be.toEulerAnglesToRef(this.rotation), this.wR.jD(Ke), this.position.jD(Me), this.parent = ie, ye && this.setPivotMatrix(Re.b.Identity()), this
        }
        addChild(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return ee.setParent(this, ie), this
        }
        removeChild(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return ee.parent !== this || ee.setParent(null, ie), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(ee) {
          return this._nonUniformScaling !== ee && (this._nonUniformScaling = ee, !0)
        }
        attachToBone(ee, ie) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = ie, this.parent = ee, ee.getSkeleton().prepare(!0), ee.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = ee ? this._currentParentWhenAttachingToBone : null, this) : (ee && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(ie, He, ye) {
          let be;
          if (ie.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Iee(0)), ye && 0 !== ye) {
            if (this.parent) {
              const ee = this.parent.getWorldMatrix(),
                ye = Re.j.Matrix[0];
              ee.invertToRef(ye), ie = Re.p.TransformNormal(ie, ye), ee.determinant() < 0 && (He *= -1)
            }
            be = Re.f.RotationAxisToRef(ie, He, ee._RotationAxisCache), be.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else be = Re.f.RotationAxisToRef(ie, He, ee._RotationAxisCache), this.rotationQuaternion.multiplyToRef(be, this.rotationQuaternion);
          return this
        }
        rotateAround(ee, ie, He) {
          ie.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Re.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Iee(0));
          const ye = Re.j.rf[0],
            be = Re.j.rf[1],
            Me = Re.j.rf[2],
            Ke = Re.j.Quaternion[0],
            Ue = Re.j.Matrix[0],
            Fe = Re.j.Matrix[1],
            Je = Re.j.Matrix[2],
            oe = Re.j.Matrix[3];
          return ee.subtractToRef(this.position, ye), Re.b.TranslationToRef(ye.x, ye.y, ye.z, Ue), Re.b.TranslationToRef(-ye.x, -ye.y, -ye.z, Fe), Re.b.RotationAxisToRef(ie, He, Je), Fe.multiplyToRef(Je, oe), oe.multiplyToRef(Ue, oe), oe.decompose(be, Ke, Me), this.position.addInPlace(Me), Ke.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(ee, ie, He) {
          const ye = ee.scale(ie);
          if (He && 0 !== He) this.setAbsolutePosition(this.getAbsolutePosition().add(ye));
          else {
            const ee = this.getPositionExpressedInLocalSpace().add(ye);
            this.setPositionWithLocalVector(ee)
          }
          return this
        }
        addRotation(ee, ie, He) {
          let ye;
          this.rotationQuaternion ? ye = this.rotationQuaternion : (ye = Re.j.Quaternion[1], Re.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, ye));
          const be = Re.j.Quaternion[0];
          return Re.f.RotationYawPitchRollToRef(ie, ee, He, be), ye.multiplyInPlace(be), this.rotationQuaternion || ye.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== ee.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const ye = this.Xx().getRenderId();
          if (!this._isDirty && !ie && (this._currentRenderId === ye || this.isSynchronized())) return this._currentRenderId = ye, this._worldMatrix;
          He = He || this.Xx().activeCamera, this._updateCache();
          const be = this._cache;
          be.pivotMatrixUpdated = !1, be.billboardMode = this.billboardMode, be.infiniteDistance = this.infiniteDistance, be.parent = this._parentNode, this._currentRenderId = ye, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Me = this._getEffectiveParent(),
            Ke = ee._TmpScaling;
          let Ue, Fe = this._position;
          if (this._infiniteDistance && !this.parent && He) {
            const ie = He.getWorldMatrix().m;
            Fe = ee._TmpTranslation, Fe.wie(this._position.x + ie[12], this._position.y + ie[13], this._position.z + ie[14])
          }
          if (Ke.wie(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, Ue = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Re.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.wie(0, 0, 0))
            }
          } else Ue = ee._TmpRotation, Re.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Ue);
          if (this._usePivotMatrix) {
            const ee = Re.j.Matrix[1];
            Re.b.ScalingToRef(Ke.x, Ke.y, Ke.z, ee);
            const ie = Re.j.Matrix[0];
            Ue.toRotationMatrix(ie), this._pivotMatrix.multiplyToRef(ee, Re.j.Matrix[4]), Re.j.Matrix[4].multiplyToRef(ie, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Fe.x, Fe.y, Fe.z)
          } else Re.b.ComposeToRef(Ke, Ue, Fe, this._localMatrix);
          if (Me && Me.getWorldMatrix) {
            if (ie && Me.computeWorldMatrix(ie), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const ee = this.parent;
                ee.getSkeleton().prepare(), ee.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Re.j.Matrix[7])
              } else Re.j.Matrix[7].jD(Me.getWorldMatrix());
              const ie = Re.j.rf[5],
                He = Re.j.rf[6],
                ye = Re.j.Quaternion[0];
              Re.j.Matrix[7].decompose(He, ye, ie), Re.b.ScalingToRef(He.x, He.y, He.z, Re.j.Matrix[7]), Re.j.Matrix[7].setTranslation(ie), ee.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(ye, ie), this._localMatrix.setTranslation(ie)), this._localMatrix.multiplyToRef(Re.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const ee = this.parent;
              ee.getSkeleton().prepare(), this._localMatrix.multiplyToRef(ee.getFinalMatrix(), Re.j.Matrix[6]), Re.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Me.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.jD(this._localMatrix);
          if (He && this.billboardMode)
            if (be.useBillboardPosition) {
              const ie = Re.j.rf[0];
              this._worldMatrix.getTranslationToRef(ie);
              const ye = He.globalPosition;
              this._worldMatrix.invertToRef(Re.j.Matrix[1]);
              const be = Re.j.rf[1];
              Re.p.TransformCoordinatesToRef(ye, Re.j.Matrix[1], be), be.normalize();
              const Me = -Math.atan2(be.z, be.x) + Math.PI / 2,
                Ke = Math.sqrt(be.x * be.x + be.z * be.z),
                Ue = -Math.atan2(be.y, Ke);
              if (Re.f.RotationYawPitchRollToRef(Me, Ue, 0, Re.j.Quaternion[0]), (this.billboardMode & ee.BILLBOARDMODE_ALL) !== ee.BILLBOARDMODE_ALL) {
                const ie = Re.j.rf[1];
                Re.j.Quaternion[0].toEulerAnglesToRef(ie), (this.billboardMode & ee.BILLBOARDMODE_X) !== ee.BILLBOARDMODE_X && (ie.x = 0), (this.billboardMode & ee.BILLBOARDMODE_Y) !== ee.BILLBOARDMODE_Y && (ie.y = 0), (this.billboardMode & ee.BILLBOARDMODE_Z) !== ee.BILLBOARDMODE_Z && (ie.z = 0), Re.b.RotationYawPitchRollToRef(ie.y, ie.x, ie.z, Re.j.Matrix[0])
              } else Re.b.FromQuaternionToRef(Re.j.Quaternion[0], Re.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Re.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Re.j.rf[0])
            } else {
              const ie = Re.j.rf[0];
              this._worldMatrix.getTranslationToRef(ie), Re.j.Matrix[1].jD(He.getViewMatrix());
              const ye = this.Xx().useRightHandedSystem;
              if (ye && Re.j.Matrix[1].multiplyToRef(ee._TmpRHRestore, Re.j.Matrix[1]), Re.j.Matrix[1].setTranslationFromFloats(0, 0, 0), Re.j.Matrix[1].invertToRef(Re.j.Matrix[0]), (this.billboardMode & ee.BILLBOARDMODE_ALL) !== ee.BILLBOARDMODE_ALL) {
                Re.j.Matrix[0].decompose(void 0, Re.j.Quaternion[0], void 0);
                const ie = Re.j.rf[1];
                Re.j.Quaternion[0].toEulerAnglesToRef(ie), (this.billboardMode & ee.BILLBOARDMODE_X) !== ee.BILLBOARDMODE_X && (ie.x = 0), (this.billboardMode & ee.BILLBOARDMODE_Y) !== ee.BILLBOARDMODE_Y && (ie.y = 0), (this.billboardMode & ee.BILLBOARDMODE_Z) !== ee.BILLBOARDMODE_Z && (ie.z = 0), ye && (ie.y += Math.PI), Re.b.RotationYawPitchRollToRef(ie.y, ie.x, ie.z, Re.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Re.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Re.j.rf[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Me && Me._nonUniformScaling ? this._updateNonUniformScalingState(Me._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.wie(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Re.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), ee) {
            const ee = this.getChildren();
            for (let ie = 0; ie < ee.length; ++ie) {
              const He = ee[ie];
              if (He) {
                He.computeWorldMatrix();
                const ee = Re.j.Matrix[0];
                He._localMatrix.multiplyToRef(this._localMatrix, ee);
                const ie = Re.j.Quaternion[0];
                ee.decompose(He.wR, ie, He.position), He.rotationQuaternion ? He.rotationQuaternion.jD(ie) : ie.toEulerAnglesToRef(He.rotation)
              }
            }
          }
          this.wR.wie(1, 1, 1), this.position.wie(0, 0, 0), this.rotation.wie(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Re.f.Identity()), this._worldMatrix = Re.b.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(ee) {
          return this.onAfterWorldMatrixUpdateObservable.add(ee), this
        }
        unregisterAfterWorldMatrixUpdate(ee) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(ee), this
        }
        getPositionInCameraSpace() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return ee || (ee = this.Xx().activeCamera), Re.p.TransformCoordinates(this.getAbsolutePosition(), ee.getViewMatrix())
        }
        getDistanceToCamera() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return ee || (ee = this.Xx().activeCamera), this.getAbsolutePosition().subtract(ee.globalPosition).length()
        }
        clone(ie, He, ye) {
          const be = Je.c.Clone((() => new ee(ie, this.Xx())), this);
          if (be.name = ie, be.id = ie, He && (be.parent = He), !ye) {
            const ee = this.getDescendants(!0);
            for (let He = 0; He < ee.length; He++) {
              const ye = ee[He];
              ye.clone && ye.clone(ie + "." + ye.name, be)
            }
          }
          return be
        }
        serialize(ee) {
          const ie = Je.c.Serialize(this, ee);
          return ie.type = this.getClassName(), ie.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(ie), ie.localMatrix = this.getPivotMatrix().Qbe(), ie.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (ie.RL = !0), Je.c.AppendSerializedAnimations(this, ie), ie.zp = this.serializeAnimationRanges(), ie
        }
        getChildTransformNodes(ie, He) {
          const ye = [];
          return this._getDescendants(ye, ie, (ie => (!He || He(ie)) && ie instanceof ee)), ye
        }
        dispose(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.Xx().stopAnimation(this), this.Xx().removeTransformNode(this), this._parentContainer) {
            const ee = this._parentContainer.transformNodes.indexOf(this);
            ee > -1 && this._parentContainer.transformNodes.splice(ee, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), ee) {
            const ee = this.getChildTransformNodes(!0);
            for (const ie of ee) ie.parent = null, ie.computeWorldMatrix(!0)
          }
          super.dispose(ee, ie)
        }
        normalizeToUnitCube() {
          let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            He = arguments.length > 2 ? arguments[2] : void 0,
            ye = null,
            be = null;
          ie && (this.rotationQuaternion ? (be = this.rotationQuaternion.clone(), this.rotationQuaternion.wie(0, 0, 0, 1)) : this.rotation && (ye = this.rotation.clone(), this.rotation.wie(0, 0, 0)));
          const Me = this.getHierarchyBoundingVectors(ee, He),
            Ke = Me.max.subtract(Me.min),
            Ue = Math.max(Ke.x, Ke.y, Ke.z);
          if (0 === Ue) return this;
          const Fe = 1 / Ue;
          return this.wR.scaleInPlace(Fe), ie && (this.rotationQuaternion && be ? this.rotationQuaternion.jD(be) : this.rotation && ye && this.rotation.jD(ye)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Je = "function" === typeof Symbol && Symbol.metadata ? Object.create(pe[Symbol.metadata] ?? null) : void 0;
        ie = [(0, Fe.P)("position")], He = [(0, Fe.P)("rotation")], ye = [(0, Fe.F)("rotationQuaternion")], be = [(0, Fe.P)("wR")], Me = [(0, Fe.R)("billboardMode")], Ke = [(0, Fe.R)()], qe = [(0, Fe.R)("infiniteDistance")], fe = [(0, Fe.R)()], Te = [(0, Fe.R)()], (0, Ue.i)(null, null, ie, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: ee => "_position" in ee,
            get: ee => ee._position,
            set: (ee, ie) => {
              ee._position = ie
            }
          },
          metadata: Je
        }, Xe, ze), (0, Ue.i)(null, null, He, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: ee => "_rotation" in ee,
            get: ee => ee._rotation,
            set: (ee, ie) => {
              ee._rotation = ie
            }
          },
          metadata: Je
        }, Be, Ee), (0, Ue.i)(null, null, ye, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: ee => "_rotationQuaternion" in ee,
            get: ee => ee._rotationQuaternion,
            set: (ee, ie) => {
              ee._rotationQuaternion = ie
            }
          },
          metadata: Je
        }, ge, Oe), (0, Ue.i)(null, null, be, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: ee => "_scaling" in ee,
            get: ee => ee._scaling,
            set: (ee, ie) => {
              ee._scaling = ie
            }
          },
          metadata: Je
        }, de, We), (0, Ue.i)(null, null, Me, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "_billboardMode" in ee,
            get: ee => ee._billboardMode,
            set: (ee, ie) => {
              ee._billboardMode = ie
            }
          },
          metadata: Je
        }, te, Ze), (0, Ue.i)(null, null, Ke, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: ee => "scalingDeterminant" in ee,
            get: ee => ee.scalingDeterminant,
            set: (ee, ie) => {
              ee.scalingDeterminant = ie
            }
          },
          metadata: Je
        }, we, De), (0, Ue.i)(null, null, qe, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: ee => "_infiniteDistance" in ee,
            get: ee => ee._infiniteDistance,
            set: (ee, ie) => {
              ee._infiniteDistance = ie
            }
          },
          metadata: Je
        }, Pe, Ae), (0, Ue.i)(null, null, fe, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: ee => "ignoreNonUniformScaling" in ee,
            get: ee => ee.ignoreNonUniformScaling,
            set: (ee, ie) => {
              ee.ignoreNonUniformScaling = ie
            }
          },
          metadata: Je
        }, Ye, Ve), (0, Ue.i)(null, null, Te, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: ee => "reIntegrateRotationIntoRotationQuaternion" in ee,
            get: ee => ee.reIntegrateRotationIntoRotationQuaternion,
            set: (ee, ie) => {
              ee.reIntegrateRotationIntoRotationQuaternion = ie
            }
          },
          metadata: Je
        }, ae, ce), Je && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Je
        })
      })(), ee.BILLBOARDMODE_NONE = 0, ee.BILLBOARDMODE_X = 1, ee.BILLBOARDMODE_Y = 2, ee.BILLBOARDMODE_Z = 4, ee.BILLBOARDMODE_ALL = 7, ee.BILLBOARDMODE_USE_POSITION = 128, ee.BillboardUseParentOrientation = !1, ee._TmpRotation = Re.f.Zero(), ee._TmpScaling = Re.p.Zero(), ee._TmpTranslation = Re.p.Zero(), ee._TmpRHRestore = Re.b.Scaling(1, 1, -1), ee._LookAtVectorCache = new Re.p(0, 0, 0), ee._RotationAxisCache = new Re.f, ee
    })();

    function pe(ee, ie, He) {
      const ye = Je.c.Parse((() => new Te(ee.name, ie)), ee, ie, He);
      if (ee.localMatrix ? ye.setPreTransformMatrix(Re.b.FromArray(ee.localMatrix)) : ee.pivotMatrix && ye.setPivotMatrix(Re.b.FromArray(ee.pivotMatrix)), ye.JY(ee.isEnabled), ye._waitingParsedUniqueId = ee.uniqueId, void 0 !== ee.parentId && (ye._waitingParentId = ee.parentId), void 0 !== ee.parentInstanceIndex && (ye._waitingParentInstanceIndex = ee.parentInstanceIndex), ee.RL && (ye._waitingFreezeWorldMatrix = ee.RL), ee.animations) {
        for (let ie = 0; ie < ee.animations.length; ie++) {
          const He = ee.animations[ie],
            be = (0, qe.c)("BABYLON.Animation");
          be && ye.animations.push(be.Parse(He))
        }
        ke.d.ParseAnimationRanges(ye, ee, ie)
      }
      return ee.autoAnimate && ie.beginAnimation(ye, ee.autoAnimateFrom, ee.autoAnimateTo, ee.autoAnimateLoop, ee.autoAnimateSpeed || 1), ye
    }
    let Xe = !1;

    function ze() {
      Xe || (Xe = !0, Te.Parse = pe)
    }(ye = Te.prototype).XN ?? (ye.XN = (0, fe.h)("TransformNode", "XN")), (be = Te.prototype).applyImpulse ?? (be.applyImpulse = (0, fe.h)("TransformNode", "applyImpulse")), (Me = Te.prototype).applyAngularImpulse ?? (Me.applyAngularImpulse = (0, fe.h)("TransformNode", "applyAngularImpulse")), (Ke = Te.prototype).applyTorque ?? (Ke.applyTorque = (0, fe.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Te.prototype, "physicsBody") || Object.defineProperty(Te.prototype, "physicsBody", (0, fe.d)("TransformNode", "physicsBody"))
  },
  41532: (ee, ie, He) => {
    function ye(ee, ie, He) {
      try {
        const ye = ee.next();
        ye.done ? ie(ye) : ye.value ? ye.value.then((() => {
          ye.value = void 0, ie(ye)
        }), He) : ie(ye)
      } catch (ye) {
        He(ye)
      }
    }

    function be() {
      let ee, ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (He, be, Me) => {
        const Ke = performance.now();
        void 0 === ee || Ke - ee > ie ? (ee = Ke, setTimeout((() => {
          ye(He, be, Me)
        }), 0)) : ye(He, be, Me)
      }
    }

    function Me(ee, ie, He, ye, be) {
      const Me = () => {
        let Ke;
        const Ue = ee => {
          ee.done ? He(ee.value) : void 0 === Ke ? Ke = !0 : Me()
        };
        do {
          Ke = void 0, be && be.aborted ? ye(new Error("Aborted")) : ie(ee, Ue, ye), void 0 === Ke && (Ke = !1)
        } while (Ke)
      };
      Me()
    }

    function Ke(ee, ie) {
      let He;
      return Me(ee, ye, (ee => He = ee), (ee => {
        throw ee
      }), ie), He
    }
    async function Ue(ee, ie, He) {
      return await new Promise(((ye, be) => {
        Me(ee, ie, ye, be, He)
      }))
    }

    function Fe(ee, ie) {
      return function() {
        return Ke(ee(...arguments), ie)
      }
    }
    He.d(ie, {
      e: () => be,
      i: () => Fe,
      m: () => Ue,
      q: () => Ke
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);