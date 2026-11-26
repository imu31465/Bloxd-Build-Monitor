export const id = 288;
export const ids = [288];
export const modules = {
  44486: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {}
    JV.AUTOSAMPLERSUFFIX = "Sampler", JV.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", JV.ALPHA_DISABLE = 0, JV.ALPHA_ADD = 1, JV.ALPHA_COMBINE = 2, JV.ALPHA_SUBTRACT = 3, JV.ALPHA_MULTIPLY = 4, JV.ALPHA_MAXIMIZED = 5, JV.ALPHA_ONEONE = 6, JV.ALPHA_PREMULTIPLIED = 7, JV.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, JV.ALPHA_INTERPOLATE = 9, JV.ALPHA_SCREENMODE = 10, JV.ALPHA_ONEONE_ONEONE = 11, JV.ALPHA_ALPHATOCOLOR = 12, JV.ALPHA_REVERSEONEMINUS = 13, JV.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, JV.ALPHA_ONEONE_ONEZERO = 15, JV.ALPHA_EXCLUSION = 16, JV.ALPHA_LAYER_ACCUMULATE = 17, JV.ALPHA_MIN = 18, JV.ALPHA_MAX = 19, JV.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, JV.ALPHA_REPLACE_COLOR = 21, JV.ALPHA_EQUATION_ADD = 0, JV.ALPHA_EQUATION_SUBSTRACT = 1, JV.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, JV.ALPHA_EQUATION_MAX = 3, JV.ALPHA_EQUATION_MIN = 4, JV.ALPHA_EQUATION_DARKEN = 5, JV.DELAYLOADSTATE_NONE = 0, JV.DELAYLOADSTATE_LOADED = 1, JV.DELAYLOADSTATE_LOADING = 2, JV.DELAYLOADSTATE_NOTLOADED = 4, JV.NEVER = 512, JV.ALWAYS = 519, JV.LESS = 513, JV.EQUAL = 514, JV.LEQUAL = 515, JV.GREATER = 516, JV.GEQUAL = 518, JV.NOTEQUAL = 517, JV.KEEP = 7680, JV.ZERO = 0, JV.REPLACE = 7681, JV.INCR = 7682, JV.DECR = 7683, JV.INVERT = 5386, JV.INCR_WRAP = 34055, JV.DECR_WRAP = 34056, JV.TEXTURE_CLAMP_ADDRESSMODE = 0, JV.TEXTURE_WRAP_ADDRESSMODE = 1, JV.TEXTURE_MIRROR_ADDRESSMODE = 2, JV.TEXTURE_REPETITION_NONE = 0, JV.TEXTURE_REPETITION_NOISE_BLEND = 1, JV.TEXTURE_REPETITION_HEX_TILING = 2, JV.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, JV.TEXTURE_REPETITION_VORONOI_BOMBING = 4, JV.TEXTURE_CREATIONFLAG_STORAGE = 1, JV.TEXTUREFORMAT_ALPHA = 0, JV.TEXTUREFORMAT_LUMINANCE = 1, JV.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, JV.TEXTUREFORMAT_RGB = 4, JV.TEXTUREFORMAT_RGBA = 5, JV.TEXTUREFORMAT_RED = 6, JV.TEXTUREFORMAT_R = 6, JV.TEXTUREFORMAT_R16_UNORM = 33322, JV.TEXTUREFORMAT_RG16_UNORM = 33324, JV.TEXTUREFORMAT_RGB16_UNORM = 32852, JV.TEXTUREFORMAT_RGBA16_UNORM = 32859, JV.TEXTUREFORMAT_R16_SNORM = 36760, JV.TEXTUREFORMAT_RG16_SNORM = 36761, JV.TEXTUREFORMAT_RGB16_SNORM = 36762, JV.TEXTUREFORMAT_RGBA16_SNORM = 36763, JV.TEXTUREFORMAT_RG = 7, JV.TEXTUREFORMAT_RED_INTEGER = 8, JV.TEXTUREFORMAT_R_INTEGER = 8, JV.TEXTUREFORMAT_RG_INTEGER = 9, JV.TEXTUREFORMAT_RGB_INTEGER = 10, JV.TEXTUREFORMAT_RGBA_INTEGER = 11, JV.TEXTUREFORMAT_BGRA = 12, JV.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, JV.TEXTUREFORMAT_DEPTH32_FLOAT = 14, JV.TEXTUREFORMAT_DEPTH16 = 15, JV.TEXTUREFORMAT_DEPTH24 = 16, JV.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, JV.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, JV.TEXTUREFORMAT_STENCIL8 = 19, JV.TEXTUREFORMAT_UNDEFINED = 4294967295, JV.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, JV.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, JV.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, JV.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, JV.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, JV.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, JV.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, JV.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, JV.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, JV.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, JV.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, JV.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, JV.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, JV.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, JV.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, JV.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, JV.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, JV.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, JV.TEXTURETYPE_UNSIGNED_BYTE = 0, JV.TEXTURETYPE_UNSIGNED_INT = 0, JV.TEXTURETYPE_FLOAT = 1, JV.TEXTURETYPE_HALF_FLOAT = 2, JV.TEXTURETYPE_BYTE = 3, JV.TEXTURETYPE_SHORT = 4, JV.TEXTURETYPE_UNSIGNED_SHORT = 5, JV.TEXTURETYPE_INT = 6, JV.TEXTURETYPE_UNSIGNED_INTEGER = 7, JV.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, JV.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, JV.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, JV.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, JV.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, JV.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, JV.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, JV.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, JV.TEXTURETYPE_UNDEFINED = 16, JV.TEXTURE_2D = 3553, JV.TEXTURE_2D_ARRAY = 35866, JV.TEXTURE_CUBE_MAP = 34067, JV.TEXTURE_CUBE_MAP_ARRAY = 3735928559, JV.TEXTURE_3D = 32879, JV.TEXTURE_NEAREST_SAMPLINGMODE = 1, JV.TEXTURE_NEAREST_NEAREST = 1, JV.TEXTURE_BILINEAR_SAMPLINGMODE = 2, JV.TEXTURE_LINEAR_LINEAR = 2, JV.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, JV.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, JV.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, JV.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, JV.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, JV.TEXTURE_NEAREST_LINEAR = 7, JV.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, JV.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, JV.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, JV.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, JV.TEXTURE_LINEAR_NEAREST = 12, JV.TEXTURE_EXPLICIT_MODE = 0, JV.TEXTURE_SPHERICAL_MODE = 1, JV.TEXTURE_PLANAR_MODE = 2, JV.TEXTURE_CUBIC_MODE = 3, JV.TEXTURE_PROJECTION_MODE = 4, JV.TEXTURE_SKYBOX_MODE = 5, JV.TEXTURE_INVCUBIC_MODE = 6, JV.TEXTURE_EQUIRECTANGULAR_MODE = 7, JV.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, JV.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, JV.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, JV.TEXTURE_FILTERING_QUALITY_HIGH = 64, JV.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, JV.TEXTURE_FILTERING_QUALITY_LOW = 8, JV.SCALEMODE_FLOOR = 1, JV.SCALEMODE_NEAREST = 2, JV.SCALEMODE_CEILING = 3, JV.MATERIAL_TextureDirtyFlag = 1, JV.MATERIAL_LightDirtyFlag = 2, JV.MATERIAL_FresnelDirtyFlag = 4, JV.MATERIAL_AttributesDirtyFlag = 8, JV.MATERIAL_MiscDirtyFlag = 16, JV.MATERIAL_PrePassDirtyFlag = 32, JV.MATERIAL_ImageProcessingDirtyFlag = 64, JV.MATERIAL_AllDirtyFlag = 127, JV.MATERIAL_TriangleFillMode = 0, JV.MATERIAL_WireFrameFillMode = 1, JV.MATERIAL_PointFillMode = 2, JV.MATERIAL_PointListDrawMode = 3, JV.MATERIAL_LineListDrawMode = 4, JV.MATERIAL_LineLoopDrawMode = 5, JV.MATERIAL_LineStripDrawMode = 6, JV.MATERIAL_TriangleStripDrawMode = 7, JV.MATERIAL_TriangleFanDrawMode = 8, JV.MATERIAL_ClockWiseSideOrientation = 0, JV.MATERIAL_CounterClockWiseSideOrientation = 1, JV.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, JV.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, JV.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, JV.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, JV.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, JV.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, JV.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, JV.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, JV.ACTION_NothingTrigger = 0, JV.ACTION_OnPickTrigger = 1, JV.ACTION_OnLeftPickTrigger = 2, JV.ACTION_OnRightPickTrigger = 3, JV.ACTION_OnCenterPickTrigger = 4, JV.ACTION_OnPickDownTrigger = 5, JV.ACTION_OnDoublePickTrigger = 6, JV.ACTION_OnPickUpTrigger = 7, JV.ACTION_OnPickOutTrigger = 16, JV.ACTION_OnLongPressTrigger = 8, JV.ACTION_OnPointerOverTrigger = 9, JV.ACTION_OnPointerOutTrigger = 10, JV.ACTION_OnEveryFrameTrigger = 11, JV.ACTION_OnIntersectionEnterTrigger = 12, JV.ACTION_OnIntersectionExitTrigger = 13, JV.ACTION_OnKeyDownTrigger = 14, JV.ACTION_OnKeyUpTrigger = 15, JV.PARTICLES_BILLBOARDMODE_Y = 2, JV.PARTICLES_BILLBOARDMODE_ALL = 7, JV.PARTICLES_BILLBOARDMODE_STRETCHED = 8, JV.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, JV.MESHES_CULLINGSTRATEGY_STANDARD = 0, JV.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, JV.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, JV.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, JV.SCENELOADER_NO_LOGGING = 0, JV.SCENELOADER_MINIMAL_LOGGING = 1, JV.SCENELOADER_SUMMARY_LOGGING = 2, JV.SCENELOADER_DETAILED_LOGGING = 3, JV.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, JV.PREPASS_POSITION_TEXTURE_TYPE = 1, JV.PREPASS_VELOCITY_TEXTURE_TYPE = 2, JV.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, JV.PREPASS_COLOR_TEXTURE_TYPE = 4, JV.PREPASS_DEPTH_TEXTURE_TYPE = 5, JV.PREPASS_NORMAL_TEXTURE_TYPE = 6, JV.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, JV.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, JV.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, JV.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, JV.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, JV.PREPASS_ALBEDO_TEXTURE_TYPE = 12, JV.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, JV.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, JV.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, JV.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, JV.BUFFER_CREATIONFLAG_READ = 1, JV.BUFFER_CREATIONFLAG_WRITE = 2, JV.BUFFER_CREATIONFLAG_READWRITE = 3, JV.BUFFER_CREATIONFLAG_UNIFORM = 4, JV.BUFFER_CREATIONFLAG_VERTEX = 8, JV.BUFFER_CREATIONFLAG_INDEX = 16, JV.BUFFER_CREATIONFLAG_STORAGE = 32, JV.BUFFER_CREATIONFLAG_INDIRECT = 64, JV.RENDERPASS_MAIN = 0, JV.INPUT_ALT_KEY = 18, JV.INPUT_CTRL_KEY = 17, JV.INPUT_META_KEY1 = 91, JV.INPUT_META_KEY2 = 92, JV.INPUT_META_KEY3 = 93, JV.INPUT_SHIFT_KEY = 16, JV.SNAPSHOTRENDERING_STANDARD = 0, JV.SNAPSHOTRENDERING_FAST = 1, JV.PERSPECTIVE_CAMERA = 0, JV.ORTHOGRAPHIC_CAMERA = 1, JV.FOVMODE_VERTICAL_FIXED = 0, JV.FOVMODE_HORIZONTAL_FIXED = 1, JV.RIG_MODE_NONE = 0, JV.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, JV.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, JV.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, JV.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, JV.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, JV.RIG_MODE_VR = 20, JV.RIG_MODE_CUSTOM = 22, JV.MAX_SUPPORTED_UV_SETS = 6, JV.GL_ALPHA_EQUATION_ADD = 32774, JV.GL_ALPHA_EQUATION_MIN = 32775, JV.GL_ALPHA_EQUATION_MAX = 32776, JV.GL_ALPHA_EQUATION_SUBTRACT = 32778, JV.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, JV.GL_ALPHA_FUNCTION_SRC = 768, JV.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, JV.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, JV.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, JV.GL_ALPHA_FUNCTION_DST_ALPHA = 772, JV.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, JV.GL_ALPHA_FUNCTION_DST_COLOR = 774, JV.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, JV.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, JV.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, JV.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, JV.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, JV.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, JV.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, JV.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, JV.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, JV.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, JV.SnippetUrl = "https://snippet.babylonjs.com", JV.FOGMODE_NONE = 0, JV.FOGMODE_EXP = 1, JV.FOGMODE_EXP2 = 2, JV.FOGMODE_LINEAR = 3, JV.BYTE = 5120, JV.UNSIGNED_BYTE = 5121, JV.SHORT = 5122, JV.UNSIGNED_SHORT = 5123, JV.INT = 5124, JV.UNSIGNED_INT = 5125, JV.FLOAT = 5126, JV.HALF_FLOAT = 5131, JV.PositionKind = "position", JV.NormalKind = "normal", JV.TangentKind = "tangent", JV.UVKind = "uv", JV.UV2Kind = "uv2", JV.UV3Kind = "uv3", JV.UV4Kind = "uv4", JV.UV5Kind = "uv5", JV.UV6Kind = "uv6", JV.ColorKind = "color", JV.ColorInstanceKind = "instanceColor", JV.MatricesIndicesKind = "matricesIndices", JV.MatricesWeightsKind = "matricesWeights", JV.MatricesIndicesExtraKind = "matricesIndicesExtra", JV.MatricesWeightsExtraKind = "matricesWeightsExtra", JV.ANIMATIONTYPE_FLOAT = 0, JV.ANIMATIONTYPE_VECTOR3 = 1, JV.ANIMATIONTYPE_QUATERNION = 2, JV.ANIMATIONTYPE_MATRIX = 3, JV.ANIMATIONTYPE_COLOR3 = 4, JV.ANIMATIONTYPE_COLOR4 = 7, JV.ANIMATIONTYPE_VECTOR2 = 5, JV.ANIMATIONTYPE_SIZE = 6, JV.ShadowMinZ = 0, JV.ShadowMaxZ = 1e4, JV.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, JV.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  44469: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38269),
      yV = xV(41521),
      pV = xV(41491);
    let QV = (() => {
      var VV;
      let eV, xV, QV, nV, wV = yV.d,
        ZV = [];
      return VV = class extends wV {
        constructor() {
          super(...arguments), this._position = (0, JV.l)(this, ZV), this._needProjectionMatrixCompute = !0, this._viewMatrix = UV.d.Identity(), this._projectionMatrix = UV.d.Identity()
        }
        _setPosition(VV) {
          this._position = VV
        }
        get position() {
          return this._position
        }
        set position(VV) {
          this._setPosition(VV)
        }
        _setDirection(VV) {
          this._direction = VV
        }
        get direction() {
          return this._direction
        }
        set direction(VV) {
          this._setDirection(VV)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(VV) {
          this._shadowMinZ = VV, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(VV) {
          this._shadowMaxZ = VV, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = UV.o.Zero()), UV.o.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = UV.o.Zero()), UV.o.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(VV) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(VV) {
          return this.direction = UV.o.Normalize(VV.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const VV = UV.o.Cross(this.direction, pV.e.Y),
            eV = UV.o.Cross(VV, this.direction);
          return UV.o.RotationFromAxis(VV, eV, this.direction)
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
          super._initCache(), this._cache.position = UV.o.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(VV) {
          return !VV && this.isSynchronized() ? (this._currentRenderId = this.dD().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.iG(this.position), this._worldMatrix || (this._worldMatrix = UV.d.Identity()), UV.d.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(VV) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : VV?.minZ || 0
        }
        getDepthMaxZ(VV) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : VV?.maxZ || 1e4
        }
        setShadowProjectionMatrix(VV, eV, xV) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(eV, xV, VV) : this._setDefaultShadowProjectionMatrix(VV, eV, xV), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(VV) {
          const eV = UV.l.Ik[0];
          let xV = this.position;
          this.computeTransformedInformation() && (xV = this.transformedPosition), UV.o.NormalizeToRef(this.getShadowDirection(VV), eV), 1 === Math.abs(UV.o.Dot(eV, UV.o.Up())) && (eV.z = 1e-13);
          const JV = UV.l.Ik[1];
          return xV.addToRef(eV, JV), UV.d.LookAtLHToRef(xV, JV, UV.o.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(VV, eV) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, VV ?? this._viewMatrix, eV ?? []), this._projectionMatrix
        }
      }, (() => {
        const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(wV[Symbol.metadata] ?? null) : void 0;
        eV = [(0, YV.I)()], xV = [(0, YV.I)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], (0, JV.i)(VV, null, eV, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: VV => "position" in VV,
            get: VV => VV.position
          },
          metadata: UV
        }, null, ZV), (0, JV.i)(VV, null, xV, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: VV => "direction" in VV,
            get: VV => VV.direction
          },
          metadata: UV
        }, null, ZV), (0, JV.i)(VV, null, QV, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: VV => "shadowMinZ" in VV,
            get: VV => VV.shadowMinZ
          },
          metadata: UV
        }, null, ZV), (0, JV.i)(VV, null, nV, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: VV => "shadowMaxZ" in VV,
            get: VV => VV.shadowMaxZ
          },
          metadata: UV
        }, null, ZV), UV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UV
        })
      })(), VV
    })()
  },
  44480: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = xV(41738);
    class YV extends JV.f {
      constructor(VV, eV, xV, YV, UV) {
        let yV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          pV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          QV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          nV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          wV = arguments.length > 9 ? arguments[9] : void 0,
          ZV = arguments.length > 10 ? arguments[10] : void 0,
          vV = arguments.length > 11 ? arguments[11] : void 0,
          rV = arguments.length > 12 ? arguments[12] : void 0;
        super(null, UV, !yV, pV, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, wV), this.format = YV, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== nV || (QV = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== nV || (QV = 1), this._texture = this._engine.createRawTexture(VV, eV, xV, YV, yV, pV, QV, null, nV, wV ?? 0, ZV ?? !1, rV), this.wrapU = JV.f.CLAMP_ADDRESSMODE, this.wrapV = JV.f.CLAMP_ADDRESSMODE, this._waitingForData = !!vV && !VV)
      }
      update(VV) {
        this.updateMipLevel(VV, 0)
      }
      updateMipLevel(VV, eV) {
        this._getEngine().updateRawTexture(this._texture, VV, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, eV), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const VV = new YV(null, this.getSize().width, this.getSize().height, this.format, this.dD(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return VV._texture = this._texture, this._texture.incrementReferences(), VV
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(VV, eV, xV, JV) {
        return new YV(VV, eV, xV, 1, JV, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(VV, eV, xV, JV) {
        return new YV(VV, eV, xV, 2, JV, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(VV, eV, xV, JV) {
        return new YV(VV, eV, xV, 0, JV, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(VV, eV, xV, JV) {
        return new YV(VV, eV, xV, 4, JV, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(VV, eV, xV, JV) {
        return new YV(VV, eV, xV, 5, JV, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(VV, eV, xV, JV) {
        return new YV(VV, eV, xV, 5, JV, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(VV, eV, xV, UV) {
        let yV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          QV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : JV.f.TRILINEAR_SAMPLINGMODE;
        return new YV(VV, eV, xV, 6, UV, yV, pV, QV, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(VV, eV, xV, UV) {
        let yV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          QV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : JV.f.TRILINEAR_SAMPLINGMODE;
        return new YV(VV, eV, xV, 6, UV, yV, pV, QV, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  44511: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV.c
    });
    var JV = xV(41692);
    (0, JV.g)()
  },
  44474: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV.e
    });
    var JV = xV(41713);
    (0, JV.f)()
  },
  41713: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      f: () => bV
    });
    var JV, YV, UV = xV(38389),
      yV = xV(41394),
      pV = xV(41664),
      QV = xV(41720),
      nV = xV(41553),
      wV = xV(41729),
      ZV = xV(41138);
    class vV extends pV.b {
      _isShaderMaterial(VV) {
        return !!VV && "ShaderMaterial" === VV.getClassName()
      }
      constructor(VV) {
        let eV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          JV = arguments.length > 5 ? arguments[5] : void 0,
          YV = arguments.length > 6 ? arguments[6] : void 0,
          pV = arguments.length > 7 ? arguments[7] : void 0;
        super(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, eV, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = JV, this.useVertexAlpha = YV, this.color = new UV.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, eV && (this.color = eV.color.clone(), this.alpha = eV.alpha, this.useVertexColor = eV.useVertexColor, this.useVertexAlpha = eV.useVertexAlpha), this.intersectionThreshold = .1;
        const QV = {
          attributes: [yV.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? QV.defines.push("#define VERTEXALPHA") : QV.needAlphaBlending = !1, this.useVertexColor ? (QV.defines.push("#define VERTEXCOLOR"), QV.attributes.push(yV.j.ColorKind)) : (QV.uniforms.push("color"), this._color4 = new UV.h), pV) this.material = pV;
        else {
          this.dD().sk().isWebGPU && !vV.ForceGLSL && (this._shaderLanguage = 1), QV.shaderLanguage = this._shaderLanguage, QV.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([xV.e(653).then((() => xV(45441))), xV.e(659).then((() => xV(45448)))]) : await Promise.all([xV.e(635).then((() => xV(45456))), xV.e(641).then((() => xV(45458)))])
          };
          const VV = new wV.n("colorShader", this.dD(), "color", QV, !1);
          VV.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(VV)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(VV) {
        const eV = this.material;
        if (eV === VV) return;
        const xV = eV && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(VV), xV && eV?.dispose()
      }
      _setInternalMaterial(VV) {
        this._setMaterial(VV), this.material && (this.material.fillMode = nV.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(VV) {}
      _bind(VV, eV) {
        if (!this._geometry) return this;
        const xV = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(eV, xV) : this._geometry._bind(eV, xV, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: VV,
            g: eV,
            b: xV
          } = this.color;
          this._color4.set(VV, eV, xV, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(VV, eV, xV) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const JV = this.dD().sk();
        return this._unIndexed ? JV.drawArraysType(nV.e.LineListDrawMode, VV.verticesStart, VV.verticesCount, xV) : JV.drawElementsType(nV.e.LineListDrawMode, VV.indexStart, VV.indexCount, xV), this
      }
      dispose(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || eV) && this.material?.dispose(!1, !1, !0), super.dispose(VV)
      }
      clone(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        if (eV && void 0 === eV._addToSceneRootNodes) {
          const xV = eV;
          return xV.source = this, new vV(VV, this.dD(), xV.parent, xV.source, xV.doNotCloneChildren)
        }
        return new vV(VV, this.dD(), eV, this, xV)
      }
      createInstance(VV) {
        const eV = new rV(VV, this);
        if (this.sC) {
          eV.sC = {};
          for (const VV in this.sC) eV.sC[VV] = this.sC[VV]
        }
        return eV
      }
      serialize(VV) {
        super.serialize(VV), VV.color = this.color.WYV(), VV.alpha = this.alpha
      }
      static Parse(VV, eV) {
        const xV = new vV(VV.name, eV);
        return xV.color = UV.d.FromArray(VV.color), xV.alpha = VV.alpha, xV
      }
    }
    vV.ForceGLSL = !1;
    class rV extends QV.c {
      constructor(VV, eV) {
        super(VV, eV), this.intersectionThreshold = eV.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let kV = !1;

    function bV() {
      kV || (kV = !0, pV.b._LinesMeshParser = (VV, eV) => vV.Parse(VV, eV))
    }(JV = vV.prototype).enableEdgesRendering ?? (JV.enableEdgesRendering = (0, ZV.j)("LinesMesh", "enableEdgesRendering")), (YV = rV.prototype).enableEdgesRendering ?? (YV.enableEdgesRendering = (0, ZV.j)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);