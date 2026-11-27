export const id = 292;
export const ids = [292];
export const modules = {
  44789: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    class ye {}
    ye.AUTOSAMPLERSUFFIX = "Sampler", ye.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", ye.ALPHA_DISABLE = 0, ye.ALPHA_ADD = 1, ye.ALPHA_COMBINE = 2, ye.ALPHA_SUBTRACT = 3, ye.ALPHA_MULTIPLY = 4, ye.ALPHA_MAXIMIZED = 5, ye.ALPHA_ONEONE = 6, ye.ALPHA_PREMULTIPLIED = 7, ye.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, ye.ALPHA_INTERPOLATE = 9, ye.ALPHA_SCREENMODE = 10, ye.ALPHA_ONEONE_ONEONE = 11, ye.ALPHA_ALPHATOCOLOR = 12, ye.ALPHA_REVERSEONEMINUS = 13, ye.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, ye.ALPHA_ONEONE_ONEZERO = 15, ye.ALPHA_EXCLUSION = 16, ye.ALPHA_LAYER_ACCUMULATE = 17, ye.ALPHA_MIN = 18, ye.ALPHA_MAX = 19, ye.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, ye.ALPHA_REPLACE_COLOR = 21, ye.ALPHA_EQUATION_ADD = 0, ye.ALPHA_EQUATION_SUBSTRACT = 1, ye.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, ye.ALPHA_EQUATION_MAX = 3, ye.ALPHA_EQUATION_MIN = 4, ye.ALPHA_EQUATION_DARKEN = 5, ye.DELAYLOADSTATE_NONE = 0, ye.DELAYLOADSTATE_LOADED = 1, ye.DELAYLOADSTATE_LOADING = 2, ye.DELAYLOADSTATE_NOTLOADED = 4, ye.NEVER = 512, ye.ALWAYS = 519, ye.LESS = 513, ye.EQUAL = 514, ye.LEQUAL = 515, ye.GREATER = 516, ye.GEQUAL = 518, ye.NOTEQUAL = 517, ye.KEEP = 7680, ye.ZERO = 0, ye.REPLACE = 7681, ye.INCR = 7682, ye.DECR = 7683, ye.INVERT = 5386, ye.INCR_WRAP = 34055, ye.DECR_WRAP = 34056, ye.TEXTURE_CLAMP_ADDRESSMODE = 0, ye.TEXTURE_WRAP_ADDRESSMODE = 1, ye.TEXTURE_MIRROR_ADDRESSMODE = 2, ye.TEXTURE_REPETITION_NONE = 0, ye.TEXTURE_REPETITION_NOISE_BLEND = 1, ye.TEXTURE_REPETITION_HEX_TILING = 2, ye.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, ye.TEXTURE_REPETITION_VORONOI_BOMBING = 4, ye.TEXTURE_CREATIONFLAG_STORAGE = 1, ye.TEXTUREFORMAT_ALPHA = 0, ye.TEXTUREFORMAT_LUMINANCE = 1, ye.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, ye.TEXTUREFORMAT_RGB = 4, ye.TEXTUREFORMAT_RGBA = 5, ye.TEXTUREFORMAT_RED = 6, ye.TEXTUREFORMAT_R = 6, ye.TEXTUREFORMAT_R16_UNORM = 33322, ye.TEXTUREFORMAT_RG16_UNORM = 33324, ye.TEXTUREFORMAT_RGB16_UNORM = 32852, ye.TEXTUREFORMAT_RGBA16_UNORM = 32859, ye.TEXTUREFORMAT_R16_SNORM = 36760, ye.TEXTUREFORMAT_RG16_SNORM = 36761, ye.TEXTUREFORMAT_RGB16_SNORM = 36762, ye.TEXTUREFORMAT_RGBA16_SNORM = 36763, ye.TEXTUREFORMAT_RG = 7, ye.TEXTUREFORMAT_RED_INTEGER = 8, ye.TEXTUREFORMAT_R_INTEGER = 8, ye.TEXTUREFORMAT_RG_INTEGER = 9, ye.TEXTUREFORMAT_RGB_INTEGER = 10, ye.TEXTUREFORMAT_RGBA_INTEGER = 11, ye.TEXTUREFORMAT_BGRA = 12, ye.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, ye.TEXTUREFORMAT_DEPTH32_FLOAT = 14, ye.TEXTUREFORMAT_DEPTH16 = 15, ye.TEXTUREFORMAT_DEPTH24 = 16, ye.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, ye.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, ye.TEXTUREFORMAT_STENCIL8 = 19, ye.TEXTUREFORMAT_UNDEFINED = 4294967295, ye.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, ye.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, ye.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, ye.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, ye.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, ye.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, ye.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, ye.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, ye.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, ye.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, ye.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, ye.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, ye.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, ye.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, ye.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, ye.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, ye.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, ye.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, ye.TEXTURETYPE_UNSIGNED_BYTE = 0, ye.TEXTURETYPE_UNSIGNED_INT = 0, ye.TEXTURETYPE_FLOAT = 1, ye.TEXTURETYPE_HALF_FLOAT = 2, ye.TEXTURETYPE_BYTE = 3, ye.TEXTURETYPE_SHORT = 4, ye.TEXTURETYPE_UNSIGNED_SHORT = 5, ye.TEXTURETYPE_INT = 6, ye.TEXTURETYPE_UNSIGNED_INTEGER = 7, ye.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, ye.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, ye.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, ye.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, ye.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, ye.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, ye.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, ye.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, ye.TEXTURETYPE_UNDEFINED = 16, ye.TEXTURE_2D = 3553, ye.TEXTURE_2D_ARRAY = 35866, ye.TEXTURE_CUBE_MAP = 34067, ye.TEXTURE_CUBE_MAP_ARRAY = 3735928559, ye.TEXTURE_3D = 32879, ye.TEXTURE_NEAREST_SAMPLINGMODE = 1, ye.TEXTURE_NEAREST_NEAREST = 1, ye.TEXTURE_BILINEAR_SAMPLINGMODE = 2, ye.TEXTURE_LINEAR_LINEAR = 2, ye.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, ye.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, ye.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, ye.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, ye.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, ye.TEXTURE_NEAREST_LINEAR = 7, ye.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, ye.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, ye.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, ye.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, ye.TEXTURE_LINEAR_NEAREST = 12, ye.TEXTURE_EXPLICIT_MODE = 0, ye.TEXTURE_SPHERICAL_MODE = 1, ye.TEXTURE_PLANAR_MODE = 2, ye.TEXTURE_CUBIC_MODE = 3, ye.TEXTURE_PROJECTION_MODE = 4, ye.TEXTURE_SKYBOX_MODE = 5, ye.TEXTURE_INVCUBIC_MODE = 6, ye.TEXTURE_EQUIRECTANGULAR_MODE = 7, ye.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, ye.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, ye.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, ye.TEXTURE_FILTERING_QUALITY_HIGH = 64, ye.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, ye.TEXTURE_FILTERING_QUALITY_LOW = 8, ye.SCALEMODE_FLOOR = 1, ye.SCALEMODE_NEAREST = 2, ye.SCALEMODE_CEILING = 3, ye.MATERIAL_TextureDirtyFlag = 1, ye.MATERIAL_LightDirtyFlag = 2, ye.MATERIAL_FresnelDirtyFlag = 4, ye.MATERIAL_AttributesDirtyFlag = 8, ye.MATERIAL_MiscDirtyFlag = 16, ye.MATERIAL_PrePassDirtyFlag = 32, ye.MATERIAL_ImageProcessingDirtyFlag = 64, ye.MATERIAL_AllDirtyFlag = 127, ye.MATERIAL_TriangleFillMode = 0, ye.MATERIAL_WireFrameFillMode = 1, ye.MATERIAL_PointFillMode = 2, ye.MATERIAL_PointListDrawMode = 3, ye.MATERIAL_LineListDrawMode = 4, ye.MATERIAL_LineLoopDrawMode = 5, ye.MATERIAL_LineStripDrawMode = 6, ye.MATERIAL_TriangleStripDrawMode = 7, ye.MATERIAL_TriangleFanDrawMode = 8, ye.MATERIAL_ClockWiseSideOrientation = 0, ye.MATERIAL_CounterClockWiseSideOrientation = 1, ye.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, ye.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, ye.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, ye.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, ye.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, ye.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, ye.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, ye.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, ye.ACTION_NothingTrigger = 0, ye.ACTION_OnPickTrigger = 1, ye.ACTION_OnLeftPickTrigger = 2, ye.ACTION_OnRightPickTrigger = 3, ye.ACTION_OnCenterPickTrigger = 4, ye.ACTION_OnPickDownTrigger = 5, ye.ACTION_OnDoublePickTrigger = 6, ye.ACTION_OnPickUpTrigger = 7, ye.ACTION_OnPickOutTrigger = 16, ye.ACTION_OnLongPressTrigger = 8, ye.ACTION_OnPointerOverTrigger = 9, ye.ACTION_OnPointerOutTrigger = 10, ye.ACTION_OnEveryFrameTrigger = 11, ye.ACTION_OnIntersectionEnterTrigger = 12, ye.ACTION_OnIntersectionExitTrigger = 13, ye.ACTION_OnKeyDownTrigger = 14, ye.ACTION_OnKeyUpTrigger = 15, ye.PARTICLES_BILLBOARDMODE_Y = 2, ye.PARTICLES_BILLBOARDMODE_ALL = 7, ye.PARTICLES_BILLBOARDMODE_STRETCHED = 8, ye.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, ye.MESHES_CULLINGSTRATEGY_STANDARD = 0, ye.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, ye.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, ye.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, ye.SCENELOADER_NO_LOGGING = 0, ye.SCENELOADER_MINIMAL_LOGGING = 1, ye.SCENELOADER_SUMMARY_LOGGING = 2, ye.SCENELOADER_DETAILED_LOGGING = 3, ye.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, ye.PREPASS_POSITION_TEXTURE_TYPE = 1, ye.PREPASS_VELOCITY_TEXTURE_TYPE = 2, ye.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, ye.PREPASS_COLOR_TEXTURE_TYPE = 4, ye.PREPASS_DEPTH_TEXTURE_TYPE = 5, ye.PREPASS_NORMAL_TEXTURE_TYPE = 6, ye.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, ye.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, ye.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, ye.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, ye.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, ye.PREPASS_ALBEDO_TEXTURE_TYPE = 12, ye.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, ye.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, ye.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, ye.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, ye.BUFFER_CREATIONFLAG_READ = 1, ye.BUFFER_CREATIONFLAG_WRITE = 2, ye.BUFFER_CREATIONFLAG_READWRITE = 3, ye.BUFFER_CREATIONFLAG_UNIFORM = 4, ye.BUFFER_CREATIONFLAG_VERTEX = 8, ye.BUFFER_CREATIONFLAG_INDEX = 16, ye.BUFFER_CREATIONFLAG_STORAGE = 32, ye.BUFFER_CREATIONFLAG_INDIRECT = 64, ye.RENDERPASS_MAIN = 0, ye.INPUT_ALT_KEY = 18, ye.INPUT_CTRL_KEY = 17, ye.INPUT_META_KEY1 = 91, ye.INPUT_META_KEY2 = 92, ye.INPUT_META_KEY3 = 93, ye.INPUT_SHIFT_KEY = 16, ye.SNAPSHOTRENDERING_STANDARD = 0, ye.SNAPSHOTRENDERING_FAST = 1, ye.PERSPECTIVE_CAMERA = 0, ye.ORTHOGRAPHIC_CAMERA = 1, ye.FOVMODE_VERTICAL_FIXED = 0, ye.FOVMODE_HORIZONTAL_FIXED = 1, ye.RIG_MODE_NONE = 0, ye.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, ye.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, ye.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, ye.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, ye.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, ye.RIG_MODE_VR = 20, ye.RIG_MODE_CUSTOM = 22, ye.MAX_SUPPORTED_UV_SETS = 6, ye.GL_ALPHA_EQUATION_ADD = 32774, ye.GL_ALPHA_EQUATION_MIN = 32775, ye.GL_ALPHA_EQUATION_MAX = 32776, ye.GL_ALPHA_EQUATION_SUBTRACT = 32778, ye.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, ye.GL_ALPHA_FUNCTION_SRC = 768, ye.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, ye.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, ye.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, ye.GL_ALPHA_FUNCTION_DST_ALPHA = 772, ye.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, ye.GL_ALPHA_FUNCTION_DST_COLOR = 774, ye.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, ye.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, ye.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, ye.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, ye.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, ye.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, ye.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, ye.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, ye.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, ye.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, ye.SnippetUrl = "https://snippet.babylonjs.com", ye.FOGMODE_NONE = 0, ye.FOGMODE_EXP = 1, ye.FOGMODE_EXP2 = 2, ye.FOGMODE_LINEAR = 3, ye.BYTE = 5120, ye.UNSIGNED_BYTE = 5121, ye.SHORT = 5122, ye.UNSIGNED_SHORT = 5123, ye.INT = 5124, ye.UNSIGNED_INT = 5125, ye.FLOAT = 5126, ye.HALF_FLOAT = 5131, ye.PositionKind = "position", ye.NormalKind = "normal", ye.TangentKind = "tangent", ye.UVKind = "uv", ye.UV2Kind = "uv2", ye.UV3Kind = "uv3", ye.UV4Kind = "uv4", ye.UV5Kind = "uv5", ye.UV6Kind = "uv6", ye.ColorKind = "color", ye.ColorInstanceKind = "instanceColor", ye.MatricesIndicesKind = "matricesIndices", ye.MatricesWeightsKind = "matricesWeights", ye.MatricesIndicesExtraKind = "matricesIndicesExtra", ye.MatricesWeightsExtraKind = "matricesWeightsExtra", ye.ANIMATIONTYPE_FLOAT = 0, ye.ANIMATIONTYPE_VECTOR3 = 1, ye.ANIMATIONTYPE_QUATERNION = 2, ye.ANIMATIONTYPE_MATRIX = 3, ye.ANIMATIONTYPE_COLOR3 = 4, ye.ANIMATIONTYPE_COLOR4 = 7, ye.ANIMATIONTYPE_VECTOR2 = 5, ye.ANIMATIONTYPE_SIZE = 6, ye.ShadowMinZ = 0, ye.ShadowMaxZ = 1e4, ye.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, ye.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  44762: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37917),
      Ke = He(41374),
      Ue = He(41330);
    let Fe = (() => {
      var ee;
      let ie, He, Fe, Je, oe = Ke.e,
        Re = [];
      return ee = class extends oe {
        constructor() {
          super(...arguments), this._position = (0, ye.l)(this, Re), this._needProjectionMatrixCompute = !0, this._viewMatrix = Me.b.Identity(), this._projectionMatrix = Me.b.Identity()
        }
        _setPosition(ee) {
          this._position = ee
        }
        get position() {
          return this._position
        }
        set position(ee) {
          this._setPosition(ee)
        }
        _setDirection(ee) {
          this._direction = ee
        }
        get direction() {
          return this._direction
        }
        set direction(ee) {
          this._setDirection(ee)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(ee) {
          this._shadowMinZ = ee, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(ee) {
          this._shadowMaxZ = ee, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = Me.p.Zero()), Me.p.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = Me.p.Zero()), Me.p.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(ee) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(ee) {
          return this.direction = Me.p.Normalize(ee.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const ee = Me.p.Cross(this.direction, Ue.d.Y),
            ie = Me.p.Cross(ee, this.direction);
          return Me.p.RotationFromAxis(ee, ie, this.direction)
        }
        needCube() {
          return !1
        }
        needProjectionMatrixCompute() {
          return this._needProjectionMatrixCompute
        }
        forceProjectionMatrixCompute() {
          this._needProjectionMatrixCompute = !0
        }
        _initCache() {
          super._initCache(), this._cache.position = Me.p.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(ee) {
          return !ee && this.isSynchronized() ? (this._currentRenderId = this.Xx().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.jD(this.position), this._worldMatrix || (this._worldMatrix = Me.b.Identity()), Me.b.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(ee) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : ee?.minZ || 0
        }
        getDepthMaxZ(ee) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : ee?.maxZ || 1e4
        }
        setShadowProjectionMatrix(ee, ie, He) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(ie, He, ee) : this._setDefaultShadowProjectionMatrix(ee, ie, He), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(ee) {
          const ie = Me.j.rf[0];
          let He = this.position;
          this.computeTransformedInformation() && (He = this.transformedPosition), Me.p.NormalizeToRef(this.getShadowDirection(ee), ie), 1 === Math.abs(Me.p.Dot(ie, Me.p.Up())) && (ie.z = 1e-13);
          const ye = Me.j.rf[1];
          return He.addToRef(ie, ye), Me.b.LookAtLHToRef(He, ye, Me.p.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(ee, ie) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, ee ?? this._viewMatrix, ie ?? []), this._projectionMatrix
        }
      }, (() => {
        const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(oe[Symbol.metadata] ?? null) : void 0;
        ie = [(0, be.P)()], He = [(0, be.P)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], (0, ye.i)(ee, null, ie, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: ee => "position" in ee,
            get: ee => ee.position
          },
          metadata: Me
        }, null, Re), (0, ye.i)(ee, null, He, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: ee => "direction" in ee,
            get: ee => ee.direction
          },
          metadata: Me
        }, null, Re), (0, ye.i)(ee, null, Fe, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: ee => "shadowMinZ" in ee,
            get: ee => ee.shadowMinZ
          },
          metadata: Me
        }, null, Re), (0, ye.i)(ee, null, Je, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: ee => "shadowMaxZ" in ee,
            get: ee => ee.shadowMaxZ
          },
          metadata: Me
        }, null, Re), Me && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Me
        })
      })(), ee
    })()
  },
  44783: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(41593);
    class be extends ye.e {
      constructor(ee, ie, He, be, Me) {
        let Ke = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ue = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Fe = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          Je = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          oe = arguments.length > 9 ? arguments[9] : void 0,
          Re = arguments.length > 10 ? arguments[10] : void 0,
          ke = arguments.length > 11 ? arguments[11] : void 0,
          qe = arguments.length > 12 ? arguments[12] : void 0;
        super(null, Me, !Ke, Ue, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, oe), this.format = be, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Je || (Fe = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Je || (Fe = 1), this._texture = this._engine.createRawTexture(ee, ie, He, be, Ke, Ue, Fe, null, Je, oe ?? 0, Re ?? !1, qe), this.wrapU = ye.e.CLAMP_ADDRESSMODE, this.wrapV = ye.e.CLAMP_ADDRESSMODE, this._waitingForData = !!ke && !ee)
      }
      update(ee) {
        this.updateMipLevel(ee, 0)
      }
      updateMipLevel(ee, ie) {
        this._getEngine().updateRawTexture(this._texture, ee, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, ie), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const ee = new be(null, this.getSize().width, this.getSize().height, this.format, this.Xx(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return ee._texture = this._texture, this._texture.incrementReferences(), ee
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(ee, ie, He, ye) {
        return new be(ee, ie, He, 1, ye, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(ee, ie, He, ye) {
        return new be(ee, ie, He, 2, ye, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(ee, ie, He, ye) {
        return new be(ee, ie, He, 0, ye, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(ee, ie, He, ye) {
        return new be(ee, ie, He, 4, ye, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(ee, ie, He, ye) {
        return new be(ee, ie, He, 5, ye, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(ee, ie, He, ye) {
        return new be(ee, ie, He, 5, ye, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(ee, ie, He, Me) {
        let Ke = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ue = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Fe = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ye.e.TRILINEAR_SAMPLINGMODE;
        return new be(ee, ie, He, 6, Me, Ke, Ue, Fe, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(ee, ie, He, Me) {
        let Ke = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ue = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Fe = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ye.e.TRILINEAR_SAMPLINGMODE;
        return new be(ee, ie, He, 6, Me, Ke, Ue, Fe, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  44815: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye.b
    });
    var ye = He(41556);
    (0, ye.c)()
  },
  44769: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye.b
    });
    var ye = He(41575);
    (0, ye.d)()
  },
  41575: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      d: () => Te
    });
    var ye, be, Me = He(38022),
      Ke = He(41247),
      Ue = He(41524),
      Fe = He(41581),
      Je = He(41414),
      oe = He(41585),
      Re = He(40985);
    class ke extends Ue.b {
      _isShaderMaterial(ee) {
        return !!ee && "ShaderMaterial" === ee.getClassName()
      }
      constructor(ee) {
        let ie = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ye = arguments.length > 5 ? arguments[5] : void 0,
          be = arguments.length > 6 ? arguments[6] : void 0,
          Ue = arguments.length > 7 ? arguments[7] : void 0;
        super(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ie, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = ye, this.useVertexAlpha = be, this.color = new Me.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ie && (this.color = ie.color.clone(), this.alpha = ie.alpha, this.useVertexColor = ie.useVertexColor, this.useVertexAlpha = ie.useVertexAlpha), this.intersectionThreshold = .1;
        const Fe = {
          attributes: [Ke.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Fe.defines.push("#define VERTEXALPHA") : Fe.needAlphaBlending = !1, this.useVertexColor ? (Fe.defines.push("#define VERTEXCOLOR"), Fe.attributes.push(Ke.h.ColorKind)) : (Fe.uniforms.push("color"), this._color4 = new Me.g), Ue) this.material = Ue;
        else {
          this.Xx().Nf().isWebGPU && !ke.ForceGLSL && (this._shaderLanguage = 1), Fe.shaderLanguage = this._shaderLanguage, Fe.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([He.e(653).then((() => He(45770))), He.e(659).then((() => He(45772)))]) : await Promise.all([He.e(635).then((() => He(45780))), He.e(641).then((() => He(45785)))])
          };
          const ee = new oe.o("colorShader", this.Xx(), "color", Fe, !1);
          ee.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(ee)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(ee) {
        const ie = this.material;
        if (ie === ee) return;
        const He = ie && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(ee), He && ie?.dispose()
      }
      _setInternalMaterial(ee) {
        this._setMaterial(ee), this.material && (this.material.fillMode = Je.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(ee) {}
      _bind(ee, ie) {
        if (!this._geometry) return this;
        const He = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ie, He) : this._geometry._bind(ie, He, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: ee,
            g: ie,
            b: He
          } = this.color;
          this._color4.set(ee, ie, He, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(ee, ie, He) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const ye = this.Xx().Nf();
        return this._unIndexed ? ye.drawArraysType(Je.e.LineListDrawMode, ee.verticesStart, ee.verticesCount, He) : ye.drawElementsType(Je.e.LineListDrawMode, ee.indexStart, ee.indexCount, He), this
      }
      dispose(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ie) && this.material?.dispose(!1, !1, !0), super.dispose(ee)
      }
      clone(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0;
        if (ie && void 0 === ie._addToSceneRootNodes) {
          const He = ie;
          return He.source = this, new ke(ee, this.Xx(), He.parent, He.source, He.doNotCloneChildren)
        }
        return new ke(ee, this.Xx(), ie, this, He)
      }
      createInstance(ee) {
        const ie = new qe(ee, this);
        if (this.pC) {
          ie.pC = {};
          for (const ee in this.pC) ie.pC[ee] = this.pC[ee]
        }
        return ie
      }
      serialize(ee) {
        super.serialize(ee), ee.color = this.color.Qbe(), ee.alpha = this.alpha
      }
      static Parse(ee, ie) {
        const He = new ke(ee.name, ie);
        return He.color = Me.c.FromArray(ee.color), He.alpha = ee.alpha, He
      }
    }
    ke.ForceGLSL = !1;
    class qe extends Fe.c {
      constructor(ee, ie) {
        super(ee, ie), this.intersectionThreshold = ie.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let fe = !1;

    function Te() {
      fe || (fe = !0, Ue.b._LinesMeshParser = (ee, ie) => ke.Parse(ee, ie))
    }(ye = ke.prototype).enableEdgesRendering ?? (ye.enableEdgesRendering = (0, Re.h)("LinesMesh", "enableEdgesRendering")), (be = qe.prototype).enableEdgesRendering ?? (be.enableEdgesRendering = (0, Re.h)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);