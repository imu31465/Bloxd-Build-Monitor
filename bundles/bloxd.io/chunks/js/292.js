export const id = 292;
export const ids = [292];
export const modules = {
  45065: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {}
    AH.AUTOSAMPLERSUFFIX = "Sampler", AH.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", AH.ALPHA_DISABLE = 0, AH.ALPHA_ADD = 1, AH.ALPHA_COMBINE = 2, AH.ALPHA_SUBTRACT = 3, AH.ALPHA_MULTIPLY = 4, AH.ALPHA_MAXIMIZED = 5, AH.ALPHA_ONEONE = 6, AH.ALPHA_PREMULTIPLIED = 7, AH.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, AH.ALPHA_INTERPOLATE = 9, AH.ALPHA_SCREENMODE = 10, AH.ALPHA_ONEONE_ONEONE = 11, AH.ALPHA_ALPHATOCOLOR = 12, AH.ALPHA_REVERSEONEMINUS = 13, AH.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, AH.ALPHA_ONEONE_ONEZERO = 15, AH.ALPHA_EXCLUSION = 16, AH.ALPHA_LAYER_ACCUMULATE = 17, AH.ALPHA_MIN = 18, AH.ALPHA_MAX = 19, AH.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, AH.ALPHA_REPLACE_COLOR = 21, AH.ALPHA_EQUATION_ADD = 0, AH.ALPHA_EQUATION_SUBSTRACT = 1, AH.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, AH.ALPHA_EQUATION_MAX = 3, AH.ALPHA_EQUATION_MIN = 4, AH.ALPHA_EQUATION_DARKEN = 5, AH.DELAYLOADSTATE_NONE = 0, AH.DELAYLOADSTATE_LOADED = 1, AH.DELAYLOADSTATE_LOADING = 2, AH.DELAYLOADSTATE_NOTLOADED = 4, AH.NEVER = 512, AH.ALWAYS = 519, AH.LESS = 513, AH.EQUAL = 514, AH.LEQUAL = 515, AH.GREATER = 516, AH.GEQUAL = 518, AH.NOTEQUAL = 517, AH.KEEP = 7680, AH.ZERO = 0, AH.REPLACE = 7681, AH.INCR = 7682, AH.DECR = 7683, AH.INVERT = 5386, AH.INCR_WRAP = 34055, AH.DECR_WRAP = 34056, AH.TEXTURE_CLAMP_ADDRESSMODE = 0, AH.TEXTURE_WRAP_ADDRESSMODE = 1, AH.TEXTURE_MIRROR_ADDRESSMODE = 2, AH.TEXTURE_REPETITION_NONE = 0, AH.TEXTURE_REPETITION_NOISE_BLEND = 1, AH.TEXTURE_REPETITION_HEX_TILING = 2, AH.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, AH.TEXTURE_REPETITION_VORONOI_BOMBING = 4, AH.TEXTURE_CREATIONFLAG_STORAGE = 1, AH.TEXTUREFORMAT_ALPHA = 0, AH.TEXTUREFORMAT_LUMINANCE = 1, AH.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, AH.TEXTUREFORMAT_RGB = 4, AH.TEXTUREFORMAT_RGBA = 5, AH.TEXTUREFORMAT_RED = 6, AH.TEXTUREFORMAT_R = 6, AH.TEXTUREFORMAT_R16_UNORM = 33322, AH.TEXTUREFORMAT_RG16_UNORM = 33324, AH.TEXTUREFORMAT_RGB16_UNORM = 32852, AH.TEXTUREFORMAT_RGBA16_UNORM = 32859, AH.TEXTUREFORMAT_R16_SNORM = 36760, AH.TEXTUREFORMAT_RG16_SNORM = 36761, AH.TEXTUREFORMAT_RGB16_SNORM = 36762, AH.TEXTUREFORMAT_RGBA16_SNORM = 36763, AH.TEXTUREFORMAT_RG = 7, AH.TEXTUREFORMAT_RED_INTEGER = 8, AH.TEXTUREFORMAT_R_INTEGER = 8, AH.TEXTUREFORMAT_RG_INTEGER = 9, AH.TEXTUREFORMAT_RGB_INTEGER = 10, AH.TEXTUREFORMAT_RGBA_INTEGER = 11, AH.TEXTUREFORMAT_BGRA = 12, AH.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, AH.TEXTUREFORMAT_DEPTH32_FLOAT = 14, AH.TEXTUREFORMAT_DEPTH16 = 15, AH.TEXTUREFORMAT_DEPTH24 = 16, AH.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, AH.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, AH.TEXTUREFORMAT_STENCIL8 = 19, AH.TEXTUREFORMAT_UNDEFINED = 4294967295, AH.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, AH.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, AH.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, AH.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, AH.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, AH.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, AH.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, AH.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, AH.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, AH.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, AH.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, AH.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, AH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, AH.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, AH.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, AH.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, AH.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, AH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, AH.TEXTURETYPE_UNSIGNED_BYTE = 0, AH.TEXTURETYPE_UNSIGNED_INT = 0, AH.TEXTURETYPE_FLOAT = 1, AH.TEXTURETYPE_HALF_FLOAT = 2, AH.TEXTURETYPE_BYTE = 3, AH.TEXTURETYPE_SHORT = 4, AH.TEXTURETYPE_UNSIGNED_SHORT = 5, AH.TEXTURETYPE_INT = 6, AH.TEXTURETYPE_UNSIGNED_INTEGER = 7, AH.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, AH.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, AH.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, AH.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, AH.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, AH.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, AH.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, AH.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, AH.TEXTURETYPE_UNDEFINED = 16, AH.TEXTURE_2D = 3553, AH.TEXTURE_2D_ARRAY = 35866, AH.TEXTURE_CUBE_MAP = 34067, AH.TEXTURE_CUBE_MAP_ARRAY = 3735928559, AH.TEXTURE_3D = 32879, AH.TEXTURE_NEAREST_SAMPLINGMODE = 1, AH.TEXTURE_NEAREST_NEAREST = 1, AH.TEXTURE_BILINEAR_SAMPLINGMODE = 2, AH.TEXTURE_LINEAR_LINEAR = 2, AH.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, AH.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, AH.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, AH.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, AH.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, AH.TEXTURE_NEAREST_LINEAR = 7, AH.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, AH.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, AH.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, AH.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, AH.TEXTURE_LINEAR_NEAREST = 12, AH.TEXTURE_EXPLICIT_MODE = 0, AH.TEXTURE_SPHERICAL_MODE = 1, AH.TEXTURE_PLANAR_MODE = 2, AH.TEXTURE_CUBIC_MODE = 3, AH.TEXTURE_PROJECTION_MODE = 4, AH.TEXTURE_SKYBOX_MODE = 5, AH.TEXTURE_INVCUBIC_MODE = 6, AH.TEXTURE_EQUIRECTANGULAR_MODE = 7, AH.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, AH.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, AH.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, AH.TEXTURE_FILTERING_QUALITY_HIGH = 64, AH.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, AH.TEXTURE_FILTERING_QUALITY_LOW = 8, AH.SCALEMODE_FLOOR = 1, AH.SCALEMODE_NEAREST = 2, AH.SCALEMODE_CEILING = 3, AH.MATERIAL_TextureDirtyFlag = 1, AH.MATERIAL_LightDirtyFlag = 2, AH.MATERIAL_FresnelDirtyFlag = 4, AH.MATERIAL_AttributesDirtyFlag = 8, AH.MATERIAL_MiscDirtyFlag = 16, AH.MATERIAL_PrePassDirtyFlag = 32, AH.MATERIAL_ImageProcessingDirtyFlag = 64, AH.MATERIAL_AllDirtyFlag = 127, AH.MATERIAL_TriangleFillMode = 0, AH.MATERIAL_WireFrameFillMode = 1, AH.MATERIAL_PointFillMode = 2, AH.MATERIAL_PointListDrawMode = 3, AH.MATERIAL_LineListDrawMode = 4, AH.MATERIAL_LineLoopDrawMode = 5, AH.MATERIAL_LineStripDrawMode = 6, AH.MATERIAL_TriangleStripDrawMode = 7, AH.MATERIAL_TriangleFanDrawMode = 8, AH.MATERIAL_ClockWiseSideOrientation = 0, AH.MATERIAL_CounterClockWiseSideOrientation = 1, AH.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, AH.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, AH.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, AH.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, AH.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, AH.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, AH.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, AH.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, AH.ACTION_NothingTrigger = 0, AH.ACTION_OnPickTrigger = 1, AH.ACTION_OnLeftPickTrigger = 2, AH.ACTION_OnRightPickTrigger = 3, AH.ACTION_OnCenterPickTrigger = 4, AH.ACTION_OnPickDownTrigger = 5, AH.ACTION_OnDoublePickTrigger = 6, AH.ACTION_OnPickUpTrigger = 7, AH.ACTION_OnPickOutTrigger = 16, AH.ACTION_OnLongPressTrigger = 8, AH.ACTION_OnPointerOverTrigger = 9, AH.ACTION_OnPointerOutTrigger = 10, AH.ACTION_OnEveryFrameTrigger = 11, AH.ACTION_OnIntersectionEnterTrigger = 12, AH.ACTION_OnIntersectionExitTrigger = 13, AH.ACTION_OnKeyDownTrigger = 14, AH.ACTION_OnKeyUpTrigger = 15, AH.PARTICLES_BILLBOARDMODE_Y = 2, AH.PARTICLES_BILLBOARDMODE_ALL = 7, AH.PARTICLES_BILLBOARDMODE_STRETCHED = 8, AH.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, AH.MESHES_CULLINGSTRATEGY_STANDARD = 0, AH.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, AH.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, AH.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, AH.SCENELOADER_NO_LOGGING = 0, AH.SCENELOADER_MINIMAL_LOGGING = 1, AH.SCENELOADER_SUMMARY_LOGGING = 2, AH.SCENELOADER_DETAILED_LOGGING = 3, AH.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, AH.PREPASS_POSITION_TEXTURE_TYPE = 1, AH.PREPASS_VELOCITY_TEXTURE_TYPE = 2, AH.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, AH.PREPASS_COLOR_TEXTURE_TYPE = 4, AH.PREPASS_DEPTH_TEXTURE_TYPE = 5, AH.PREPASS_NORMAL_TEXTURE_TYPE = 6, AH.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, AH.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, AH.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, AH.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, AH.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, AH.PREPASS_ALBEDO_TEXTURE_TYPE = 12, AH.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, AH.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, AH.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, AH.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, AH.BUFFER_CREATIONFLAG_READ = 1, AH.BUFFER_CREATIONFLAG_WRITE = 2, AH.BUFFER_CREATIONFLAG_READWRITE = 3, AH.BUFFER_CREATIONFLAG_UNIFORM = 4, AH.BUFFER_CREATIONFLAG_VERTEX = 8, AH.BUFFER_CREATIONFLAG_INDEX = 16, AH.BUFFER_CREATIONFLAG_STORAGE = 32, AH.BUFFER_CREATIONFLAG_INDIRECT = 64, AH.RENDERPASS_MAIN = 0, AH.INPUT_ALT_KEY = 18, AH.INPUT_CTRL_KEY = 17, AH.INPUT_META_KEY1 = 91, AH.INPUT_META_KEY2 = 92, AH.INPUT_META_KEY3 = 93, AH.INPUT_SHIFT_KEY = 16, AH.SNAPSHOTRENDERING_STANDARD = 0, AH.SNAPSHOTRENDERING_FAST = 1, AH.PERSPECTIVE_CAMERA = 0, AH.ORTHOGRAPHIC_CAMERA = 1, AH.FOVMODE_VERTICAL_FIXED = 0, AH.FOVMODE_HORIZONTAL_FIXED = 1, AH.RIG_MODE_NONE = 0, AH.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, AH.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, AH.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, AH.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, AH.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, AH.RIG_MODE_VR = 20, AH.RIG_MODE_CUSTOM = 22, AH.MAX_SUPPORTED_UV_SETS = 6, AH.GL_ALPHA_EQUATION_ADD = 32774, AH.GL_ALPHA_EQUATION_MIN = 32775, AH.GL_ALPHA_EQUATION_MAX = 32776, AH.GL_ALPHA_EQUATION_SUBTRACT = 32778, AH.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, AH.GL_ALPHA_FUNCTION_SRC = 768, AH.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, AH.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, AH.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, AH.GL_ALPHA_FUNCTION_DST_ALPHA = 772, AH.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, AH.GL_ALPHA_FUNCTION_DST_COLOR = 774, AH.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, AH.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, AH.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, AH.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, AH.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, AH.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, AH.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, AH.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, AH.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, AH.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, AH.SnippetUrl = "https://snippet.babylonjs.com", AH.FOGMODE_NONE = 0, AH.FOGMODE_EXP = 1, AH.FOGMODE_EXP2 = 2, AH.FOGMODE_LINEAR = 3, AH.BYTE = 5120, AH.UNSIGNED_BYTE = 5121, AH.SHORT = 5122, AH.UNSIGNED_SHORT = 5123, AH.INT = 5124, AH.UNSIGNED_INT = 5125, AH.FLOAT = 5126, AH.HALF_FLOAT = 5131, AH.PositionKind = "position", AH.NormalKind = "normal", AH.TangentKind = "tangent", AH.UVKind = "uv", AH.UV2Kind = "uv2", AH.UV3Kind = "uv3", AH.UV4Kind = "uv4", AH.UV5Kind = "uv5", AH.UV6Kind = "uv6", AH.ColorKind = "color", AH.ColorInstanceKind = "instanceColor", AH.MatricesIndicesKind = "matricesIndices", AH.MatricesWeightsKind = "matricesWeights", AH.MatricesIndicesExtraKind = "matricesIndicesExtra", AH.MatricesWeightsExtraKind = "matricesWeightsExtra", AH.ANIMATIONTYPE_FLOAT = 0, AH.ANIMATIONTYPE_VECTOR3 = 1, AH.ANIMATIONTYPE_QUATERNION = 2, AH.ANIMATIONTYPE_MATRIX = 3, AH.ANIMATIONTYPE_COLOR3 = 4, AH.ANIMATIONTYPE_COLOR4 = 7, AH.ANIMATIONTYPE_VECTOR2 = 5, AH.ANIMATIONTYPE_SIZE = 6, AH.ShadowMinZ = 0, AH.ShadowMaxZ = 1e4, AH.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, AH.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  45047: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37963),
      hH = LH(41535),
      tH = LH(41504);
    let zH = (() => {
      var HH;
      let BH, LH, zH, CH, EH = hH.b,
        XH = [];
      return HH = class extends EH {
        constructor() {
          super(...arguments), this._position = (0, AH.k)(this, XH), this._needProjectionMatrixCompute = !0, this._viewMatrix = SH.e.Identity(), this._projectionMatrix = SH.e.Identity()
        }
        _setPosition(HH) {
          this._position = HH
        }
        get position() {
          return this._position
        }
        set position(HH) {
          this._setPosition(HH)
        }
        _setDirection(HH) {
          this._direction = HH
        }
        get direction() {
          return this._direction
        }
        set direction(HH) {
          this._setDirection(HH)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(HH) {
          this._shadowMinZ = HH, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(HH) {
          this._shadowMaxZ = HH, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = SH.o.Zero()), SH.o.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = SH.o.Zero()), SH.o.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(HH) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(HH) {
          return this.direction = SH.o.Normalize(HH.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const HH = SH.o.Cross(this.direction, tH.d.Y),
            BH = SH.o.Cross(HH, this.direction);
          return SH.o.RotationFromAxis(HH, BH, this.direction)
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
          super._initCache(), this._cache.position = SH.o.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(HH) {
          return !HH && this.isSynchronized() ? (this._currentRenderId = this.yN().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Tm(this.position), this._worldMatrix || (this._worldMatrix = SH.e.Identity()), SH.e.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(HH) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : HH?.minZ || 0
        }
        getDepthMaxZ(HH) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : HH?.maxZ || 1e4
        }
        setShadowProjectionMatrix(HH, BH, LH) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(BH, LH, HH) : this._setDefaultShadowProjectionMatrix(HH, BH, LH), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(HH) {
          const BH = SH.l.lu[0];
          let LH = this.position;
          this.computeTransformedInformation() && (LH = this.transformedPosition), SH.o.NormalizeToRef(this.getShadowDirection(HH), BH), 1 === Math.abs(SH.o.Dot(BH, SH.o.Up())) && (BH.z = 1e-13);
          const AH = SH.l.lu[1];
          return LH.addToRef(BH, AH), SH.e.LookAtLHToRef(LH, AH, SH.o.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(HH, BH) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, HH ?? this._viewMatrix, BH ?? []), this._projectionMatrix
        }
      }, (() => {
        const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(EH[Symbol.metadata] ?? null) : void 0;
        BH = [(0, rH.F)()], LH = [(0, rH.F)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], (0, AH.g)(HH, null, BH, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: HH => "position" in HH,
            get: HH => HH.position
          },
          metadata: SH
        }, null, XH), (0, AH.g)(HH, null, LH, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: HH => "direction" in HH,
            get: HH => HH.direction
          },
          metadata: SH
        }, null, XH), (0, AH.g)(HH, null, zH, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "shadowMinZ" in HH,
            get: HH => HH.shadowMinZ
          },
          metadata: SH
        }, null, XH), (0, AH.g)(HH, null, CH, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "shadowMaxZ" in HH,
            get: HH => HH.shadowMaxZ
          },
          metadata: SH
        }, null, XH), SH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SH
        })
      })(), HH
    })()
  },
  45062: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    var AH = LH(41777);
    class rH extends AH.g {
      constructor(HH, BH, LH, rH, SH) {
        let hH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          zH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          EH = arguments.length > 9 ? arguments[9] : void 0,
          XH = arguments.length > 10 ? arguments[10] : void 0,
          GH = arguments.length > 11 ? arguments[11] : void 0,
          YH = arguments.length > 12 ? arguments[12] : void 0;
        super(null, SH, !hH, tH, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, EH), this.format = rH, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== CH || (zH = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== CH || (zH = 1), this._texture = this._engine.createRawTexture(HH, BH, LH, rH, hH, tH, zH, null, CH, EH ?? 0, XH ?? !1, YH), this.wrapU = AH.g.CLAMP_ADDRESSMODE, this.wrapV = AH.g.CLAMP_ADDRESSMODE, this._waitingForData = !!GH && !HH)
      }
      update(HH) {
        this.updateMipLevel(HH, 0)
      }
      updateMipLevel(HH, BH) {
        this._getEngine().updateRawTexture(this._texture, HH, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, BH), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const HH = new rH(null, this.getSize().width, this.getSize().height, this.format, this.yN(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return HH._texture = this._texture, this._texture.incrementReferences(), HH
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(HH, BH, LH, AH) {
        return new rH(HH, BH, LH, 1, AH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(HH, BH, LH, AH) {
        return new rH(HH, BH, LH, 2, AH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(HH, BH, LH, AH) {
        return new rH(HH, BH, LH, 0, AH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(HH, BH, LH, AH) {
        return new rH(HH, BH, LH, 4, AH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(HH, BH, LH, AH) {
        return new rH(HH, BH, LH, 5, AH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(HH, BH, LH, AH) {
        return new rH(HH, BH, LH, 5, AH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(HH, BH, LH, SH) {
        let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          tH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          zH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : AH.g.TRILINEAR_SAMPLINGMODE;
        return new rH(HH, BH, LH, 6, SH, hH, tH, zH, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(HH, BH, LH, SH) {
        let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          tH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          zH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : AH.g.TRILINEAR_SAMPLINGMODE;
        return new rH(HH, BH, LH, 6, SH, hH, tH, zH, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  45102: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH.c
    });
    var AH = LH(41730);
    (0, AH.d)()
  },
  45055: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH.e
    });
    var AH = LH(41754);
    (0, AH.h)()
  },
  41754: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      h: () => QH
    });
    var AH, rH, SH = LH(38074),
      hH = LH(41427),
      tH = LH(41693),
      zH = LH(41762),
      CH = LH(41573),
      EH = LH(41769),
      XH = LH(41169);
    class GH extends tH.c {
      _isShaderMaterial(HH) {
        return !!HH && "ShaderMaterial" === HH.getClassName()
      }
      constructor(HH) {
        let BH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          AH = arguments.length > 5 ? arguments[5] : void 0,
          rH = arguments.length > 6 ? arguments[6] : void 0,
          tH = arguments.length > 7 ? arguments[7] : void 0;
        super(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, BH, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = AH, this.useVertexAlpha = rH, this.color = new SH.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, BH && (this.color = BH.color.clone(), this.alpha = BH.alpha, this.useVertexColor = BH.useVertexColor, this.useVertexAlpha = BH.useVertexAlpha), this.intersectionThreshold = .1;
        const zH = {
          attributes: [hH.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? zH.defines.push("#define VERTEXALPHA") : zH.needAlphaBlending = !1, this.useVertexColor ? (zH.defines.push("#define VERTEXCOLOR"), zH.attributes.push(hH.i.ColorKind)) : (zH.uniforms.push("color"), this._color4 = new SH.g), tH) this.material = tH;
        else {
          this.yN().Iu().isWebGPU && !GH.ForceGLSL && (this._shaderLanguage = 1), zH.shaderLanguage = this._shaderLanguage, zH.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([LH.e(653).then((() => LH(45996))), LH.e(659).then((() => LH(46001)))]) : await Promise.all([LH.e(635).then((() => LH(46010))), LH.e(641).then((() => LH(46015)))])
          };
          const HH = new EH.r("colorShader", this.yN(), "color", zH, !1);
          HH.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(HH)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(HH) {
        const BH = this.material;
        if (BH === HH) return;
        const LH = BH && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(HH), LH && BH?.dispose()
      }
      _setInternalMaterial(HH) {
        this._setMaterial(HH), this.material && (this.material.fillMode = CH.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(HH) {}
      _bind(HH, BH) {
        if (!this._geometry) return this;
        const LH = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(BH, LH) : this._geometry._bind(BH, LH, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: HH,
            g: BH,
            b: LH
          } = this.color;
          this._color4.set(HH, BH, LH, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(HH, BH, LH) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const AH = this.yN().Iu();
        return this._unIndexed ? AH.drawArraysType(CH.c.LineListDrawMode, HH.verticesStart, HH.verticesCount, LH) : AH.drawElementsType(CH.c.LineListDrawMode, HH.indexStart, HH.indexCount, LH), this
      }
      dispose(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || BH) && this.material?.dispose(!1, !1, !0), super.dispose(HH)
      }
      clone(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        if (BH && void 0 === BH._addToSceneRootNodes) {
          const LH = BH;
          return LH.source = this, new GH(HH, this.yN(), LH.parent, LH.source, LH.doNotCloneChildren)
        }
        return new GH(HH, this.yN(), BH, this, LH)
      }
      createInstance(HH) {
        const BH = new YH(HH, this);
        if (this.kF) {
          BH.kF = {};
          for (const HH in this.kF) BH.kF[HH] = this.kF[HH]
        }
        return BH
      }
      serialize(HH) {
        super.serialize(HH), HH.color = this.color.xrH(), HH.alpha = this.alpha
      }
      static Parse(HH, BH) {
        const LH = new GH(HH.name, BH);
        return LH.color = SH.c.FromArray(HH.color), LH.alpha = HH.alpha, LH
      }
    }
    GH.ForceGLSL = !1;
    class YH extends zH.c {
      constructor(HH, BH) {
        super(HH, BH), this.intersectionThreshold = BH.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let uH = !1;

    function QH() {
      uH || (uH = !0, tH.c._LinesMeshParser = (HH, BH) => GH.Parse(HH, BH))
    }(AH = GH.prototype).enableEdgesRendering ?? (AH.enableEdgesRendering = (0, XH.f)("LinesMesh", "enableEdgesRendering")), (rH = YH.prototype).enableEdgesRendering ?? (rH.enableEdgesRendering = (0, XH.f)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);