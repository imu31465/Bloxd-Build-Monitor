export const id = 252;
export const ids = [252];
export const modules = {
  40413: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {}
    iT.AUTOSAMPLERSUFFIX = "Sampler", iT.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", iT.ALPHA_DISABLE = 0, iT.ALPHA_ADD = 1, iT.ALPHA_COMBINE = 2, iT.ALPHA_SUBTRACT = 3, iT.ALPHA_MULTIPLY = 4, iT.ALPHA_MAXIMIZED = 5, iT.ALPHA_ONEONE = 6, iT.ALPHA_PREMULTIPLIED = 7, iT.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, iT.ALPHA_INTERPOLATE = 9, iT.ALPHA_SCREENMODE = 10, iT.ALPHA_ONEONE_ONEONE = 11, iT.ALPHA_ALPHATOCOLOR = 12, iT.ALPHA_REVERSEONEMINUS = 13, iT.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, iT.ALPHA_ONEONE_ONEZERO = 15, iT.ALPHA_EXCLUSION = 16, iT.ALPHA_LAYER_ACCUMULATE = 17, iT.ALPHA_MIN = 18, iT.ALPHA_MAX = 19, iT.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, iT.ALPHA_REPLACE_COLOR = 21, iT.ALPHA_EQUATION_ADD = 0, iT.ALPHA_EQUATION_SUBSTRACT = 1, iT.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, iT.ALPHA_EQUATION_MAX = 3, iT.ALPHA_EQUATION_MIN = 4, iT.ALPHA_EQUATION_DARKEN = 5, iT.DELAYLOADSTATE_NONE = 0, iT.DELAYLOADSTATE_LOADED = 1, iT.DELAYLOADSTATE_LOADING = 2, iT.DELAYLOADSTATE_NOTLOADED = 4, iT.NEVER = 512, iT.ALWAYS = 519, iT.LESS = 513, iT.EQUAL = 514, iT.LEQUAL = 515, iT.GREATER = 516, iT.GEQUAL = 518, iT.NOTEQUAL = 517, iT.KEEP = 7680, iT.ZERO = 0, iT.REPLACE = 7681, iT.INCR = 7682, iT.DECR = 7683, iT.INVERT = 5386, iT.INCR_WRAP = 34055, iT.DECR_WRAP = 34056, iT.TEXTURE_CLAMP_ADDRESSMODE = 0, iT.TEXTURE_WRAP_ADDRESSMODE = 1, iT.TEXTURE_MIRROR_ADDRESSMODE = 2, iT.TEXTURE_REPETITION_NONE = 0, iT.TEXTURE_REPETITION_NOISE_BLEND = 1, iT.TEXTURE_REPETITION_HEX_TILING = 2, iT.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, iT.TEXTURE_REPETITION_VORONOI_BOMBING = 4, iT.TEXTURE_CREATIONFLAG_STORAGE = 1, iT.TEXTUREFORMAT_ALPHA = 0, iT.TEXTUREFORMAT_LUMINANCE = 1, iT.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, iT.TEXTUREFORMAT_RGB = 4, iT.TEXTUREFORMAT_RGBA = 5, iT.TEXTUREFORMAT_RED = 6, iT.TEXTUREFORMAT_R = 6, iT.TEXTUREFORMAT_R16_UNORM = 33322, iT.TEXTUREFORMAT_RG16_UNORM = 33324, iT.TEXTUREFORMAT_RGB16_UNORM = 32852, iT.TEXTUREFORMAT_RGBA16_UNORM = 32859, iT.TEXTUREFORMAT_R16_SNORM = 36760, iT.TEXTUREFORMAT_RG16_SNORM = 36761, iT.TEXTUREFORMAT_RGB16_SNORM = 36762, iT.TEXTUREFORMAT_RGBA16_SNORM = 36763, iT.TEXTUREFORMAT_RG = 7, iT.TEXTUREFORMAT_RED_INTEGER = 8, iT.TEXTUREFORMAT_R_INTEGER = 8, iT.TEXTUREFORMAT_RG_INTEGER = 9, iT.TEXTUREFORMAT_RGB_INTEGER = 10, iT.TEXTUREFORMAT_RGBA_INTEGER = 11, iT.TEXTUREFORMAT_BGRA = 12, iT.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, iT.TEXTUREFORMAT_DEPTH32_FLOAT = 14, iT.TEXTUREFORMAT_DEPTH16 = 15, iT.TEXTUREFORMAT_DEPTH24 = 16, iT.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, iT.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, iT.TEXTUREFORMAT_STENCIL8 = 19, iT.TEXTUREFORMAT_UNDEFINED = 4294967295, iT.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, iT.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, iT.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, iT.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, iT.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, iT.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, iT.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, iT.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, iT.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, iT.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, iT.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, iT.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, iT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, iT.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, iT.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, iT.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, iT.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, iT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, iT.TEXTURETYPE_UNSIGNED_BYTE = 0, iT.TEXTURETYPE_UNSIGNED_INT = 0, iT.TEXTURETYPE_FLOAT = 1, iT.TEXTURETYPE_HALF_FLOAT = 2, iT.TEXTURETYPE_BYTE = 3, iT.TEXTURETYPE_SHORT = 4, iT.TEXTURETYPE_UNSIGNED_SHORT = 5, iT.TEXTURETYPE_INT = 6, iT.TEXTURETYPE_UNSIGNED_INTEGER = 7, iT.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, iT.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, iT.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, iT.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, iT.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, iT.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, iT.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, iT.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, iT.TEXTURETYPE_UNDEFINED = 16, iT.TEXTURE_2D = 3553, iT.TEXTURE_2D_ARRAY = 35866, iT.TEXTURE_CUBE_MAP = 34067, iT.TEXTURE_CUBE_MAP_ARRAY = 3735928559, iT.TEXTURE_3D = 32879, iT.TEXTURE_NEAREST_SAMPLINGMODE = 1, iT.TEXTURE_NEAREST_NEAREST = 1, iT.TEXTURE_BILINEAR_SAMPLINGMODE = 2, iT.TEXTURE_LINEAR_LINEAR = 2, iT.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, iT.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, iT.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, iT.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, iT.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, iT.TEXTURE_NEAREST_LINEAR = 7, iT.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, iT.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, iT.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, iT.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, iT.TEXTURE_LINEAR_NEAREST = 12, iT.TEXTURE_EXPLICIT_MODE = 0, iT.TEXTURE_SPHERICAL_MODE = 1, iT.TEXTURE_PLANAR_MODE = 2, iT.TEXTURE_CUBIC_MODE = 3, iT.TEXTURE_PROJECTION_MODE = 4, iT.TEXTURE_SKYBOX_MODE = 5, iT.TEXTURE_INVCUBIC_MODE = 6, iT.TEXTURE_EQUIRECTANGULAR_MODE = 7, iT.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, iT.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, iT.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, iT.TEXTURE_FILTERING_QUALITY_HIGH = 64, iT.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, iT.TEXTURE_FILTERING_QUALITY_LOW = 8, iT.SCALEMODE_FLOOR = 1, iT.SCALEMODE_NEAREST = 2, iT.SCALEMODE_CEILING = 3, iT.MATERIAL_TextureDirtyFlag = 1, iT.MATERIAL_LightDirtyFlag = 2, iT.MATERIAL_FresnelDirtyFlag = 4, iT.MATERIAL_AttributesDirtyFlag = 8, iT.MATERIAL_MiscDirtyFlag = 16, iT.MATERIAL_PrePassDirtyFlag = 32, iT.MATERIAL_ImageProcessingDirtyFlag = 64, iT.MATERIAL_AllDirtyFlag = 127, iT.MATERIAL_TriangleFillMode = 0, iT.MATERIAL_WireFrameFillMode = 1, iT.MATERIAL_PointFillMode = 2, iT.MATERIAL_PointListDrawMode = 3, iT.MATERIAL_LineListDrawMode = 4, iT.MATERIAL_LineLoopDrawMode = 5, iT.MATERIAL_LineStripDrawMode = 6, iT.MATERIAL_TriangleStripDrawMode = 7, iT.MATERIAL_TriangleFanDrawMode = 8, iT.MATERIAL_ClockWiseSideOrientation = 0, iT.MATERIAL_CounterClockWiseSideOrientation = 1, iT.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, iT.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, iT.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, iT.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, iT.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, iT.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, iT.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, iT.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, iT.ACTION_NothingTrigger = 0, iT.ACTION_OnPickTrigger = 1, iT.ACTION_OnLeftPickTrigger = 2, iT.ACTION_OnRightPickTrigger = 3, iT.ACTION_OnCenterPickTrigger = 4, iT.ACTION_OnPickDownTrigger = 5, iT.ACTION_OnDoublePickTrigger = 6, iT.ACTION_OnPickUpTrigger = 7, iT.ACTION_OnPickOutTrigger = 16, iT.ACTION_OnLongPressTrigger = 8, iT.ACTION_OnPointerOverTrigger = 9, iT.ACTION_OnPointerOutTrigger = 10, iT.ACTION_OnEveryFrameTrigger = 11, iT.ACTION_OnIntersectionEnterTrigger = 12, iT.ACTION_OnIntersectionExitTrigger = 13, iT.ACTION_OnKeyDownTrigger = 14, iT.ACTION_OnKeyUpTrigger = 15, iT.PARTICLES_BILLBOARDMODE_Y = 2, iT.PARTICLES_BILLBOARDMODE_ALL = 7, iT.PARTICLES_BILLBOARDMODE_STRETCHED = 8, iT.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, iT.MESHES_CULLINGSTRATEGY_STANDARD = 0, iT.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, iT.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, iT.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, iT.SCENELOADER_NO_LOGGING = 0, iT.SCENELOADER_MINIMAL_LOGGING = 1, iT.SCENELOADER_SUMMARY_LOGGING = 2, iT.SCENELOADER_DETAILED_LOGGING = 3, iT.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, iT.PREPASS_POSITION_TEXTURE_TYPE = 1, iT.PREPASS_VELOCITY_TEXTURE_TYPE = 2, iT.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, iT.PREPASS_COLOR_TEXTURE_TYPE = 4, iT.PREPASS_DEPTH_TEXTURE_TYPE = 5, iT.PREPASS_NORMAL_TEXTURE_TYPE = 6, iT.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, iT.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, iT.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, iT.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, iT.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, iT.PREPASS_ALBEDO_TEXTURE_TYPE = 12, iT.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, iT.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, iT.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, iT.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, iT.BUFFER_CREATIONFLAG_READ = 1, iT.BUFFER_CREATIONFLAG_WRITE = 2, iT.BUFFER_CREATIONFLAG_READWRITE = 3, iT.BUFFER_CREATIONFLAG_UNIFORM = 4, iT.BUFFER_CREATIONFLAG_VERTEX = 8, iT.BUFFER_CREATIONFLAG_INDEX = 16, iT.BUFFER_CREATIONFLAG_STORAGE = 32, iT.BUFFER_CREATIONFLAG_INDIRECT = 64, iT.RENDERPASS_MAIN = 0, iT.INPUT_ALT_KEY = 18, iT.INPUT_CTRL_KEY = 17, iT.INPUT_META_KEY1 = 91, iT.INPUT_META_KEY2 = 92, iT.INPUT_META_KEY3 = 93, iT.INPUT_SHIFT_KEY = 16, iT.SNAPSHOTRENDERING_STANDARD = 0, iT.SNAPSHOTRENDERING_FAST = 1, iT.PERSPECTIVE_CAMERA = 0, iT.ORTHOGRAPHIC_CAMERA = 1, iT.FOVMODE_VERTICAL_FIXED = 0, iT.FOVMODE_HORIZONTAL_FIXED = 1, iT.RIG_MODE_NONE = 0, iT.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, iT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, iT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, iT.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, iT.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, iT.RIG_MODE_VR = 20, iT.RIG_MODE_CUSTOM = 22, iT.MAX_SUPPORTED_UV_SETS = 6, iT.GL_ALPHA_EQUATION_ADD = 32774, iT.GL_ALPHA_EQUATION_MIN = 32775, iT.GL_ALPHA_EQUATION_MAX = 32776, iT.GL_ALPHA_EQUATION_SUBTRACT = 32778, iT.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, iT.GL_ALPHA_FUNCTION_SRC = 768, iT.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, iT.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, iT.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, iT.GL_ALPHA_FUNCTION_DST_ALPHA = 772, iT.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, iT.GL_ALPHA_FUNCTION_DST_COLOR = 774, iT.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, iT.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, iT.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, iT.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, iT.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, iT.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, iT.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, iT.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, iT.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, iT.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, iT.SnippetUrl = "https://snippet.babylonjs.com", iT.FOGMODE_NONE = 0, iT.FOGMODE_EXP = 1, iT.FOGMODE_EXP2 = 2, iT.FOGMODE_LINEAR = 3, iT.BYTE = 5120, iT.UNSIGNED_BYTE = 5121, iT.SHORT = 5122, iT.UNSIGNED_SHORT = 5123, iT.INT = 5124, iT.UNSIGNED_INT = 5125, iT.FLOAT = 5126, iT.HALF_FLOAT = 5131, iT.PositionKind = "position", iT.NormalKind = "normal", iT.TangentKind = "tangent", iT.UVKind = "uv", iT.UV2Kind = "uv2", iT.UV3Kind = "uv3", iT.UV4Kind = "uv4", iT.UV5Kind = "uv5", iT.UV6Kind = "uv6", iT.ColorKind = "color", iT.ColorInstanceKind = "instanceColor", iT.MatricesIndicesKind = "matricesIndices", iT.MatricesWeightsKind = "matricesWeights", iT.MatricesIndicesExtraKind = "matricesIndicesExtra", iT.MatricesWeightsExtraKind = "matricesWeightsExtra", iT.ANIMATIONTYPE_FLOAT = 0, iT.ANIMATIONTYPE_VECTOR3 = 1, iT.ANIMATIONTYPE_QUATERNION = 2, iT.ANIMATIONTYPE_MATRIX = 3, iT.ANIMATIONTYPE_COLOR3 = 4, iT.ANIMATIONTYPE_COLOR4 = 7, iT.ANIMATIONTYPE_VECTOR2 = 5, iT.ANIMATIONTYPE_SIZE = 6, iT.ShadowMinZ = 0, iT.ShadowMaxZ = 1e4, iT.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, iT.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  40395: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36118),
      WT = IT(39031),
      XT = IT(38997);
    let BT = (() => {
      var TT;
      let oT, IT, BT, FT, ST = WT.b,
        DT = [];
      return TT = class extends ST {
        constructor() {
          super(...arguments), this._position = (0, iT.j)(this, DT), this._needProjectionMatrixCompute = !0, this._viewMatrix = kT.b.Identity(), this._projectionMatrix = kT.b.Identity()
        }
        _setPosition(TT) {
          this._position = TT
        }
        get position() {
          return this._position
        }
        set position(TT) {
          this._setPosition(TT)
        }
        _setDirection(TT) {
          this._direction = TT
        }
        get direction() {
          return this._direction
        }
        set direction(TT) {
          this._setDirection(TT)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(TT) {
          this._shadowMinZ = TT, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(TT) {
          this._shadowMaxZ = TT, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = kT.m.Zero()), kT.m.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = kT.m.Zero()), kT.m.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(TT) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(TT) {
          return this.direction = kT.m.Normalize(TT.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const TT = kT.m.Cross(this.direction, XT.d.Y),
            oT = kT.m.Cross(TT, this.direction);
          return kT.m.RotationFromAxis(TT, oT, this.direction)
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
          super._initCache(), this._cache.position = kT.m.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(TT) {
          return !TT && this.isSynchronized() ? (this._currentRenderId = this.pC().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.SIT(this.position), this._worldMatrix || (this._worldMatrix = kT.b.Identity()), kT.b.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(TT) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : TT?.minZ || 0
        }
        getDepthMaxZ(TT) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : TT?.maxZ || 1e4
        }
        setShadowProjectionMatrix(TT, oT, IT) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(oT, IT, TT) : this._setDefaultShadowProjectionMatrix(TT, oT, IT), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(TT) {
          const oT = kT.i.sc[0];
          let IT = this.position;
          this.computeTransformedInformation() && (IT = this.transformedPosition), kT.m.NormalizeToRef(this.getShadowDirection(TT), oT), 1 === Math.abs(kT.m.Dot(oT, kT.m.Up())) && (oT.z = 1e-13);
          const iT = kT.i.sc[1];
          return IT.addToRef(oT, iT), kT.b.LookAtLHToRef(IT, iT, kT.m.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(TT, oT) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, TT ?? this._viewMatrix, oT ?? []), this._projectionMatrix
        }
      }, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(ST[Symbol.metadata] ?? null) : void 0;
        oT = [(0, zT.M)()], IT = [(0, zT.M)()], BT = [(0, zT.P)()], FT = [(0, zT.P)()], (0, iT.h)(TT, null, oT, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: TT => "position" in TT,
            get: TT => TT.position
          },
          metadata: kT
        }, null, DT), (0, iT.h)(TT, null, IT, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: TT => "direction" in TT,
            get: TT => TT.direction
          },
          metadata: kT
        }, null, DT), (0, iT.h)(TT, null, BT, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "shadowMinZ" in TT,
            get: TT => TT.shadowMinZ
          },
          metadata: kT
        }, null, DT), (0, iT.h)(TT, null, FT, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "shadowMaxZ" in TT,
            get: TT => TT.shadowMaxZ
          },
          metadata: kT
        }, null, DT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT
    })()
  },
  40411: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    var iT = IT(39270);
    class zT extends iT.g {
      constructor(TT, oT, IT, zT, kT) {
        let WT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          BT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          FT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          ST = arguments.length > 9 ? arguments[9] : void 0,
          DT = arguments.length > 10 ? arguments[10] : void 0,
          LT = arguments.length > 11 ? arguments[11] : void 0,
          xT = arguments.length > 12 ? arguments[12] : void 0;
        super(null, kT, !WT, XT, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ST), this.format = zT, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== FT || (BT = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== FT || (BT = 1), this._texture = this._engine.createRawTexture(TT, oT, IT, zT, WT, XT, BT, null, FT, ST ?? 0, DT ?? !1, xT), this.wrapU = iT.g.CLAMP_ADDRESSMODE, this.wrapV = iT.g.CLAMP_ADDRESSMODE, this._waitingForData = !!LT && !TT)
      }
      update(TT) {
        this.updateMipLevel(TT, 0)
      }
      updateMipLevel(TT, oT) {
        this._getEngine().updateRawTexture(this._texture, TT, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, oT), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const TT = new zT(null, this.getSize().width, this.getSize().height, this.format, this.pC(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return TT._texture = this._texture, this._texture.incrementReferences(), TT
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(TT, oT, IT, iT) {
        return new zT(TT, oT, IT, 1, iT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(TT, oT, IT, iT) {
        return new zT(TT, oT, IT, 2, iT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(TT, oT, IT, iT) {
        return new zT(TT, oT, IT, 0, iT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(TT, oT, IT, iT) {
        return new zT(TT, oT, IT, 4, iT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(TT, oT, IT, iT) {
        return new zT(TT, oT, IT, 5, iT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(TT, oT, IT, iT) {
        return new zT(TT, oT, IT, 5, iT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(TT, oT, IT, kT) {
        let WT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          XT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          BT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : iT.g.TRILINEAR_SAMPLINGMODE;
        return new zT(TT, oT, IT, 6, kT, WT, XT, BT, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(TT, oT, IT, kT) {
        let WT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          XT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          BT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : iT.g.TRILINEAR_SAMPLINGMODE;
        return new zT(TT, oT, IT, 6, kT, WT, XT, BT, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  40451: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT.e
    });
    var iT = IT(39230);
    (0, iT.f)()
  },
  40400: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT.e
    });
    var iT = IT(39247);
    (0, iT.g)()
  },
  39247: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT,
      g: () => KT
    });
    var iT, zT, kT = IT(36177),
      WT = IT(38923),
      XT = IT(39192),
      BT = IT(39256),
      FT = IT(39068),
      ST = IT(39262),
      DT = IT(38643);
    class LT extends XT.e {
      _isShaderMaterial(TT) {
        return !!TT && "ShaderMaterial" === TT.getClassName()
      }
      constructor(TT) {
        let oT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          iT = arguments.length > 5 ? arguments[5] : void 0,
          zT = arguments.length > 6 ? arguments[6] : void 0,
          XT = arguments.length > 7 ? arguments[7] : void 0;
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, oT, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = iT, this.useVertexAlpha = zT, this.color = new kT.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, oT && (this.color = oT.color.clone(), this.alpha = oT.alpha, this.useVertexColor = oT.useVertexColor, this.useVertexAlpha = oT.useVertexAlpha), this.intersectionThreshold = .1;
        const BT = {
          attributes: [WT.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? BT.defines.push("#define VERTEXALPHA") : BT.needAlphaBlending = !1, this.useVertexColor ? (BT.defines.push("#define VERTEXCOLOR"), BT.attributes.push(WT.i.ColorKind)) : (BT.uniforms.push("color"), this._color4 = new kT.i), XT) this.material = XT;
        else {
          this.pC().Zc().isWebGPU && !LT.ForceGLSL && (this._shaderLanguage = 1), BT.shaderLanguage = this._shaderLanguage, BT.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([IT.e(334).then((() => IT(41360))), IT.e(340).then((() => IT(41366)))]) : await Promise.all([IT.e(316).then((() => IT(41368))), IT.e(322).then((() => IT(41373)))])
          };
          const TT = new ST.r("colorShader", this.pC(), "color", BT, !1);
          TT.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(TT)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(TT) {
        const oT = this.material;
        if (oT === TT) return;
        const IT = oT && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(TT), IT && oT?.dispose()
      }
      _setInternalMaterial(TT) {
        this._setMaterial(TT), this.material && (this.material.fillMode = FT.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(TT) {}
      _bind(TT, oT) {
        if (!this._geometry) return this;
        const IT = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(oT, IT) : this._geometry._bind(oT, IT, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: TT,
            g: oT,
            b: IT
          } = this.color;
          this._color4.set(TT, oT, IT, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(TT, oT, IT) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const iT = this.pC().Zc();
        return this._unIndexed ? iT.drawArraysType(FT.c.LineListDrawMode, TT.verticesStart, TT.verticesCount, IT) : iT.drawElementsType(FT.c.LineListDrawMode, TT.indexStart, TT.indexCount, IT), this
      }
      dispose(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || oT) && this.material?.dispose(!1, !1, !0), super.dispose(TT)
      }
      clone(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        if (oT && void 0 === oT._addToSceneRootNodes) {
          const IT = oT;
          return IT.source = this, new LT(TT, this.pC(), IT.parent, IT.source, IT.doNotCloneChildren)
        }
        return new LT(TT, this.pC(), oT, this, IT)
      }
      createInstance(TT) {
        const oT = new xT(TT, this);
        if (this.HJ) {
          oT.HJ = {};
          for (const TT in this.HJ) oT.HJ[TT] = this.HJ[TT]
        }
        return oT
      }
      serialize(TT) {
        super.serialize(TT), TT.color = this.color.bIT(), TT.alpha = this.alpha
      }
      static Parse(TT, oT) {
        const IT = new LT(TT.name, oT);
        return IT.color = kT.e.FromArray(TT.color), IT.alpha = TT.alpha, IT
      }
    }
    LT.ForceGLSL = !1;
    class xT extends BT.c {
      constructor(TT, oT) {
        super(TT, oT), this.intersectionThreshold = oT.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let cT = !1;

    function KT() {
      cT || (cT = !0, XT.e._LinesMeshParser = (TT, oT) => LT.Parse(TT, oT))
    }(iT = LT.prototype).enableEdgesRendering ?? (iT.enableEdgesRendering = (0, DT.i)("LinesMesh", "enableEdgesRendering")), (zT = xT.prototype).enableEdgesRendering ?? (zT.enableEdgesRendering = (0, DT.i)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);